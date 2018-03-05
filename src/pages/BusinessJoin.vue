<template>
  <div class="container bg1 about-container borderbox flex flex-v" style="height: 100%;">
    <div class="flex-1 overscroll" ref="scrollWrapper">
      <template v-if="$route.query.type == 1">
        <img class="join-img" v-lazy="'./static/join/shanghu01.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu02.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu03.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu04.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu05.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu06.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu07.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu08.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu09.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu10.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu11.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu12.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu13.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu14.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu15.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu16.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu17.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu18.jpg'">
        <img class="join-img" v-lazy="'./static/join/shanghu19.jpg'">
      </template>
      <template v-if="$route.query.type == 2">
        <img class="join-img" v-lazy="'./static/join/daili01.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili02.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili03.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili04.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili05.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili06.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili07.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili08.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili09.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili10.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili11.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili12.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili13.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili14.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili15.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili16.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili17.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili18.jpg'">
        <img class="join-img" v-lazy="'./static/join/daili19.jpg'">
      </template>
      <div class="fixed-btn">
        <router-link :to="{path: `/Register?type=${$route.query.type}`}"><button class="turn-btn white">立即注册</button></router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import ScrollFix from '@/vendor/ScrollFix'
export default {
  data () {
    return {
      scrollFix: null
    }
  },
  beforeDestroy () {
    if (this.scrollFix) {
      this.scrollFix.destory()
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '商户加盟'
    next()
  },
  mounted () {
    this.$Lazyload.lazyLoadHandler()
    this.$nextTick(() => {
      this.scrollFix = new ScrollFix(this.$refs.scrollWrapper)
    })
  }
}
</script>

<style lang="less" scoped>
.join-img {
  width: 7.5rem;
  display: block;
}
.turn-btn {
  width: 5.6rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 20px;
  border: 0;
  border-radius: 50px;
  background: -webkit-linear-gradient(top, #f2628c,  #9e37f5);
  display: block;
  margin: 0.4rem auto;
}
.fixed-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0,0,0,.4);
}
</style>

