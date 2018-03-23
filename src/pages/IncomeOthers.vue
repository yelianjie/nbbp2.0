<template>
  <div class="container">
    <div style="height:44px;">
      <sticky :check-sticky-support="false">
        <div class="flex flex-align-center top-header borderbox">
          <div class="month-left flex-1">
            <p class="f14">本月</p>
            <p class="f13" style="color:#858181;">收入：{{shouyi}}元</p>
          </div>
          <div class="month-icon flex flex-align-center" @click="showDate"><svg-icon icon-class="calendar"/></div>
        </div>
      </sticky>
    </div>
    <div class="depositOthers">
      <div class="detail-item flex flex-align-center" v-for="(v, i) in list" :key="i">
      <div class="detail-item-left flex-1">
        <p class="overflow f14">
          <template v-if="v.odr_type == 1">
          礼物：
          </template>
          <template v-if="v.odr_type == 2">
            霸屏：
          </template>
          {{v.title}}</p>
        <p class="f13 scolor bottom-line">{{v.create_time}}</p>
      </div>
      <div class="detail-item-right">
        <p class="overflow f14 ocolor">+{{v.money}}元</p>
        <p class="f13 scolor bottom-line line1">来自{{v.nickname}}</p>
      </div>
    </div>
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <inline-loading slot="spinner" :color="'#2481d2'" :bgColor="'rgba(255, 255, 255, 1)'"></inline-loading>
        <span slot="no-results">没有记录</span>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import { Sticky } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../components/InlineLoading'
import { getIncomeListByHid } from '@/api/'
export default {
  data () {
    return {
      list: [],
      shouyi: 0,
      params: {
        pageSize: 15,
        page: 1,
        type: this.$route.query.type,
        ht_id: this.$route.query.id,
        date: this.getDate()
      },
      dInfo: {
        startDate: '',
        endDate: ''
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '收益详情'
    next()
  },
  components: {
    Sticky,
    InfiniteLoading,
    InlineLoading
  },
  methods: {
    showDate () {
      var _self = this
      document.body.classList.add('third-center')
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM',
        value: this.params.date,
        startDate: this.dInfo.startDate,
        endDate: this.dInfo.endDate,
        onConfirm (val) {
          _self.params.date = val
          _self.params.page = 1
          _self.list = []
          _self.$nextTick(() => {
            _self.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
          })
        },
        onHide () {
          setTimeout(() => {
            document.body.classList.remove('third-center')
          }, 350)
        }
      })
    },
    getDate () {
      var d = new Date()
      var year = d.getFullYear()
      var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
      return year + '-' + month
    },
    infiniteHandler ($state) {
      getIncomeListByHid(this.params).then((res) => {
        this.shouyi = res.result.shouyi
        this.dInfo.startDate = res.result.time.substring(0, 7)
        this.dInfo.endDate = this.getDate()
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
.top-header {
  padding: 3px 15px 4px;
  background-color:#fff;
}
.month-icon .svg-icon {
  padding: 5px 0 5px 10px;
}
</style>
