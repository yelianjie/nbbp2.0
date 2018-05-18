<template>
  <div class="container flex flex-v" style="height: 100%;">
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
      <p class="f14" style="padding: 10px 15px;" v-if="songList.length > 0">请勾选歌曲上架</p>
      <checklist label-position="left" :options="songList" v-model="songListValue"></checklist>
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <inline-loading slot="spinner" :color="'#2481d2'" :bgColor="'rgba(200, 200, 200, 0.3)'"></inline-loading>
        <div slot="no-results">
          <span>搜索不到？</span>
          <div style="margin-top: 10px;">
            <x-button :gradients="['#1D62F0', '#1D62F0']" :mini="true" @click.native="customVisible = true">立即手动添加</x-button>
          </div>
        </div>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
    </div>
    </search>
    <div id="song-set" class="flex-1 overscroll">
      <group label-width="14em" label-align="left">
        <x-switch title="开启点歌功能" v-model="powerOn"></x-switch>
        <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">请根据实际情况设置该数量以避免点歌订单过多而无法安排的退款情况</p>
      </group>
      <template v-if="powerOn">
      <group label-width="14em" label-align="left">
       <group-title slot="title">价格设置</group-title>
       <x-input title="每首歌单价" text-align="right" type="number" :debounce="50" v-model="form.price" :show-clear="false" @on-change="validisPrice" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">元</span>
      </x-input>
     </group>
     <group label-width="13em" label-align="left">
       <group-title slot="title">设置可点歌时间段</group-title>
       <datetime title="开始时间" format="HH:mm" v-model="form.startTime" value-text-align="right" placeholder="选择"></datetime>
       <x-input title="几小时后结束" text-align="right" type="number" :debounce="50" v-model="form.hour" :show-clear="false" @on-change="validisTime" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">小时</span>
      </x-input>
      <x-input title="点歌时间段内最多可点歌数量" text-align="right" type="number" :debounce="50" v-model="form.count" :show-clear="false" @on-change="validisSong" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">首</span>
      </x-input>
     </group>
     <group label-align="left" style="margin-bottom: 0.77em;">
       <group-title slot="title">其他设置</group-title>
       <x-switch title="不可重复点歌" v-model="form.auto"></x-switch>
       <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">打开后，每场点歌不可重复购买同一首歌</p>
       <p class="f12" style="padding:0 15px;margin: -8px 0 10px;color: #aaaaaa;">下一场点歌开始时，自动下架的歌曲会自动恢复上架</p>
     </group>
     </template>
    </div>
    <footer class="footer flex">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <a @click.prevent="songsVisible = true" class="enter-bar">已点歌曲(345首)</a>
      </div>
    </footer>
    <div v-transfer-dom>
      <x-dialog v-model="customVisible" class="dialog-demo" hide-on-blur>
        <div id="song-form">
          <div class="song-form-group">
            <label>歌曲名称：</label>
            <x-input :max="10"></x-input>
          </div>
          <div class="song-form-group">
            <label>原唱歌手名：</label>
            <x-input :max="10"></x-input>
          </div>
          <div class="weui-dialog__ft" style="margin-top: 25px;">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="customVisible = false">取消</a>
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="addSong">确定</a>
          </div>
        </div>
      </x-dialog>
    </div>
    <bp-songs v-model="songsVisible"></bp-songs>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, Checklist, XButton, Search, Datetime, XDialog, TransferDomDirective as TransferDom } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
import { htmlDecode, isInteger } from '@/utils/utils'
export default {
  directives: {
    TransferDom
  },
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
    XDialog,
    InfiniteLoading,
    InlineLoading,
    BpSongs: () => import('@/components/BapingSetting/BapingSongs')
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
      songListValue: [],
      customVisible: false,
      songsVisible: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '点歌霸屏'
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
          value: htmlDecode(v.songname),
          inlineDesc: Array.isArray(v.singer) && v.singer.length > 0 ? htmlDecode(v.singer[0].name) : '未知'
        }
      })
      this.songList = [...this.songList, ...songs]
      if (this.songList.length < song.totalnum) {
        this.requestParams.page++
        this.infiniteLoading && this.infiniteLoading.loaded()
      } else {
        if (this.infiniteLoading && song.totalnum !== 0) {
          this.infiniteLoading.loaded()
          this.infiniteLoading.complete()
        } else {
          this.infiniteLoading.complete()
        }
      }
    }
  },
  methods: {
    validisPrice (value) {
      if (!isInteger(value)) {
        this.form.price = 1
      } else if (value > 9999) {
        this.form.price = 9999
        console.log(this.form.price)
      }
    },
    validisTime (value) {
      if (!isInteger(value)) {
        this.form.hour = 1
      } else if (value > 24) {
        this.form.hour = 24
      }
    },
    validisSong (value) {
      if (!isInteger(value)) {
        this.form.count = 1
      } else if (value > 999) {
        this.form.count = 999
      }
      this.$forceUpdate()
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
    },
    addSong () {
      this.$vux.toast.show('添加成功')
      this.customVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
#song-set {
  &.focus {
    padding-top: 54px;
  }
  /deep/ .weui-cells:first-child {
    margin-top: 0;
  }
}
.container {
  /deep/ .weui-cells.vux-search_show .weui-cell:last-child {
    margin-bottom: 0;
  } 
}

footer .enter-bar {
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background-color: #2481d2;
}
#song-form {
  border-radius: 3px;
  background-color: #fff;
  padding: 15px 0 0 0;
}

.song-form-group {
  text-align: left;
  margin-bottom: 4px;
  padding: 0 15px;
  label {
    padding: 8px 0;
    display: block;
  }
  /deep/ .vux-x-input {
    border: 1px solid #D9D9D9;
    padding: 6px 15px;
    border-radius: 5px;
    &:before {
      border: 0px;
    }
  }
}
</style>


