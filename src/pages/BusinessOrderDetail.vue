<template>
  <div class="container  borderbox">
    <tab id="tab-header">
      <tab-item :selected="currentView == 'All' ? true : false" @on-item-click="replace('All', '全部')">全部</tab-item>
      <tab-item :selected="currentView == 'Baping' ? true : false" @on-item-click="replace('Baping', '霸屏')">霸屏</tab-item>
      <tab-item :selected="currentView == 'Gifts' ? true : false" @on-item-click="replace('Gifts', '礼物')">礼物</tab-item>
      <tab-item :selected="currentView == 'Songs' ? true : false" @on-item-click="replace('Songs', '点歌')">点歌</tab-item>
      <tab-item :selected="currentView == 'Hongbao' ? true : false" @on-item-click="replace('Hongbao', '红包')">红包</tab-item>
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
      currentView: 'All'
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '详情记录'
    next()
  },
  components: {
    Tab,
    TabItem,
    All: () => import('../components/OrderDetail/All'),
    Baping: () => import('../components/OrderDetail/Baping'),
    Gifts: () => import('../components/OrderDetail/Gifts'),
    Songs: () => import('../components/OrderDetail/Songs'),
    Hongbao: () => import('../components/OrderDetail/Hongbao')
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
#tab-header.vux-tab {
  /*background-color: #181b2a;*/
}
#tab-header /deep/ .vux-tab {
  /*background-color: #181b2a;*/
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

