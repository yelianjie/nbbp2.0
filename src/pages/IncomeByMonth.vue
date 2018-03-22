<template>
  <div class="container borderbox">
    <tab id="tab-header">
      <tab-item selected @on-item-click="onItemClick">全部</tab-item>
      <tab-item @on-item-click="onItemClick">霸屏</tab-item>
      <tab-item @on-item-click="onItemClick">礼物</tab-item>
    </tab>
    
    
    <div class="scroll-container scroll depositOthers">
      <div class="detail-item flex flex-align-center">
      <div class="detail-item-left flex-1">
        <p class="overflow f14">礼物：求约霸屏</p>
        <p class="f13 scolor bottom-line">2018-03-04</p>
      </div>
      <div class="detail-item-right">
        <p class="overflow f14 ocolor">+5元</p>
        <p class="f13 scolor bottom-line">来自鲜花</p>
      </div>
    </div>
    <p v-for="(item, i) in list" :key="i">
    Line:
    <span v-text="item"></span>
    </p>
      <infinite-loading @infinite="infiniteHandler">
        <inline-loading slot="spinner" :color="'#2481d2'" :bgColor="'rgba(255, 255, 255, 1)'"></inline-loading>
        <span slot="no-results">没有记录</span>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../components/InlineLoading'
export default {
  data () {
    return {
      list: []
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '3月收益'
    next()
  },
  components: {
    Tab,
    TabItem,
    InfiniteLoading,
    InlineLoading
  },
  methods: {
    onItemClick (value) {

    },
    infiniteHandler ($state) {
      setTimeout(() => {
        const temp = []
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i)
        }
        this.list = this.list.concat(temp)
        $state.loaded()
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/detail.less';
#tab-header {
  background-color: #fff;
}
.vux-tab .vux-tab-item {
  background: none;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: @otherColor;
  border-bottom: 3px solid @otherColor;
}
.container {
  height: 100%;
}
.container /deep/ .vux-tab-ink-bar {
  background-color: @otherColor;
}
</style>

