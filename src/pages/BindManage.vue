<template>
  <div class="container">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="管理名称" v-model="info.name" :disabled="true"></x-input>
      <x-input title="联系电话" v-model="info.mobile" mask="999 9999 9999" :max="13" is-type="china-mobile"></x-input>
      <x-input title="绑定酒吧" v-model="info.barname" :disabled="true"></x-input>
      <div class="submit-btn">
        <x-button :gradients="['#1D62F0', '#1D62F0']">确认绑定</x-button>
      </div> 
    </group>
    <p class="t1">说明：</p>
    <p class="t2">绑定酒吧管理员后，只有系统管理员才能更改。</p>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
export default {
  data () {
    return {
      info: {
        name: '鲜花',
        mobile: '15869598945',
        barname: 'CMK酒吧'
      }
    }
  },
  components: {
    Group,
    XInput,
    XButton
  }
}
</script>

<style lang="less" scoped>
.container {
  /deep/ .vux-no-group-title {
    margin: 0;
  }
  .submit-btn {
    width: 80%;
    margin: 15px auto;
  }
  .t1 {
    font-size: 14px;
    color: #666;
    margin: 10px 20px;
  }
  .t2 {
    font-size: 14px;
    color: #666;
    padding: 10px;
    margin: 10px 20px;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(183,183,183,0.5);
  }
}
</style>
