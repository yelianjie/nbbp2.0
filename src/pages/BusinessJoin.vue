<template>
  <div class="container bg1 about-container borderbox flex flex-v" style="height: 100%;">
    <div class="flex-1 overscroll" ref="scrollWrapper" v-lazy-container="{ selector: 'img' }">
      <template v-if="$route.query.type == 1">
        <img class="join-img" data-src="./static/join/shanghu01.jpg">
        <img class="join-img" data-src="./static/join/shanghu02.jpg">
        <img class="join-img" data-src="./static/join/shanghu03.jpg">
        <img class="join-img" data-src="./static/join/shanghu04.jpg">
        <img class="join-img" data-src="./static/join/shanghu05.jpg">
        <img class="join-img" data-src="./static/join/shanghu06.jpg">
        <img class="join-img" data-src="./static/join/shanghu07.jpg">
        <img class="join-img" data-src="./static/join/shanghu08.jpg">
        <img class="join-img" data-src="./static/join/shanghu09.jpg">
        <img class="join-img" data-src="./static/join/shanghu10.jpg">
        <img class="join-img" data-src="./static/join/shanghu11.jpg">
        <img class="join-img" data-src="./static/join/shanghu12.jpg">
        <img class="join-img" data-src="./static/join/shanghu13.jpg">
        <img class="join-img" data-src="./static/join/shanghu14.jpg">
        <img class="join-img" data-src="./static/join/shanghu15.jpg">
        <img class="join-img" data-src="./static/join/shanghu16.jpg">
        <img class="join-img" data-src="./static/join/shanghu17.jpg">
        <img class="join-img" data-src="./static/join/shanghu18.jpg">
        <img class="join-img" data-src="./static/join/shanghu19.jpg">
      </template>
      <template v-if="$route.query.type == 2">
        <img class="join-img" data-src="./static/join/daili01.jpg">
        <img class="join-img" data-src="./static/join/daili02.jpg">
        <img class="join-img" data-src="./static/join/daili03.jpg">
        <img class="join-img" data-src="./static/join/daili04.jpg">
        <img class="join-img" data-src="./static/join/daili05.jpg">
        <img class="join-img" data-src="./static/join/daili06.jpg">
        <img class="join-img" data-src="./static/join/daili07.jpg">
        <img class="join-img" data-src="./static/join/daili08.jpg">
        <img class="join-img" data-src="./static/join/daili09.jpg">
        <img class="join-img" data-src="./static/join/daili10.jpg">
        <img class="join-img" data-src="./static/join/daili11.jpg">
        <img class="join-img" data-src="./static/join/daili12.jpg">
        <img class="join-img" data-src="./static/join/daili13.jpg">
        <img class="join-img" data-src="./static/join/daili14.jpg">
        <img class="join-img" data-src="./static/join/daili15.jpg">
        <img class="join-img" data-src="./static/join/daili16.jpg">
        <img class="join-img" data-src="./static/join/daili17.jpg">
        <img class="join-img" data-src="./static/join/daili18.jpg">
        <img class="join-img" data-src="./static/join/daili19.jpg">
      </template>
      <div class="fixed-btn">
        <router-link :to="{path: `/Register?type=${$route.query.type}`}" v-if="!userInfo.isMM && $route.query.type == 1"><button class="turn-btn fff-bp">立即注册</button></router-link>
        <router-link :to="{path: `/Register?type=${$route.query.type}`}" v-if="!userInfo.isAgent && $route.query.type == 2"><button class="turn-btn fff-bp">立即注册</button></router-link>
        <router-link :to="{path: `/MyBars`}" v-if="userInfo.isMM > 0 && $route.query.type == 1 "><button class="turn-btn fff-bp">商户管理</button></router-link>
        <router-link :to="{path: `/AgentCenter`}" v-if="userInfo.isAgent > 0 && $route.query.type == 2 "><button class="turn-btn fff-bp">代理管理</button></router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    if (Number(to.query.type) === 1) {
      document.title = '商户加盟'
    } else if (Number(to.query.type) === 2) {
      document.title = '代理加盟'
    }
    next()
  },
  created () {
    var shareParams = {}
    if (Number(this.$route.query.type) === 1) {
      shareParams = {
        title: '商户加盟：0成本增加收益，微信注册即可免费使用',
        desc: '该系统适用于酒吧、庆典、餐厅、婚礼等各种场合，帮您活跃气氛的同时提升30%以上收益',
        link: window.location.href,
        imgUrl: 'http://xnb.siweiquanjing.com/screen/images/logo1.png' // 分享图标
      }
    } else if (Number(this.$route.query.type) === 2) {
      shareParams = {
        title: '代理加盟：推荐商户免费使用牛霸系统获永久收益分成',
        desc: '该系统适用于酒吧、庆典、餐厅、婚礼等各种场合',
        link: window.location.href,
        imgUrl: 'http://xnb.siweiquanjing.com/screen/images/logo1.png' // 分享图标
      }
    }
    this.$wechat.onMenuShareTimeline({
      ...shareParams,
      success: function () {},
      cancel: function () {}
    })
    this.$wechat.onMenuShareAppMessage({
      ...shareParams,
      success: function () {},
      cancel: function () {}
    })
  },
  mounted () {
    this.$Lazyload.lazyLoadHandler()
    this.$nextTick(() => {
      this.scrollFix = new ScrollFix(this.$refs.scrollWrapper)
    })
  },
  computed: {
    ...mapGetters('user', {
      userInfo: 'userInfo'
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

