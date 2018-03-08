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
        <!-- <span class="ct darker1">交易明细</span> -->
      </div>
      <div class="charge-price-list fff-bp">
        <div class="charge-price-item" v-for="(v, i) in exps" :key="i" :class="{'selected': bpValueIndex == i}" @click="bpValueIndex == i ? bpValueIndex = -1 : bpValueIndex = i">
          <div class="value f14"><svg-icon icon-class="coin" className="coin-color" /><span class="ml2 ver-mid">{{v.money}}</span><div class="f12 jingyan"><span class="jy-value">+{{v.experience}}经验值</span></div><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
          <div class="value-price f14">¥{{v.money}}</div>
        </div>
      </div>
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
export default {
  data () {
    return {
      bpValueIndex: -1,
      userInfo: {},
      exps: [],
      loading: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我的账户'
    next()
  },
  created () {
    getCharges().then((res) => {
      this.userInfo = res.result.user
      this.exps = res.result.exp
    }).finally(() => {
      this.$vux.loading.hide()
    })
  },
  components: {
    XButton
  },
  methods: {
    requestPay () {
      if (this.bpValueIndex === -1) {
        this.$vux.toast.show({
          text: '请选择金额支付'
        })
        return false
      }
      this.loading = true
      rechargePay({eid: this.exps[this.bpValueIndex].id, money: this.exps[this.bpValueIndex].money}).then((res) => {
        window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
          if (res.err_msg === 'get_brand_wcpay_request:ok') {
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
.charge-price-item {
  display: inline-block;
  width: 1.5rem;
  margin-right: 0.9rem;
  margin-bottom: 0.4rem;
  &:nth-child(3n+3) {
    margin-right: 0;
  }
  .value {
    line-height: 0.72rem;
    text-align: center;
    border: 1px solid @borderColor;
    border-radius: 10px;
    position: relative;
  }
  .jingyan {
    height: 0.36rem;
    background-color: #3f414e;
    position: relative;
    border-radius: 0 0 10px 10px;
  }
  .jy-value {
    transform: translate3d(-50%, -50%, 0) scale(1);
    color: #82858e;
    position: absolute;
    left: 50%;
    top: 50%;
    line-height: 1;
    white-space: nowrap;
  }
  &.selected {
    .value {
      border: 1px solid @mainColor;
    }
    .selected-icon {
      display: block;
    }
    .jingyan {
      background-color: @mainColor;
    }
    .jy-value {
      color: #fff;
    }
  }
  .value-price {
    vertical-align: middle;
    text-align: center;
    margin-top: 4px;
  }
}
@media screen and (min-width: 320px) and (max-width: 374px) {
  .charge-price-item .jy-value {
    transform: translate3d(-50%, -50%, 0) scale(0.8);
  }
}
@media screen and (min-width: 375px) and (max-width: 413px) {
  .charge-price-item .jy-value {
    transform: translate3d(-50%, -50%, 0) scale(0.85);
  }
}
.selected-icon {
    color: @mainColor;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(50%, -50%, 0);
    display: none;
    width: 0.3rem;
    height: 0.3rem;
    .svg-icon {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 2;
      display: block;
    }
    &:after {
      content: "";
      position: absolute;
      left: 15%;
      top: 15%;
      width: 70%;
      height: 70%;
      border-radius: 50%;
      z-index: 1;
      background-color: #fff;
    }
  }
@media screen and (min-width: 768px){
  .charge-price-item:nth-child(3n+3) {
    margin-right: 0.9rem;
  }
}
</style>
