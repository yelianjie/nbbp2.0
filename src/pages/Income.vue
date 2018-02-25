<template>
  <div class="container bg1">
    <div style="height:10px;"></div>
    <group style="background: #181b2a;">
      <cell title="我的余额/牛角" color="#fd711a" :is-link="false" icon-name="money"><h2 style="font-weight:normal;">{{userInfo.balance}}</h2></cell>
      <cell title="我的收益/元" color="#eccd1d" :is-link="false" icon-name="coin"><h2 style="color: #f31374;font-weight:normal;">{{userInfo.profit_balance}}</h2></cell>
    </group>
    <div style="margin: 25px 0.48rem;">
      <x-button :gradients="['#2b3044', '#2b3044']" @click.native="exchangeVisible = true">兑换牛角</x-button>
      <x-button :gradients="['#f31374', '#f31374']" @click.native="depositVisible = true" style="margin-top: 10px;">我要提现</x-button>
    </div>
    <div v-transfer-dom>
      <bp-dialog :bg-title="true" :bgSrc="exchangeBg" v-model="exchangeVisible" @onConfirm="exchange">
        <div class="">
          <p style="font-size: 13px;color:#6c6a75;text-align: left;
          margin-bottom: 10px;">当前有{{userInfo.profit_balance}}元收益可兑换成牛角</p>
          <div><input type="number" pattern="[0-9]*" v-model.number="toCoinValue" @keyup="validToCoin" class="borderbox" placeholder="请输入要兑换的牛角币" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
          <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span style="margin-left:6px;">1牛角=1元</span></div>
        </div>
      </bp-dialog>
    </div>
    <div v-transfer-dom>
      <bp-dialog :bg-title="true" :bgSrc="depositBg" v-model="depositVisible" @onConfirm="deposit">
      <div class="">
        <p style="font-size: 13px;color:#6c6a75;text-align: left;
        margin-bottom: 10px;">当前收益：{{userInfo.profit_balance}}元</p>
        <div><input type="number" pattern="[0-9]*" v-model.number="toRMBValue" @keyup="validToRMB" class="borderbox" placeholder="请输入要提现的金额" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
        <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span>目前仅支持整百数提现</span></div>
      </div>
    </bp-dialog>
    </div>
  </div>
</template>

<script>
import exchangeBg from '../assets/charge-bg.png'
import depositBg from '../assets/despoit-bg.png'
import Group from '../components/User/Group'
import Cell from '../components/User/Cell'
import { XButton, TransferDomDirective as TransferDom } from 'vux'
import BpDialog from '../components/bpDialog'
import { mapActions, mapGetters } from 'vuex'
import { exchangeToCoin, depositToCash } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    XButton,
    BpDialog
  },
  data () {
    return {
      exchangeVisible: false,
      depositVisible: false,
      exchangeBg: exchangeBg,
      depositBg: depositBg,
      toCoinValue: '',
      toRMBValue: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我的收益'
    next()
  },
  created () {
    this.$vux.loading.show({
      text: '正在加载'
    })
    this.getUserInfo().then((res) => {
    }).finally(() => {
      this.$vux.loading.hide()
    })
  },
  computed: {
    ...mapGetters('user', [
      'userInfo'
    ])
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
    exchange () {
      if (!this.toCoinValue) {
        this.$vux.toast.show({
          text: '请输入兑换牛角币',
          width: '10em'
        })
        return false
      }
      exchangeToCoin({money: this.toCoinValue}).then((res) => {
        this.getUserInfo()
        this.exchangeVisible = false
      })
    },
    deposit () {
      /* if (!this.toRMBValue || (this.toRMBValue % 100) !== 0) {
        this.$vux.toast.show({
          text: '提现金额不为100的倍数',
          position: 'bottom',
          width: '12em'
        })
        return
      } */
      this.$mask()
      this.$vux.loading.show({
        text: '正在提现'
      })
      depositToCash({type: 1, money: this.toRMBValue}).then((res) => {
        this.getUserInfo()
        this.depositVisible = false
        this.$mask.hide()
        this.$vux.toast.show({
          text: '提现成功'
        })
        this.$vux.loading.hide()
      })
    },
    validToCoin (event) {
      if (!Number.isInteger(this.toCoinValue)) {
        this.toCoinValue = ''
        return
      }
      if (this.toCoinValue > parseInt(this.userInfo.profit_balance)) {
        this.toCoinValue = parseInt(this.userInfo.profit_balance)
      }
    },
    validToRMB (event) {
      if (!Number.isInteger(this.toRMBValue)) {
        this.toRMBValue = ''
        return
      }
      if (this.toRMBValue > parseInt(this.userInfo.profit_balance)) {
        let n = parseInt(this.userInfo.profit_balance)
        let min = parseInt(n / 100) * 100
        this.toRMBValue = min
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
