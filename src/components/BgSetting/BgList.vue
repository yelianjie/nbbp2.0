<template>
  <div class="scroller-bg">
    <checker v-model="select" type="radio" default-item-class="bg-item" selected-item-class="bg-item-selected">
      <template v-for="(v, i) in list">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="bg-icon flex flex-1">
              <img :src="v.url | prefixImageUrl" v-if="type == 1"/>
              <video :src="v.url | prefixImageUrl" controls v-if="type == 2" x-webkit-airplay="true" webkit-playsinline="" playsinline="" airplay="allow" x5-video-player-type="h5"></video>
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
