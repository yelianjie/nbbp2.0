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
            <x-button :gradients="['#1D62F0', '#1D62F0']" :mini="true" @click.native="customVisible = true">立即手动添加</x-button>
          </div>
        </div>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
    </div>
    </search>
    <div id="song-set" class="flex-1 overscroll">
      <group label-width="14em" label-align="left">
        <x-switch title="开启点歌功能" v-model="form.is_open" :value-map="['2', '1']"></x-switch>
        <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">请根据实际情况设置该数量以避免点歌订单过多而无法安排的退款情况</p>
      </group>
      <template v-if="form.is_open == 1">
      <group label-width="14em" label-align="left">
       <group-title slot="title">价格设置</group-title>
       <x-input title="每首歌单价" text-align="right" type="number" :debounce="50" v-model="form.price" :show-clear="false" @on-change="validisPrice" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">元</span>
      </x-input>
     </group>
     <group label-width="13em" label-align="left">
       <group-title slot="title">设置可点歌时间段</group-title>
       <cell title="开始时间" :value="form.open_time" is-link @click.native="showDate"></cell>
       <!-- <datetime title="开始时间" format="HH:mm" v-model="form.open_time" value-text-align="right" placeholder="选择"></datetime> -->
       <x-input title="几小时后结束" text-align="right" type="number" :debounce="50" v-model="form.open_hour" :show-clear="false" @on-change="validisTime" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">小时</span>
      </x-input>
      <x-input title="点歌时间段内最多可点歌数量" text-align="right" type="number" :debounce="50" v-model="form.amount" :show-clear="false" @on-change="validisSong" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">首</span>
      </x-input>
     </group>
     <group label-align="left" style="margin-bottom: 0.77em;">
       <group-title slot="title">其他设置</group-title>
       <x-switch title="不可重复点歌" v-model="form.is_shelves" :value-map="['2', '1']"></x-switch>
       <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">打开后，每场点歌不可重复购买同一首歌</p>
       <p class="f12" style="padding:0 15px;margin: -8px 0 10px;color: #aaaaaa;">下一场点歌开始时，自动下架的歌曲会自动恢复上架</p>
     </group>
     </template>
     <div style="width: 90%;margin: 0 auto 0.77em;">
       <x-button :gradients="['#1D62F0', '#1D62F0']" @click.native="saveSetting">设置</x-button>
     </div>
    </div>
    <footer class="footer flex">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <a @click.prevent="songsVisible = true" class="enter-bar">已点歌曲({{songNum}}首)</a>
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
    <bp-songs v-model="songsVisible"></bp-songs>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, XButton, Search, Datetime, XDialog, TransferDomDirective as TransferDom, Checker, CheckerItem, CheckIcon } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
import { isInteger, htmlDecode } from '@/utils/utils'
import { addSong, getSongs, manualAddSong, getShelvesAmount, getMerchantSetting, merchantSetting } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon,
    Search,
    GroupTitle,
    Group,
    Cell,
    XInput,
    XSwitch,
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
        ht_id: this.$route.query.id,
        amount: 50,
        open_hour: 1,
        price: 100,
        open_time: '',
        is_shelves: '2',
        is_open: '2'
      },
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
      songsVisible: false,
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
    getMerchantSetting({ht_id: this.$route.query.id}).then((res) => {
      if (res.result) {
        res.result.price = Number(res.result.price)
        this.form = Object.assign(this.form, res.result)
      }
    })
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44
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
      }).catch(() => {
        this.infiniteLoading.complete()
      })
    }
  },
  methods: {
    showDate () {
      let _self = this
      document.body.classList.add('third-center')
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'HH:mm',
        value: this.form.open_time,
        onConfirm (val) {
          _self.form.open_time = val
        },
        onHide () {
          setTimeout(() => {
            document.body.classList.remove('third-center')
          }, 350)
        }
      })
    },
    saveSetting () {
      merchantSetting(this.form).then((res) => {
        this.$vux.toast.show('设置成功')
      })
    },
    getSongNumber () {
      getShelvesAmount({ht_id: this.$route.query.id}).then((res) => {
        this.songNum = res.result
      })
    },
    onClick (itemValue, itemDisabled) {
      let song = this.songList.find(v => v.songid === itemValue)
      if (song) {
        let params = {
          ht_id: this.$route.query.id,
          song_id: song.songid,
          name: song.songname,
          author: song.author
        }
        addSong(params).then(() => {
          this.getSongNumber()
        })
      }
    },
    clearForm () {
      Object.keys(this.manualForm).forEach(v => {
        this.manualForm[v] = ''
      })
    },
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
        this.form.open_hour = 1
      } else if (value > 24) {
        this.form.open_hour = 24
      }
    },
    validisSong (value) {
      if (!isInteger(value)) {
        this.form.amount = 1
      } else if (value > 999) {
        this.form.amount = 999
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


