<template>
  <div class="scroll-container depositOthers" style="top: 0;">
    <div class="detail-item flex flex-align-center">
      <div class="detail-item-left flex-1">
        <p class="overflow f14">提现金额</p>
        <p class="f13 scolor bottom-line">2018-03-04</p>
      </div>
      <div class="detail-item-right">
        <p class="overflow f14 ocolor">+50</p>
        <p class="f13 scolor bottom-line">提现中</p>
      </div>
    </div>
    <p v-for="(item, i) in list" :key="i">
    Line:
    <span v-text="item"></span>
    </p>
    <infinite-loading @infinite="infiniteHandler">
      <inline-loading slot="spinner" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
      <span slot="no-results">没有记录</span>
      <span slot="no-more">没有更多啦</span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../components/InlineLoading'
export default {
  data () {
    return {
      list: []
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '提现详情'
    next()
  },
  components: {
    InfiniteLoading,
    InlineLoading
  },
  methods: {
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
</style>

