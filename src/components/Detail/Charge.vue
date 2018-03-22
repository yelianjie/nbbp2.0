<template>
  <div class="scroll-container scroll">
    <div class="detail-item flex flex-align-center bg2" v-for="(v, i) in list" :key="i">
      <div class="detail-item-left flex-1">
        <p class="overflow fff-bp f14">充值牛角</p>
        <p class="f13 scolor bottom-line">{{v.create_time}}</p>
      </div>
      <div class="detail-item-right">
        <p class="overflow f14 ncolor">+{{v.money}}个</p>
        <p class="f13 scolor bottom-line">支付{{v.money}}元购买</p>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <inline-loading slot="spinner" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
      <span slot="no-results">没有记录</span>
      <span slot="no-more">没有更多啦</span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../InlineLoading'
import { getRechargeList } from '@/api/'
export default {
  data () {
    return {
      list: [],
      params: {
        pageSize: 5,
        page: 1
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '充值详情'
    next()
  },
  components: {
    InfiniteLoading,
    InlineLoading
  },
  methods: {
    infiniteHandler ($state) {
      getRechargeList(this.params).then((res) => {
        if (Array.isArray(res.result.data)) {
          this.list = this.list.concat(res.result.data)
          if (this.list.length >= res.result.total) {
            $state.complete()
          } else {
            this.params.page += 1
            $state.loaded()
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/detail.less';
</style>

