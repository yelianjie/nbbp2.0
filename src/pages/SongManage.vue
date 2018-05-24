<template>
  <div class="container flex flex-v" style="height: 100%;">
    <search
    cancel-text="关闭"
    @on-submit="onSubmit"
    v-model="value"
    position="absolute"
    auto-scroll-to-top 
    @on-focus="onFocus"
    @on-blur="onBlur"
    @on-cancel="onCancel"
    placeholder="搜索添加上架歌曲"
    ref="search">
    <p class="f14" style="padding: 10px 15px;box-shadow: 0px 1px 1px rgba(0,0,0,0.1);" v-if="songList.length > 0">请勾选歌曲上架<!-- <span style="float: right;color: #09BB07;" @click="showPopSong">已上架歌曲{{songNum}}首</span> --></p>
    <div id="results" class="overscroll" :style="{'height': resultHeight + 'px'}" style="padding-bottom: 44px;">
      <checker v-model="songListValue" type="checkbox" default-item-class="song-item" selected-item-class="song-item-selected">
      <template v-for="(v, i) in songList">
        <checker-item :value="v.songid" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center flex-1 song-search-item">
            <div class="flex flex-v flex-pack-center flex-1">
              <p class="">{{v.songname}}</p>
              <div class="flex flex-align-center">
                <div class="flex1 f13" style="color:#666;">{{v.author}}</div>
              </div>
            </div>
            <div class="">
              <check-icon :value="songListValue.some((vv,ii) => vv == v.songid)" type="plain"></check-icon>
            </div>
          </div>
        </checker-item>
      </template>
    </checker>

      <!-- <checklist label-position="left" :options="songList" v-model="songListValue" @on-change="change"></checklist> -->
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <inline-loading slot="spinner" :color="'#2481d2'" :bgColor="'rgba(200, 200, 200, 0.3)'"></inline-loading>
        <div slot="no-results">
          <span>搜索不到？</span>
          <div style="margin-top: 10px;">
            <x-button :gradients="['#2481d2', '#2481d2']" :mini="true" @click.native="customVisible = true">立即手动添加</x-button>
          </div>
        </div>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
    </div>
    </search>
    <div class="flex-1 tc">
      <div style="margin-top: 40px;">
        <x-button :gradients="['#2481d2', '#2481d2']" :mini="true" @click.native="customVisible = true">手动添加</x-button>
      </div>
    </div>
    <footer class="footer flex">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <a @click.prevent="showPopSong" class="enter-bar">已点歌曲({{songNum}}首)</a>
      </div>
    </footer>
    <div v-transfer-dom>
      <x-dialog v-model="customVisible" class="dialog-demo" hide-on-blur @on-hide="clearForm">
        <div id="song-form">
          <div class="song-form-group">
            <label>歌曲名称：</label>
            <x-input :max="10" v-model="manualForm.name" data-vv-as="歌曲名称" v-validate.initial="'required'"></x-input>
          </div>
          <div class="song-form-group">
            <label>原唱歌手名：</label>
            <x-input :max="10" v-model="manualForm.author" data-vv-as="原唱歌手名" v-validate.initial="'required'"></x-input>
          </div>
          <div class="weui-dialog__ft" style="margin-top: 25px;">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="customVisible = false">取消</a>
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="addSong">确定</a>
          </div>
        </div>
      </x-dialog>
    </div>
    <bp-songs ref="bpsong"></bp-songs>
  </div>
</template>

<script>
import { XInput, XButton, Search, XDialog, TransferDomDirective as TransferDom, Checker, CheckerItem, CheckIcon } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
import { htmlDecode } from '@/utils/utils'
import { addSong, getSongs, manualAddSong, getShelvesAmount, underShelves } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,
    XButton,
    Checker,
    CheckerItem,
    CheckIcon,
    Search,
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
      manualForm: {
        name: '',
        author: ''
      },
      requestParams: {
        page: 1,
        pageSize: 20
      },
      songList: [],
      songListValue: [],
      customVisible: false,
      songNum: 0
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
  created () {
    this.getSongNumber()
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44 - 39
    window.jsonp4 = (response) => {
      getSongs({ht_id: this.$route.query.id}).then((res) => {
        if (Array.isArray(res.result)) {
          res.result.map(v => {
            this.songListValue.push(Number(v.song_id))
          })
        }
        let { song } = response.data
        song.list.forEach((v) => {
          v.songname = htmlDecode(v.songname)
          v.author = Array.isArray(v.singer) && v.singer.length > 0 ? htmlDecode(v.singer[0].name) : '未知'
        })
        this.songList = [...this.songList, ...song.list]
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
        this.onBlur()
      }).catch(() => {
        this.infiniteLoading.complete()
      })
    }
  },
  methods: {
    showPopSong () {
      this.$refs.bpsong.show()
    },
    getSongNumber () {
      getShelvesAmount({ht_id: this.$route.query.id}).then((res) => {
        this.songNum = res.result
      })
    },
    onClick (itemValue, itemDisabled) {
      let songIndex = this.songList.findIndex(v => v.songid === itemValue)
      if (songIndex > -1) {
        let song = this.songList[songIndex]
        let params = {
          ht_id: this.$route.query.id,
          song_id: song.songid,
          name: song.songname,
          author: song.author
        }
        if (song.checked) {
          song.checked = 0
          underShelves(params)
        } else {
          song.checked = 1
          addSong(params)
        }
      }
    },
    clearForm () {
      Object.keys(this.manualForm).forEach(v => {
        this.manualForm[v] = ''
      })
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
      this.songListValue = []
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
      this.$validator.validateAll().then(result => {
        let getErrors = this.vErrors.all()
        if (getErrors.length > 0) {
          this.$vux.toast.show({
            text: getErrors[0],
            width: '10em'
          })
        } else {
          let params = Object.assign(this.manualForm, {
            ht_id: this.$route.query.id
          })
          manualAddSong(params).then((res) => {
            this.$vux.toast.show('添加成功')
            this.customVisible = false
          })
        }
      })
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
  .weui-cells.vux-search_show {
    overflow: hidden;
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
.song-item {
  display: block;
}
.song-search-item {
  padding: 10px 15px;
  border-top: 1px solid #f2f2f2;
}
</style>


