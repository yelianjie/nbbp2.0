<template>
  <div class="container min-h flex flex-v">
    <div class="center-wrap">
    <div class="top">
      <div class="logo-line">
        <img :src="barInfo.logo | prefixImageUrl" class="logo-img circle" v-if="barInfo.logo">
        <span class="u-name">{{barInfo.name}}</span>
      </div>
    </div>
    <div class="middle tc">
      <p class="f14">当前可提现金额（元）</p>
      <p class="benefit-account">{{barInfo.balance}}</p>
    </div>
    <group class="actions">
      <cell title="提现详情" is-link @click.native="$router.push({path: '/DepositDetails', query: {id: $route.query.id, type: $route.query.type}})"></cell>
    </group>
  </div>

    <div class="despoit-btn">
      <x-button :gradients="['#2481d2', '#2481d2']" @click.native="depositVisible = true" style="color:#fff;">立即提现</x-button>
    </div>
    <p class="tip f12" style="margin-top: 40px;">说明：</p>
    <p class="tip f12">1、提现金额将直接进入您的微信零钱，请注意查收。</p>
    <div v-transfer-dom>
      <bp-dialog :bg-title="true" :bgSrc="depositBg" v-model="depositVisible" @onConfirm="deposit">
      <div class="">
        <p style="font-size: 13px;color:#6c6a75;text-align: left;
        margin-bottom: 10px;">当前可提现：{{barInfo.balance}}元</p>
        <div><input type="number" pattern="[0-9]*" v-model.number="toRMBValue" @keyup="validToRMB" class="borderbox f14" placeholder="请输入要提现的金额" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
        <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span>目前仅支持整百数提现</span></div>
      </div>
    </bp-dialog>
    </div>
  </div>
</template>

<script>
import { XButton, Group, Cell, TransferDomDirective as TransferDom } from 'vux'
import BpDialog from '../components/bpDialog'
import depositBg from '../assets/despoit-bg.png'
import { depositToCash } from '@/api/'
import { mapActions } from 'vuex'
// import { Subtr } from '@/utils/utils'
export default {
  name: 'Deposit',
  directives: {
    TransferDom
  },
  components: {
    XButton,
    BpDialog,
    Group,
    Cell
  },
  data () {
    return {
      barInfo: {},
      depositVisible: false,
      toRMBValue: '',
      depositBg: depositBg,
      loading: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我要提现'
    next()
  },
  created () {
    this.barInfo = JSON.parse(localStorage.getItem('depositInfo'))
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
    deposit () {
      if (this.loading) {
        return false
      }
      /* if (!this.toRMBValue || (this.toRMBValue % 100) !== 0) {
        this.$vux.toast.show({
          text: '提现金额不为100的倍数',
          position: 'bottom',
          width: '12em'
        })
        return false
      } */
      this.$vux.loading.show({
        text: '正在提现'
      })
      this.loading = true
      depositToCash({type: this.$route.query.type, ht_id: this.$route.query.id, money: this.toRMBValue}).then((res) => {
        this.getUserInfo()
        this.depositVisible = false
        var restBalance = Number(this.barInfo.balance) - Number(this.toRMBValue)
        restBalance = restBalance < 0 ? 0 : restBalance
        // alert(this.barInfo.balance + ',' + this.toRMBValue + ',' + restBalance)
        this.barInfo.balance = restBalance
        localStorage.setItem('depositInfo', JSON.stringify(this.barInfo))
        this.$vux.toast.show({
          text: '提现成功'
        })
      }).finally(() => {
        this.loading = false
        this.$vux.loading.hide()
      })
    },
    validToRMB (event) {
      if (!Number.isInteger(this.toRMBValue)) {
        this.toRMBValue = ''
      }
      /* if (this.toRMBValue > parseInt(this.barInfo.balance)) {
        let n = parseInt(this.barInfo.balance)
        let min = parseInt(n / 100) * 100
        this.toRMBValue = min
      } */
    }
  }
}
</script>

<style lang="less" scoped>
.center-wrap {
  background-color: #2481d2;
  color: #fff;
}
.top {
  padding: 10px 15px;
}
.logo-img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.u-name {
  display: inline-block;
  vertical-align: middle;
}
.middle {
  margin: 30px auto;
  .benefit-account {
    font-size: 24px;
    font-weight: bold;
  }
}
.item-wrap {
  padding: 10px 15px;
}
.gray {
  color: #ccc;
}
.center-wrap {
  /deep/ .weui-cells {
    background-color: #237dcb;
    &:after,
    &:before {
      border: 0;
    }
  }
  /deep/ .weui-cell_access:active {
    background-color: #3d8dd3;
  }
}
.despoit-btn {
  width: 90%;
  margin: 0 auto;
  max-width: 360px;
  margin-top: 40px;
}
.tip {
  color: #848484;
  width: 90%;
  margin: 0 auto;
}
</style>
