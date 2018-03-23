<template>
  <div class="container min-h bg2">
    <div class="charge-header bg1 flex flex-align-center">
      <div class="u-avatar"><img :src="userInfo.headimgurl | prefixImageUrl" class="circle"/></div>
      <div class="flex flex-v flex-pack-center flex-1 u-middle">
        <p class="f16 uanme overflow fff-bp">{{userInfo.nickname}}</p>
        <p class="f12 coin-tip darker1"><span class="ver-mid">已拥有的牛角币</span><svg-icon icon-class="coin" className="f14 ml4"/></p>
      </div>
      <div class="coin-color" style="font-size: 24px;">{{userInfo.balance}}</div>
    </div>
    <div class="charge-container">
      <div class="charge-tab">
        <span class="ct ncolor">充值购买</span>
        <span class="ct darker1" @click="$router.push({path: '/Detail'})">充值详情</span>
      </div>
      <charge :exps="exps" @onSelect="setSelect" :loading="loadingPrice"></charge>
      <x-button :show-loading="loading" :disabled="loading" :gradients="['#f31374', '#f31374']" style="margin-top: 25px;" @click.native="requestPay">确认支付</x-button>
      <p class="darker1 f12" style="margin-top: 10px;">充值说明：</p>
      <ul class="darker1 f12">
        <li>1、充值即拥有牛霸贵族会员尊贵身份</li>
        <li>1、1牛角=1元人民币</li>
        <li>2、充值的牛角只能消费，不能提现</li>
        <li>4、充值赠送的经验值用于贵族等级升级</li>
      </ul>
      
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import { getCharges, rechargePay } from '@/api/'
import { mapActions } from 'vuex'
import Charge from '@/components/Charge'
export default {
  data () {
    return {
      bpValueIndex: -1,
      userInfo: {},
      exps: [],
      loading: false,
      loadingPrice: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我的账户'
    next()
  },
  created () {
    /* let historyCount = window.sessionStorage.getItem('count') * 1 || 0
    if (historyCount !== 1) {
      setTimeout(() => {
        window.location.reload()
      }, 150)
    } else {
      this.getData()
    } */
    this.getData()
  },
  components: {
    XButton,
    Charge
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
    setSelect (index) {
      this.bpValueIndex = index
    },
    getData () {
      this.loadingPrice = true
      getCharges().then((res) => {
        this.userInfo = res.result.user
        this.exps = res.result.exp
      }).finally(() => {
        this.$vux.loading.hide()
        this.loadingPrice = false
      })
    },
    requestPay () {
      var _self = this
      if (this.bpValueIndex === -1) {
        this.$vux.toast.show({
          text: '请选择金额支付'
        })
        return false
      }
      this.loading = true
      rechargePay({eid: this.exps[this.bpValueIndex].id, money: this.exps[this.bpValueIndex].money}).then((res) => {
        window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
          switch (res.err_msg) {
            case 'get_brand_wcpay_request:cancel':
              // alert('用户取消支付！')
              break
            case 'get_brand_wcpay_request:fail':
              _self.$vux.toast.show({
                text: '支付失败！（' + res.err_desc + '）',
                width: '10em'
              })
              break
            case 'get_brand_wcpay_request:ok':
              _self.$vux.toast.show({
                text: '支付成功'
              })
              setTimeout(() => {
                if (localStorage.getItem('payBack') === '1') {
                  // 支付返回
                  localStorage.removeItem('payBack')
                  _self.getUserInfo().then((res) => {
                    window.history.go(-1)
                  })
                } else {
                  _self.getData()
                }
              }, 500)
              break
            default:
              alert(JSON.stringify(res))
              break
          }
        })
        /* this.$wechat.chooseWXPay({
          ...res.result,
          success: () => {
            this.$vux.toast.show({
              text: '支付成功'
            })
          }
        }) */
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.3);
.coin-color {
  color: #f8c21a;
}
.charge-header {
  padding: 0.36rem 0.3rem;
  .u-avatar img {
    width: 1rem;
    height: 1rem;
  }
  .u-middle {
    margin-left: 20px;
  }
}
.charge-container {
  padding: 0.5rem 0.6rem;
  .charge-tab {
    margin-bottom: 0.6rem;
    .ct {
      padding: 4px 6px;
    }
  }
}

</style>
