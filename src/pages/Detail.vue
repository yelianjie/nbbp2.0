<template>
  <div class="container bg1 borderbox">
    <tab id="tab-header">
      <tab-item :selected="currentView == 'Charge' ? true : false" @on-item-click="replace('Charge', '充值详情')">充值</tab-item>
      <tab-item :selected="currentView == 'Consume' ? true : false" @on-item-click="replace('Consume', '消费详情')">消费</tab-item>
      <tab-item :selected="currentView == 'Income' ? true : false" @on-item-click="replace('Income', '收益详情')">收益</tab-item>
      <tab-item :selected="currentView == 'Exchange' ? true : false" @on-item-click="replace('Exchange', '兑换详情')">兑换</tab-item>
      <tab-item :selected="currentView == 'Deposit' ? true : false" @on-item-click="replace('Deposit', '提现详情')">提现</tab-item>
    </tab>
    <component v-bind:is="currentView">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      currentView: 'Charge'
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '详情记录'
    next()
  },
  components: {
    Tab,
    TabItem,
    Charge: () => import('../components/Detail/Charge'),
    Consume: () => import('../components/Detail/Consume'),
    Deposit: () => import('../components/Detail/Deposit'),
    Exchange: () => import('../components/Detail/Exchange'),
    Income: () => import('../components/Detail/Income')
  },
  methods: {
    replace (view, title) {
      if (view === this.currentView) {
        return false
      }
      document.title = title
      this.currentView = view
    }
  }
}
</script>

<style lang="less" scoped>
@mainColor: #f31374;
#tab-header /deep/ .vux-tab {
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

