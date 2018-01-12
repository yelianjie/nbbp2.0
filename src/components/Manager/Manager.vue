<template>
  <div class="flex flex-h flex-align-center result-item">
    <div class="u-img">
      <img src="../../assets/logo.png">
    </div>
    <div class="u-nickname flex-1">{{result.nickname}}</div>
    <div class="u-op">
      <x-button mini :gradients="['#1D62F0', '#1D62F0']">添加</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  props: ['result'],
  data () {
    return {

    }
  },
  components: {
    XButton
  }
}
</script>

<style lang="less" scoped>
.result-item {
  padding: 10px 15px;
}
.u-img  {
  display: table;
  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
}
.u-nickname {
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
}

</style>
