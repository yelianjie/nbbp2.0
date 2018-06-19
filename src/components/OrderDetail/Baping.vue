<template>
  <div class="scroll-container scroll">
    <div style='padding: 10px 15px 5px' >
      <div class="month-icon flex flex-align-center" @click="showDate" style='float:right'><svg-icon icon-class="calendar"/></div>
      <div>{{params.beginT}}</div>
      <div class='f14' style='color:#74b9fc'>商户收益 <svg-icon class='f16' icon-class="tip" @click.native="dialogVisible = true"/> : {{total}}元</div>
    </div>
    <group gutter = '0'>
    <div v-for="(v, i) in list" :key="i">
      <cell is-link border-indent="true" :arrow-direction="showContent[i]? 'up' : 'down'" @click.native="showContent[i] = !showContent[i], $forceUpdate()"style='padding:0;border-bottom:1px solid #eee'>
        <div slot="title" class="detail-item flex flex-align-center fff">
          <div class="detail-item-left flex-1">
            <p class="overflow f14">
            	<template v-if="v.odr_type == '4'">{{v.song_name}}-{{v.author}}</template>
            	<template v-else-if="v.odr_type == '3'">{{v.pay_type == '1'? '牛角红包' : '现金红包' }}</template>
            	<template v-else>{{v.title}}</template> <template v-if= "v.odr_type=='1' || v.odr_type=='2'">×{{v.odr_num}}</template>
            </p>
            <p class="f13 scolor bottom-line" >来自 {{v.nickname}} <template v-if="v.odr_type == '1'">送给 {{v.to_nickname}}</template></p>
          </div>
          <div class="detail-item-right">
            <p class="overflow f14 ncolor">{{v.order_money}}元</p>
            <p class="f13 scolor bottom-line">{{v.create_time}}</p>
          </div>
        </div>
      </cell>
      <div class="slider" v-show = "showContent[i]">
         <p class=" f13 ">商户收益：<span class='ncolor'> + {{v.merchant_income == null ? '0' : v.merchant_income}} 元</span></p>
          <p class="f13 " v-if= "v.odr_type == '1'">{{v.to_nickname}}收益：<span class='ncolor'>+ {{v.user_income == null ? '0' : v.user_income}} 元</span></p>
      </div>
    </div>
    </group>
    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
      <inline-loading slot="spinner" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
      <span slot="no-results">没有记录</span>
      <span slot="no-more">没有更多啦</span>
    </infinite-loading>
    <x-dialog v-model="dialogVisible" hide-on-blur >
      <div class ='dialog' >
      <div class='dialog-title f18'>霸屏收益说明</div>
    	<p>1、商户收益为您从每一笔霸屏订单分得的收益分成。</p>
    	<p>2、其余部分为平台运营成本（ 含微信收取的手续费 ）。</p>
    	<p>3、商户收益可即时提现。</p>
    	</div>
    </x-dialog>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '../InlineLoading'
import { getOrderList } from '@/api/'
import { Group, Datetime, XDialog, Cell} from 'vux'
export default {
  data () {
    return {
      list: [],
      total:'',
      params: {
        pageSize: 15,
        page: 1,
        beginT: '2018-06',
        type:'2'
      },
      showContent:{},
      dialogVisible: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '霸屏'
    next()
  },
  components: {
    InfiniteLoading,
    InlineLoading,
    Group,
    Datetime,
    XDialog,
    Cell
  },
  methods: {
    showDate () {
      var _self = this
      document.body.classList.add('third-center')
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM',
        value: this.params.beginT,
        // startDate: this.dInfo.startDate,
        // endDate: this.dInfo.endDate,
        onConfirm (val) {
          _self.params.beginT = val
          _self.params.page = 1
          _self.list = []
          //_self.$options.methods.infiniteHandler.bind(_self)()
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
    infiniteHandler ($state) {
      getOrderList(Object.assign({},this.params,{ht_id: this.$route.query.id})).then((res) => {
        this.total = res.result.money
        if (Array.isArray(res.result.list)) {
          this.list = this.list.concat(res.result.list)
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
.slider {
  padding:10px 15px;
  border-bottom: 1px solid #eee;
}
.dialog {
  padding:20px;
  .dialog-title {
    padding:0 0 10px;
  }
  p {
    text-align: left;
    margin-bottom: 5px;
  }
}
</style>

