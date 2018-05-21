<template>
  <div v-transfer-dom>
    <popup v-model="visible" height="100%" class="flex flex-v" v-fixscroll="'#songs-list'" @on-hide="resetEvent" :should-rerender-on-show="true">
      <popup-header
        left-text="取消"
        right-text="确定"
        :title="'已选歌曲(' + songListValue.length + ')'"
        :show-bottom-border="false"
        @on-click-left="$emit('setVisible', false)"
        @on-click-right="$emit('setVisible', false)"></popup-header>
      <div id="songs-list" class="flex-1 overscroll">
        <checker v-model="songListValue" type="checkbox" default-item-class="song-item" selected-item-class="song-item-selected">
        <template v-for="(v, i) in songList">
          <checker-item :value="v.song_id" :key="i" @on-item-click="onClick">
            <div class="flex flex-align-center flex-1 song-search-item">
              <div class="flex flex-v flex-pack-center flex-1">
                <p class="">{{v.name}}</p>
                <div class="flex flex-align-center">
                  <div class="flex1 f13" style="color:#666;">{{v.author}}</div>
                </div>
              </div>
              <div class="">
                <check-icon :value="songListValue.some((vv,ii) => vv == v.song_id)" type="plain"></check-icon>
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
import { getSongIds } from '@/api/'
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
  watch: {
    visible (newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.infiniteLoading.attemptLoad()
        })
      }
    }
  },
  data () {
    return {
      songList: [],
      songListValue: [],
      time: 1,
      infiniteLoading: null
    }
  },
  methods: {
    onClick (itemValue, itemDisabled) {
      /* let song = this.songList.find(v => v.songid === itemValue)
      if (song) {
        let params = {
          ht_id: this.$route.query.id,
          song_id: song.songid,
          name: song.songname,
          author: song.author
        }
        addSong(params)
      } */
    },
    infiniteHandler ($state) {
      if (!this.infiniteLoading) {
        this.infiniteLoading = $state
      }
      getSongIds({ht_id: this.$route.query.id}).then((res) => {
        if (Array.isArray(res.result)) {
          this.songList = [...this.songList, ...res.result]
          this.songListValue = this.songList.map(v => {
            return v.song_id
          })
        }
        $state.complete()
      })
    },
    resetEvent () {
      setTimeout(() => {
        this.songList = []
        this.songListValue = []
        this.infiniteLoading && this.infiniteLoading.reset()
      }, 1000)
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
</style>
