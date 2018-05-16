<template>
  <div class="container min-h">
    <search
    @on-submit="onSubmit"
    v-model="value"
    position="absolute"
    auto-scroll-to-top 
    @on-focus="onFocus"
    @on-blur="onBlur"
    @on-cancel="onCancel"
    placeholder="搜索添加上架歌曲"
    ref="search">
    <div id="results" :style="{'min-height': resultHeight + 'px'}" style="padding-bottom: 44px;">
      <checklist label-position="left" :options="songList" v-model="songListValue"></checklist>
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <inline-loading slot="spinner" :color="'#2481d2'" :bgColor="'rgba(200, 200, 200, 0.3)'"></inline-loading>
        <span slot="no-results">找不到歌曲</span>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
    </div>
    </search>
    <div id="song-set">
      <group label-width="14em" label-align="left">
       <group-title slot="title">点歌设置</group-title>
       <x-input title="可点歌时间段内最多可点歌数量" text-align="right" type="number" v-model="form.count" :show-clear="false" @on-change="validisInteger" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">首</span>
      </x-input>
      <p class="f12" style="padding:0 15px;margin: -8px 0 10px;color: #aaaaaa;">请根据实际情况设置该数量以避免点歌订单过多而无法安排的退款情况</p>
       <x-input title="每首歌单价" text-align="right" type="number" v-model="form.price" :show-clear="false" @on-change="validisInteger" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">元</span>
      </x-input>
      <x-switch title="开启点歌功能" v-model="powerOn"></x-switch>
     </group>
     <template v-if="powerOn">
     <group label-align="left">
       <group-title slot="title">设置可点歌时间段</group-title>
       <datetime title="开始时间" format="HH:mm" v-model="form.startTime" value-text-align="right" placeholder="选择开始时间"></datetime>
       <x-input title="几小时后结束" text-align="right" type="number" v-model="form.hour" :show-clear="false" @on-change="validisInteger" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">小时</span>
      </x-input>
     </group>
     <group label-align="left">
       <x-switch title="自动下架本场已点歌曲" v-model="form.auto"></x-switch>
       <p class="f12" style="padding:0 15px;margin: -8px 0 10px;color: #aaaaaa;">打开后，每场点歌不可重复购买同一首歌</p>
       <p class="f12" style="padding:0 15px;margin: -8px 0 10px;color: #aaaaaa;">下一场点歌开始时，自动下架的歌曲会自动恢复上架</p>
     </group>
     </template>
    </div>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, Checklist, XButton, Search, Datetime } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
export default {
  components: {
    Search,
    GroupTitle,
    Group,
    Cell,
    XInput,
    XSwitch,
    Checklist,
    XButton,
    Datetime,
    InfiniteLoading,
    InlineLoading
  },
  data () {
    return {
      resultHeight: 0,
      focus: false,
      value: '',
      form: {
        count: 50,
        hour: 1,
        price: 100,
        startTime: '',
        auto: false
      },
      requestParams: {
        page: 1,
        pageSize: 20
      },
      powerOn: false,
      songList: [],
      songListValue: []
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '霸屏点歌设置'
    next()
  },
  beforeRouteLeave (to, from, next) {
    window.jsonp4 = null
    next()
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44
    window.jsonp4 = (response) => {
      let { song } = response.data
      let songs = song.list.map((v) => {
        return {
          key: v.songid,
          value: v.songname,
          inlineDesc: Array.isArray(v.singer) && v.singer.length > 0 ? v.singer[0].name : '未知'
        }
      })
      this.songList = [...this.songList, ...songs]
      if (this.songList.length < song.totalnum) {
        this.requestParams.page++
        this.infiniteLoading && this.infiniteLoading.loaded()
      } else {
        if (this.infiniteLoading) {
          this.infiniteLoading.loaded()
          this.infiniteLoading.complete()
        }
      }
    }
  },
  methods: {
    validisInteger (value) {
      return value
    },
    onFocus () {
      this.focus = true
      this.$noscroll()
    },
    onBlur () {
      this.$noscroll.cancel()
      this.focus = false
    },
    onCancel () {
      this.value = ''
      this.songList = []
      this.songListValue = []
    },
    onSubmit () {
      this.songList = []
      this.requestParams.page = 1
      this.infiniteLoading && this.infiniteLoading.reset()
      this.getResult()
    },
    getResult () {
      if (!this.infiniteLoading) {
        this.$refs.infiniteLoading.attemptLoad()
      } else {
        this.$jsonp('http://i.y.qq.com/s.music/fcgi-bin/search_for_qq_cp', {
          g_tk: 938407465,
          uin: 0,
          format: 'jsonp',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1,
          w: this.value,
          zhidaqu: 1,
          catZhida: 1,
          t: 0,
          flag: 1,
          ie: 'utf-8',
          sem: 1,
          aggr: 0,
          perpage: this.requestParams.pageSize,
          n: this.requestParams.pageSize,
          p: this.requestParams.page,
          remoteplace: 'txt.mqq.all',
          _: 1459991037831,
          jsonpCallback: 'jsonp4'
        })
      }
    },
    infiniteHandler ($state) {
      if (!this.infiniteLoading) {
        this.infiniteLoading = $state
      }
      this.getResult(true)
    }
  }
}
</script>

<style lang="less" scoped>
#song-set {
  padding-top: 0.77em;
  &.focus {
    padding-top: 54px;
  }
  /deep/ .weui-cells__title:first-child {
    margin-top: 0;
  }
}
.container {
  /deep/ .weui-cells.vux-search_show .weui-cell:last-child {
    margin-bottom: 0;
  } 
}
</style>


