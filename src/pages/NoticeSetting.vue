<template>
  <div class="container min-h">
    <group>
      <h2>公告内容</h2>
      <x-textarea :max="30" placeholder="请在这里输入酒吧首页展示的公告内容"></x-textarea>
    </group>
    <div class="bottom_abs">
      <x-button :gradients="['#1D62F0', '#1D62F0']" link="/">保存</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XTextarea, XButton } from 'vux'
export default {
  components: {
    Group,
    XTextarea,
    XButton
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
h2 {
  padding: 10px 15px;
  font-size: 18px;
}
.container {
  /deep/ .weui-cells {
    margin-top: 0;
  }
}

</style>
