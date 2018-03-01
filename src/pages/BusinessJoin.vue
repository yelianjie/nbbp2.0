<template>
  <div class="container bg1 about-container borderbox flex flex-v" style="height: 100%;">
    <div class="flex-1" style="overflow: auto;">
      <img class="join-img" v-lazy="'./static/join/join1.jpg'">
      <img class="join-img" v-lazy="'./static/join/join2.jpg'">
      <img class="join-img" v-lazy="'./static/join/join3.jpg'">
      <img class="join-img" v-lazy="'./static/join/join4.jpg'">
      <img class="join-img" v-lazy="'./static/join/join5.jpg'">
      <img class="join-img" v-lazy="'./static/join/join6.jpg'">
      <img class="join-img" v-lazy="'./static/join/join7.jpg'">
      <img class="join-img" v-lazy="'./static/join/join8.jpg'">
      <img class="join-img" v-lazy="'./static/join/join9.jpg'">
      <img class="join-img" v-lazy="'./static/join/join10.jpg'">
      <img class="join-img" v-lazy="'./static/join/join11.jpg'">
      <img class="join-img" v-lazy="'./static/join/join12.jpg'">
      <img class="join-img" v-lazy="'./static/join/join13.jpg'">
      <div class="fixed-btn">
        <router-link :to="{path: '/Register?type=1'}"><button class="turn-btn white">立即注册</button></router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    document.title = '商户加盟'
    next()
  },
  mounted () {
    this.$Lazyload.lazyLoadHandler()
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
  margin: 0 auto;
}
.fixed-btn {
  position: fixed;
  bottom: 1rem;
  left: 0;
  width: 100%;
}
</style>

