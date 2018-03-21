<template>
  <div class="container min-h bg1 borderbox">
    <tab id="tab-header">
      <tab-item selected @on-item-click="onItemClick">充值</tab-item>
      <tab-item @on-item-click="onItemClick">消费</tab-item>
      <tab-item @on-item-click="onItemClick">收益</tab-item>
      <tab-item @on-item-click="onItemClick">兑换</tab-item>
      <tab-item @on-item-click="onItemClick">提现</tab-item>
    </tab>
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
    onItemClick (index) {
      console.log('on item click:', index)
    }
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
.container /deep/ .vux-tab-ink-bar {
  background-color: @mainColor;
}
</style>

