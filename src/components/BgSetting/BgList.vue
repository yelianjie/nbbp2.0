<template>
  <div class="scroller-bg">
    <checker v-model="select" radio-required default-item-class="bg-item" selected-item-class="bg-item-selected">
      <template v-for="(v, i) in list">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="bg-icon flex flex-1">
              <img v-lazy="$options.filters.prefixImageUrl(v.url)" v-if="type == 1"/>
              <video :src="v.url | prefixImageUrl" controls="true" v-if="type == 2" webkit-playsinline="true" x-webkit-airplay="true" playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true"></video>
            </div>
            <div class="bg-check">
              <check-icon :value="select == i" type="plain"></check-icon>
            </div>
          </div>
        </checker-item>
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
      select: -1
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
    }
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon
  }
}
</script>

<style scoped>

</style>
