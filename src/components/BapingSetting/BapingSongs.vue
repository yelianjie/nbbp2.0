<template>
  <div v-transfer-dom class="song-pop" v-fixscroll="'#songs-list'">
    <popup v-model="popVisible" height="80%" class="flex flex-v" style="border-radius: 10px 10px 0 0;" v-fixscroll="'#songs-list'"  @on-hide="resetEvent" :should-rerender-on-show="true">
      <popup-header
        @on-hide="popVisible = false"
        left-text=""
        right-text="确定"
        :title="'已上架歌曲(' + songLength + ')'"
        :show-bottom-border="false"
        @on-click-right="popVisible = false"></popup-header>
      <div id="songs-list" class="flex-1 overscroll">
        <checker v-model="songListValue" type="checkbox" default-item-class="song-item" selected-item-class="song-item-selected">
        <template v-for="(v, i) in songList">
          <checker-item :value="i" :key="i" @on-item-click="onClick">
            <div class="flex flex-align-center flex-1 song-search-item">
              <div class="flex flex-v flex-pack-center flex-1">
                <p class="">{{v.name}}</p>
                <div class="flex flex-align-center">
                  <div class="flex1 f13" style="color:#666;">原唱：{{v.author}}</div>
                </div>
              </div>
              <div class="">
                <check-icon :value="Boolean(v.is_confirm)" type="plain"></check-icon>
              </div>
            </div>
          </checker-item>
        </template>
      </checker>
        <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
        <inline-loading slot="spinner" style="background-color:#fff;" :color="'#2481d2'" :bgColor="'rgba(200, 200, 200, 0.3)'"></inline-loading>
        <span slot="no-results">没有已经添加的歌曲</span>
        <span slot="no-more">没有更多啦</span>
      </infinite-loading>
      </div>
    </popup>
  </div>
</template>

<script>
import { XButton, Popup, PopupHeader, TransferDomDirective as TransferDom, Checker, CheckerItem, CheckIcon } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
import { getSongs, underShelves, addSong } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  model: {
    prop: 'visible',
    event: 'setVisible'
  },
  props: ['visible'],
  components: {
    Checker,
    CheckerItem,
    CheckIcon,
    PopupHeader,
    XButton,
    Popup,
    InfiniteLoading,
    InlineLoading
  },
  created () {
  },
  watch: {
    popVisible (newVal) {
      if (newVal) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.infiniteLoading.attemptLoad()
          }, 400)
        })
      }
    }
  },
  data () {
    return {
      popVisible: false,
      songList: [],
      songListValue: [],
      time: 1,
      infiniteLoading: null,
      deleteCount: 0
    }
  },
  methods: {
    show () {
      this.popVisible = true
    },
    onClick (itemValue, itemDisabled) {
      if (this.songList[itemValue].is_confirm * 1) {
        underShelves({ht_id: this.$route.query.id, song_id: this.songList[itemValue].song_id}).then(() => {
          this.deleteCount++
        })
      } else {
        addSong({ht_id: this.$route.query.id, ...this.songList[itemValue]}).then(() => {
          this.deleteCount--
        })
      }
      this.songList[itemValue].is_confirm = !this.songList[itemValue].is_confirm
    },
    infiniteHandler ($state) {
      if (!this.infiniteLoading) {
        this.infiniteLoading = $state
      }
      getSongs({ht_id: this.$route.query.id}).then((res) => {
        if (Array.isArray(res.result)) {
          this.songList = [...this.songList, ...res.result]
          /* this.songListValue = this.songList.map(v => {
            return v.song_id
          }) */
        }
        $state.loaded()
        $state.complete()
      })
    },
    resetEvent () {
      this.deleteCount = 0
      setTimeout(() => {
        this.songList = []
        /* this.songListValue = [] */
        this.infiniteLoading && this.infiniteLoading.reset()
      }, 600)
    }
  },
  computed: {
    songLength () {
      return this.songList.length - this.deleteCount
    }
  }
}
</script>

<style lang="less" scoped>
/* #songs-list {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
} */
.song-item {
  display: block;
  padding: 10px 15px;
  border-top: 1px solid #f2f2f2;
  background-color: #fff;
}
.song-pop /deep/ .vux-popup-header-left {
  width: 47px;
}
</style>
