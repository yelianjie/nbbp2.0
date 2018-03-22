<template>
  <div class="container bg1 borderbox">
    <tab id="tab-header">
      <tab-item :selected="$route.path == '/Detail/Charge' ? true : false" @on-item-click="$router.replace('/Detail/Charge')">充值</tab-item>
      <tab-item :selected="$route.path == '/Detail/Consume' ? true : false" @on-item-click="$router.replace('/Detail/Consume')">消费</tab-item>
      <tab-item :selected="$route.path == '/Detail/Income' ? true : false" @on-item-click="$router.replace('/Detail/Income')">收益</tab-item>
      <tab-item :selected="$route.path == '/Detail/Exchange' ? true : false" @on-item-click="$router.replace('/Detail/Exchange')">兑换</tab-item>
      <tab-item :selected="$route.path == '/Detail/Deposit' ? true : false" @on-item-click="$router.replace('/Detail/Deposit')">提现</tab-item>
    </tab>
    <router-view></router-view>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  beforeRouteEnter (to, from, next) {
    document.title = '详情记录'
    next()
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@mainColor: #f31374;
#tab-header {
  background-color: #181b2a;
}
.vux-tab .vux-tab-item {
  background: none;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: @mainColor;
  border-bottom: 3px solid @mainColor;
}
.container {
  height: 100%;
}
.container /deep/ .vux-tab-ink-bar {
  background-color: @mainColor;
}
</style>

