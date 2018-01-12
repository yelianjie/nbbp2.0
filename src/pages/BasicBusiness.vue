<template>
  <div class="container min-h">
    <div class="inner">
      <div class="top flex flex-v flex-align-center">
        <img src="../assets/logo.png">
        <p>酒吧logo，将展示在二维码、酒吧首页上</p>
      </div>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input title="昵&emsp;&emsp;称"></x-input>
        <cell title="酒吧地址" value="" is-link value-align="left"></cell>
      </group>
      <div class="bottom_abs">
        <x-button :gradients="['#1D62F0', '#1D62F0']" link="/">保存</x-button>
      </div>
      <iframe src="./map/index.html" id="iframe" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import { XInput, Group, Cell, XButton } from 'vux'
export default {
  name: 'BasicBusiness',
  components: {
    XInput,
    Group,
    Cell,
    XButton
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏商户管理-基础信息'
    next()
  },
  data () {
    return {

    }
  },
  mounted () {
    document.getElementById('iframe').style.width = window.innerWidth + 'px'
    document.getElementById('iframe').style.height = window.innerHeight + 'px'
  }
}
</script>

<style lang="less" scoped>

.top {
  padding: 15px 0;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 12px;
  }
}
#iframe {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>
