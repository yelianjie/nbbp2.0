<template>
  <div class="scroller-bg">
    <checker v-model="select" radio-required selected-item-class="bg-item-selected">
      <template v-for="(v, i) in list">
          <div class="flex flex-align-center bg-item" :key="i">
            <div class="bg-icon flex flex-1 pr">
              <img v-lazy="$options.filters.prefixImageUrl(v.url)" v-if="type == 1" @click="previewImage($options.filters.prefixImageUrl(v.url))"/>
              <video :src="v.url | prefixImageUrl" controls="true" :ref="'video' + i" v-if="type == 2" webkit-playsinline="true" x-webkit-airplay="true" playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true"></video>
              <div class="place-play-video" @click.prevent="showVideo(i)" v-if="type == 2" v-show="last != i"><svg-icon icon-class="play"/></div>
            </div>
            <checker-item :value="i" @on-item-click="onClick">
              <div class="bg-check">
                <check-icon :value="select == i" type="plain"></check-icon>
              </div>
            </checker-item>
          </div>
      </template>
    </checker>
  </div>
</template>

<script>
// http://video.699pic.com/videos/32/50/93/47HK2MpfKwqx1510325093.mp4
import { Checker, CheckerItem, CheckIcon } from 'vux'
export default {
  props: ['selected', 'list', 'type'],
  data () {
    return {
      select: -1,
      last: -1
    }
  },
  watch: {
    selected (newV, oldV) {
      this.select = newV
    }
  },
  methods: {
    onClick (itemValue, itemDisabled) {
      if (this.select === itemValue) {
        return
      }
      this.select = itemValue
      this.$emit('on-select', itemValue)
    },
    showVideo (index) {
      if (this.last !== -1) {
        this.$refs['video' + this.last][0].pause()
      }
      this.$refs['video' + index][0].play()
      this.last = index
    },
    previewImage (url) {
      this.$wechat.previewImage({current: url, urls: [url]})
    }
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon
  }
}
</script>

<style lang="less" scoped>
.place-play-video {
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 108px;
  background-color: rgb(0,0,0);
  z-index: 99;
  color: #fff;
  .svg-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
  }
}
</style>
