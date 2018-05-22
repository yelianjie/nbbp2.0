<template>
  <div class="container">
    <div>
    <div class="order-item flex-v flex-align-center" v-for="(v, i) in list" :key="i">
      <div class="order-item-left flex-1 flex">
        <p class="overflow f14 flex-1 line1">{{v.name}}--{{v.author}}</p>
        <p class="overflow f14 ocolor" style="text-align: right;color:#f31374;">{{v.price}}<template v-if="v.pay_type == 1">牛角</template><template v-else>元</template></p>
      </div>
      <div class="order-item-right flex">
        <p class="f13 bottom-line flex-1" style="color:#a49f9f;">来自{{v.nickname}}</p>
        <p class="f13 bottom-line line1" style="color:#a49f9f;">{{v.pay_time}}</p>
      </div>
    </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
      <inline-loading slot="spinner" :color="'#2481d2'" :bgColor="'rgba(255, 255, 255, 1)'"></inline-loading>
      <span slot="no-results">没有记录</span>
      <span slot="no-more">没有更多啦</span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../components/InlineLoading'
import { historyOdrList } from '@/api/'
export default {
  data () {
    return {
      list: [],
      shouyi: 0,
      params: {
        pageSize: 15,
        page: 1,
        ht_id: this.$route.query.id
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '历史点歌订单'
    next()
  },
  components: {
    InfiniteLoading,
    InlineLoading
  },
  methods: {
    infiniteHandler ($state) {
      historyOdrList(this.params).then((res) => {
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
@import (reference) '../styles/global.less';
.order-item {
  padding: 10px 15px;
  position: relative;
  background-color: #fff;
  &:not(:last-child)::after {
    content: "";
    .setBottomLine();
  }
}
</style>
