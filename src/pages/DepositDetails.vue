<template>
  <div class="scroll-container depositOthers" style="top: 0;">
    <div class="detail-item flex flex-align-center" v-for="(v, i) in list" :key="i">
      <div class="detail-item-left flex-1">
        <p class="overflow f14">提现金额</p>
        <p class="f13 scolor bottom-line">{{v.create_time}}</p>
      </div>
      <div class="detail-item-right">
        <p class="overflow f14 ocolor">+{{v.money}}元</p>
        <p class="f13 scolor bottom-line">{{status[v.status]}}</p>
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
import InlineLoading from '../components/InlineLoading'
import { getWithdrawListByHid } from '@/api/'
export default {
  data () {
    return {
      list: [],
      params: {
        pageSize: 15,
        page: 1,
        type: this.$route.query.type,
        ht_id: this.$route.query.id
      },
      status: {
        '0': '提现中',
        '1': '提现成功',
        '2': '提现失败'
      }
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
      getWithdrawListByHid(this.params).then((res) => {
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
@import '../styles/detail.less';
</style>

