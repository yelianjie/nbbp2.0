<template>
  <div class="container min-h">
    <div class="flex tab-wrap">
      <a class="flex-1 tab" :class="{'active': activeType== 2}" @click.prevent="activeType = 2">视频背景</a>
      <a class="flex-1 tab" :class="{'active': activeType== 1}" @click.prevent="activeType = 1">图片背景</a>
    </div>
    <bg-list :type="2" :selected="videoSelected" :list="videos" v-show="activeType== 2" @on-select="setBgCheck"></bg-list>
    <bg-list :type="1" :selected="imageSelected" :list="images" v-show="activeType== 1" @on-select="setBgCheck"></bg-list>
  </div>
</template>

<script>
import BgList from '../components/BgSetting/BgList'
import { getBg, setBg } from '@/api/'
export default {
  name: 'BgSetting',
  components: {
    BgList
  },
  beforeRouteEnter (to, from, next) {
    document.title = '背景设置'
    next()
  },
  data () {
    return {
      imageSelected: -1,
      images: [],
      activeType: 2,
      videoSelected: -1,
      videos: []
    }
  },
  created () {
    var find = -1
    getBg({ht_id: this.$route.params.id, type: 2}).then((res) => {
      if (res.result.ht_selected) {
        find = res.result.default.findIndex(v => v.id === res.result.ht_selected.video_id)
        if (find > -1) {
          this.videoSelected = find
        }
      }
      this.videos = res.result.default
    })
    getBg({ht_id: this.$route.params.id, type: 1}).then((res) => {
      if (res.result.ht_selected) {
        find = res.result.default.findIndex(v => v.id === res.result.ht_selected.pic_id)
        if (find > -1) {
          this.imageSelected = find
        }
      }
      this.images = res.result.default
    })
  },
  mounted () {

  },
  methods: {
    setBgCheck (index) {
      let bgId = this.activeType === 1 ? this.images[index].id : this.videos[index].fid
      setBg({ht_id: this.$route.params.id, type: this.activeType, background_id: bgId}).then((res) => {
        console.log(res)
      })
    }
  },
  watch: {
    activeType (newVal, oldVal) {
      if (newVal === 1) {
        this.$nextTick(() => {
          this.$Lazyload.lazyLoadHandler()
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@topHeight: 44px;
.tab-wrap {
  margin-bottom: 10px;
}
.tab {
  display: block;
  height: @topHeight;
  line-height: @topHeight;
  background-color: #fff;
  text-align: center;
  position: relative;
  &.active:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 15%;
    right: 15%;
    border-bottom: 2px solid #58a9ff;
  }
  &:not(:last-child):after {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border-right: 1px solid #f2f2f2;
    content: "";
  }
}
.container {
  overflow: hidden;
  /deep/ .bg-item {
    display: block;
    padding: 10px 15px;
    background-color: #fff;
    position: relative;
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
    }
    .bg-icon {
      img, video {
        display: block;
        width: 180px;
        height: 108px;
      }
    }
  }
}
.scroller-bg {
  position: absolute;
  top: @topHeight + 10;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
