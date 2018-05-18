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
        <checklist label-position="left" :options="songList" v-model="songListValue"></checklist>
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
import { Checklist, XButton, Popup, PopupHeader, TransferDomDirective as TransferDom } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
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
    PopupHeader,
    Checklist,
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
    infiniteHandler ($state) {
      if (!this.infiniteLoading) {
        this.infiniteLoading = $state
      }
      var arr = [
        {key: '1', value: '晴天', inlineDesc: '周杰伦'},
        {key: '2', value: '告白气球', inlineDesc: '周杰伦'},
        {key: '3', value: '倔强', inlineDesc: '五月天'},
        {key: '4', value: '爱上未来的你', inlineDesc: '潘玮柏'},
        {key: '5', value: '第三类接触', inlineDesc: '周杰伦'},
        {key: '6', value: '黑夜问白天', inlineDesc: '林俊杰'},
        {key: '7', value: '丹宁执着', inlineDesc: '林俊杰'},
        {key: '8', value: '千里之外', inlineDesc: '周杰伦'},
        {key: '9', value: '发如雪', inlineDesc: '周杰伦'},
        {key: '10', value: '时光机', inlineDesc: '周杰伦'},
        {key: '11', value: '你不是真正的快乐', inlineDesc: '五月天'},
        {key: '12', value: '夜曲', inlineDesc: '周杰伦'},
        {key: '13', value: '菊花台', inlineDesc: '周杰伦'},
        {key: '14', value: '温柔', inlineDesc: '五月天'},
        {key: '15', value: '不爱我就拉倒', inlineDesc: '周杰伦'},
        {key: '16', value: '黑色毛衣', inlineDesc: '周杰伦'},
        {key: '17', value: '编号89757', inlineDesc: '林俊杰'},
        {key: '18', value: '我想更懂你', inlineDesc: '潘玮柏'}
      ]
      var newArr = []
      for (var i = 0; i < 10; i++) {
        newArr.push(arr[parseInt(Math.random() * arr.length)])
      }
      setTimeout(() => {
        this.songList = [...this.songList, ...newArr]
        if (this.time > 3) {
          $state.complete()
        } else {
          this.time++
          $state.loaded()
        }
      }, 3000)
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
</style>
