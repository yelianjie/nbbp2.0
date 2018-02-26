<template>
  <div class="container min-h flex flex-v flex-align-center bg3">
    <div class="top-img tc">
      <img :src="barInfo.logo | prefixImageUrl" class="circle">
      <p class="f14 white" style="margin-top: 10px;">{{barInfo.name}}</p>
    </div>
    <div class="canDespoit-wrap">
      <p class="money">¥{{barInfo.balance}}</p>
      <p class="m-tip">当前可提现金额</p>
    </div>
    <div class="despoit-btn">
      <x-button :gradients="['#fff', '#fff']" @click.native="depositVisible = true" style="color:#2481d2;">立即提现</x-button>
    </div>
    <div v-transfer-dom>
      <bp-dialog :bg-title="true" :bgSrc="depositBg" v-model="depositVisible" @onConfirm="deposit">
      <div class="">
        <p style="font-size: 13px;color:#6c6a75;text-align: left;
        margin-bottom: 10px;">当前可提现：{{barInfo.balance}}元</p>
        <div><input type="number" pattern="[0-9]*" autofocus v-model.number="toRMBValue" @keyup="validToRMB" class="borderbox f14" placeholder="请输入要提现的金额" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
        <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span>目前仅支持整百数提现</span></div>
      </div>
    </bp-dialog>
    </div>
  </div>
</template>

<script>
import { XButton, TransferDomDirective as TransferDom } from 'vux'
import BpDialog from '../components/bpDialog'
import depositBg from '../assets/despoit-bg.png'
import { depositToCash } from '@/api/'
export default {
  name: 'Deposit',
  directives: {
    TransferDom
  },
  components: {
    XButton,
    BpDialog
  },
  data () {
    return {
      barInfo: {},
      depositVisible: false,
      toRMBValue: '',
      depositBg: depositBg
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
    deposit () {
      /* if (!this.toRMBValue || (this.toRMBValue % 100) !== 0) {
        this.$vux.toast.show({
          text: '提现金额不为100的倍数',
          position: 'bottom',
          width: '12em'
        })
        return false
      } */
      depositToCash({type: this.$route.query.type, ht_id: this.$route.params.id, money: this.toRMBValue}).then((res) => {
        this.getUserInfo()
        this.depositVisible = false
      })
    },
    validToRMB (event) {
      if (!Number.isInteger(this.toRMBValue)) {
        this.toRMBValue = ''
        return
      }
      if (this.toRMBValue > parseInt(this.barInfo.balance)) {
        let n = parseInt(this.barInfo.balance)
        let min = parseInt(n / 100) * 100
        this.toRMBValue = min
      }
    }
  }
}
</script>

<style lang="less" scoped>
.money {
  font-size: 20px;
  color: #fff;
}
.m-tip {
  font-size: 13px;
  color: #fff;
}
.top-img {
  margin-top: 30px;
  img {
    width: 60px;
    height: 60px;
  }
}
.canDespoit-wrap {
  text-align: center;
  margin-top: 70px;
}
.despoit-btn {
  width: 90%;
  max-width: 360px;
  margin-top: 70px;
}
</style>
