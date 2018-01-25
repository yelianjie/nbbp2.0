<template>
  <div class="container" style="background-color:#121420;" id="profile">
    <group label-width="4.5em" label-align="center">
      <x-input title="昵称" v-model="nickname" value-text-align="left"></x-input>
      <popup-picker title="性别" :data="sexs" v-model="sex" value-text-align="left" show-name></popup-picker>
      <datetime title="生日" v-model="birth" value-text-align="left"></datetime>
      <popup-picker title="身高" :data="heights" v-model="height" value-text-align="left"></popup-picker>
      <popup-picker title="体重" :data="weights" v-model="weight" value-text-align="left"></popup-picker>
      <x-address title="城市" hide-district v-model="adsValue" :list="addressData" value-text-align="left"></x-address>
    </group>
    <group label-width="4.5em" label-align="center">
      <x-input title="简介" v-model="desc" placeholder="一句精致的简介，让别人更懂你" value-text-align="left"></x-input>
    </group>
  </div>
</template>

<script>
import { Group, XInput, PopupPicker, Datetime, ChinaAddressData, XAddress } from 'vux'
let heights = []
let weights = []
for (var i = 150; i <= 200; i++) {
  heights.push({
    name: i,
    value: i
  })
}
for (var k = 40; k <= 100; k++) {
  weights.push({
    name: k,
    value: k
  })
}
export default {
  components: {
    Group,
    XInput,
    PopupPicker,
    XAddress,
    Datetime
  },
  data () {
    return {
      nickname: '',
      sex: ['1'],
      birth: '',
      sexs: [[{
        name: '男',
        value: '1'
      }, {
        name: '女',
        value: '2'
      }]],
      heights: [heights],
      weights: [weights],
      height: [],
      weight: [],
      addressData: ChinaAddressData,
      adsValue: ['330000', '330200'],
      desc: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
@bgColor: #181b2a;
#profile /deep/ .weui-cells {
  margin-top: 0;
  margin-bottom: 0.2rem;
  background-color: @bgColor;
  color: #61667a;
  &:before {
    border: 0;
  }
  &:after {
    border: 0;
  }
  .weui-cell {
    padding: 0.35rem 0.4rem;
    &:before {
      border: 0;
    }
    &:after {
      content: "";
      .setTopLine(#12151e);
      left: 0.4rem;
      right: 0.4rem;
    }
  }
  .vux-datetime {
    color: #61667a;
  }
  .vux-cell-box:not(:first-child):before {
    border: 0;
  }
  .vux-cell-box:not(:first-child):after {
    content: "";
    .setTopLine(#12151e);
    left: 0.4rem;
    right: 0.4rem;
  }
  .vux-cell-value,
  .weui-input {
    /* color: #2e3241; */
    color: #fff;
  }
}
</style>

