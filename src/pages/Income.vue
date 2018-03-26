<template>
  <div class="container bg1">
    <div class="main-income bg2 tc">
      <h2 style="font-weight:normal;color: #f31374;">{{userInfo.profit_balance}}</h2>
      <span class="fff-bp tc f13"><svg-icon icon-class="coin" style="margin-bottom:3px;margin-right: 4px;"/>我的收益/元</span>
    </div>
    <p style="color:#ddd;margin-top: 0.6rem;" class="tc f13">您当前拥有牛角数：{{userInfo.balance}}个</p>
    <div style="margin: 10px 15px;">
      <x-button :gradients="['#2b3044', '#2b3044']" @click.native="exchangeVisible = true">兑换牛角</x-button>
      <x-button :gradients="['#f31374', '#f31374']" @click.native="depositVisible = true" style="margin-top: 10px;">我要提现</x-button>
    </div>
    <ul class="tip-ul f12" style="color:#ddd;margin: 40px 15px 0;">
      <li>说明：</li>
      <li>1、兑换比例：1元=1牛角。</li>
      <li>2、兑换的牛角只能用于消费，不能提现。</li>
      <li>3、提现金额将直接进入您的微信零钱，请注意查收。</li>
    </ul>
    <div v-transfer-dom>
      <bp-dialog :bg-title="true" :bgSrc="exchangeBg" v-model="exchangeVisible" @onConfirm="exchange">
        <div class="">
          <p style="font-size: 13px;color:#6c6a75;text-align: left;
          margin-bottom: 10px;">当前有{{userInfo.profit_balance}}元收益可兑换成牛角</p>
          <div><input type="number" pattern="[0-9]*" v-model.number="toCoinValue" @keyup="validToCoin" class="borderbox f14" placeholder="请输入要兑换的牛角币" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
          <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span style="margin-left:6px;">1牛角=1元</span></div>
        </div>
      </bp-dialog>
    </div>
    <div v-transfer-dom>
      <bp-dialog :bg-title="true" :bgSrc="depositBg" v-model="depositVisible" @onConfirm="deposit">
      <div class="">
        <p style="font-size: 13px;color:#6c6a75;text-align: left;
        margin-bottom: 10px;">当前收益：{{userInfo.profit_balance}}元</p>
        <div><input type="number" pattern="[0-9]*" v-model.number="toRMBValue" @keyup="validToRMB" class="borderbox f14" placeholder="请输入要提现的金额" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
        <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span>目前仅支持整百数提现</span></div>
      </div>
    </bp-dialog>
    </div>
  </div>
</template>

<script>
import exchangeBg from '../assets/charge-bg.png'
import depositBg from '../assets/despoit-bg.png'
import { XButton, TransferDomDirective as TransferDom } from 'vux'
import BpDialog from '../components/bpDialog'
import { mapActions, mapGetters } from 'vuex'
import { exchangeToCoin, depositToCash } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  components: {
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
      this.$mask()
      this.$vux.loading.show({
        text: '正在兑换'
      })
      exchangeToCoin({money: this.toCoinValue}).then((res) => {
        this.getUserInfo()
        this.exchangeVisible = false
        this.$vux.loading.hide()
        this.$vux.toast.show({
          text: '兑换成功'
        })
      }).finally(() => {
        this.$vux.loading.hide()
        this.$mask.hide()
      })
    },
    deposit () {
      if (!this.toRMBValue || (this.toRMBValue % 100) !== 0) {
        this.$vux.toast.show({
          text: '提现金额不为100的倍数',
          position: 'bottom',
          width: '12em'
        })
        return
      }
      this.$mask()
      this.$vux.loading.show({
        text: '正在提现'
      })
      depositToCash({type: 1, money: this.toRMBValue, ht_id: 0}).then((res) => {
        this.getUserInfo()
        this.depositVisible = false
        this.$vux.loading.hide()
        this.$vux.toast.show({
          text: '提现成功'
        })
      }).finally(() => {
        this.$vux.loading.hide()
        this.$mask.hide()
      })
    },
    validToCoin (event) {
      if (!Number.isInteger(this.toCoinValue)) {
        this.toCoinValue = ''
      }
      /* if (this.toCoinValue > parseInt(this.userInfo.profit_balance)) {
        this.toCoinValue = parseInt(this.userInfo.profit_balance)
      } */
    },
    validToRMB (event) {
      if (!Number.isInteger(this.toRMBValue)) {
        this.toRMBValue = ''
      }
      /* if (this.toRMBValue > parseInt(this.userInfo.profit_balance)) {
        let n = parseInt(this.userInfo.profit_balance)
        let min = parseInt(n / 100) * 100
        this.toRMBValue = min
      } */
    }
  }
}
</script>

<style lang="less" scoped>
.main-income {
  padding: 1.2rem 0;
}
.container /deep/ .svg-icon {
  fill: #f8c21a;
}
</style>
