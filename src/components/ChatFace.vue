<template>
  <div class="face-list">
    <div class="face-item" v-for="(v, i) in list" :key="i">
      <img :src="v.icon" class="face-img" @click="clickFace(v)"/>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import faces from '@/assets/face/faces'
export default {
  data () {
    return {
      swiperThemeOption: {
        slidesPerColumn: 2,
        slidesPerView: 4,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      list: faces
    }
  },
  methods: {
    clickFace (item) {
      this.$emit('onFaceClick', '[' + item.value + ']')
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.face-list {
  font-size: 0;
}
.face-item {
  width: 0.9rem;
  padding-bottom: 0.1rem;
  display: inline-block;
}
.face-img {
  width: 0.8rem;
  height: 0.6rem;
}
</style>
