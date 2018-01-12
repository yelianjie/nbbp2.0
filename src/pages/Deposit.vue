<template>
  <div class="container min-h flex flex-v flex-align-center">
    <div class="top-img">
      <img src="../assets/logo.png">
    </div>
    <div class="canDespoit-wrap">
      <p class="money">¥345</p>
      <p class="m-tip">当前可提现金额</p>
    </div>
    <div class="despoit-btn">
      <x-button :gradients="['#1D62F0', '#19D5FD']" link="/">立即提现</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'Deposit',
  components: {
    XButton
  },
  data () {
    return {

    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏商户管理-我要提现'
    next()
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #333;
}
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
  margin-top: 80px;
}
.despoit-btn {
  width: 90%;
  max-width: 360px;
  margin-top: 80px;
}
</style>
