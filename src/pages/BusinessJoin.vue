<template>
  <div class="container bg1 about-container borderbox flex flex-v" style="height: 100%;">
    <div class="flex-1 overscroll" ref="scrollWrapper">
      <template v-if="$route.query.type == 1">
        <img class="join-img" data-src="./static/join/shanghu01.jpg" style="height: 3.43rem;">
        <img class="join-img" data-src="./static/join/shanghu02.jpg" style="height: 4.54rem;">
        <img class="join-img" data-src="./static/join/shanghu03.jpg" style="height: 4.38rem;">
        <img class="join-img" data-src="./static/join/shanghu04.jpg" style="height: 4.71rem;">
        <img class="join-img" data-src="./static/join/shanghu05.jpg" style="height: 3.89rem;">
        <img class="join-img" data-src="./static/join/shanghu06.jpg" style="height: 3.85rem;">
        <img class="join-img" data-src="./static/join/shanghu07.jpg" style="height: 3.97rem;">
        <img class="join-img" data-src="./static/join/shanghu08.jpg" style="height: 4rem;">
        <img class="join-img" data-src="./static/join/shanghu09.jpg" style="height: 4.27rem;">
        <img class="join-img" data-src="./static/join/shanghu10.jpg" style="height: 3.2rem;">
        <img class="join-img" data-src="./static/join/shanghu11.jpg" style="height: 4.61rem;">
        <img class="join-img" data-src="./static/join/shanghu12.jpg" style="height: 4.33rem;">
        <img class="join-img" data-src="./static/join/shanghu13.jpg" style="height: 5.04rem;">
        <img class="join-img" data-src="./static/join/shanghu14.jpg" style="height: 3.64rem;">
        <img class="join-img" data-src="./static/join/shanghu15.jpg" style="height: 3.73rem;">
        <img class="join-img" data-src="./static/join/shanghu16.jpg" style="height: 3.17rem;">
        <img class="join-img" data-src="./static/join/shanghu17.jpg" style="height: 4.75rem;">
        <img class="join-img" data-src="./static/join/shanghu18.jpg" style="height: 2.74rem;">
        <img class="join-img" data-src="./static/join/shanghu19.jpg" style="height: 2.92rem;">
      </template>
      <template v-if="$route.query.type == 2">
        <img class="join-img" data-src="./static/join/daili01.jpg" style="height: 3.68rem;">
        <img class="join-img" data-src="./static/join/daili02.jpg" style="height: 3.62rem;">
        <img class="join-img" data-src="./static/join/daili03.jpg" style="height: 1.75rem;">
        <img class="join-img" data-src="./static/join/daili04.jpg" style="height: 3.82rem;">
        <img class="join-img" data-src="./static/join/daili05.jpg" style="height: 3.3rem;">
        <img class="join-img" data-src="./static/join/daili06.jpg" style="height: 3.27rem;">
        <img class="join-img" data-src="./static/join/daili07.jpg" style="height: 4.63rem;">
        <img class="join-img" data-src="./static/join/daili08.jpg" style="height: 3.24rem;">
        <img class="join-img" data-src="./static/join/daili09.jpg" style="height: 4.18rem;">
        <img class="join-img" data-src="./static/join/daili10.jpg" style="height: 4.91rem;">
        <img class="join-img" data-src="./static/join/daili11.jpg" style="height: 4.04rem;">
        <img class="join-img" data-src="./static/join/daili12.jpg" style="height: 4.04rem;">
        <img class="join-img" data-src="./static/join/daili13.jpg" style="height: 3.76rem;">
        <img class="join-img" data-src="./static/join/daili14.jpg" style="height: 4.39rem;">
        <img class="join-img" data-src="./static/join/daili15.jpg" style="height: 3.79rem;">
        <img class="join-img" data-src="./static/join/daili16.jpg" style="height: 4.45rem;">
        <img class="join-img" data-src="./static/join/daili17.jpg" style="height: 5.19rem;">
        <img class="join-img" data-src="./static/join/daili18.jpg" style="height: 4.78rem;">
        <img class="join-img" data-src="./static/join/daili19.jpg" style="height: 2.82rem;">
      </template>
      <div class="fixed-btn">
        <router-link :to="{path: `/Register?type=${$route.query.type}&code=${code}`}" v-if="!userInfo.isMM && $route.query.type == 1"><button class="turn-btn fff-bp">立即注册</button></router-link>
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
import LazyLoad from 'vanilla-lazyload'
import { getAgentCode } from '@/api/'
export default {
  data () {
    return {
      scrollFix: null,
      code: ''
    }
  },
  beforeDestroy () {
    if (this.scrollFix) {
      this.scrollFix.destory()
    }
    this.lazyload && this.lazyload.destroy()
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
    var codeStr = ''
    if (this.$route.query.code) {
      this.code = this.$route.query.code
    }
    getAgentCode().then((res) => {
      var code = res.result ? res.result : ''
      codeStr = '&code=' + code
      var shareParams = {}
      if (Number(this.$route.query.type) === 1) {
        shareParams = {
          title: '商户加盟：0成本增加收益，微信注册即可免费使用',
          desc: '该系统适用于酒吧、庆典、餐厅、婚礼等各种场合，帮您活跃气氛的同时提升30%以上收益',
          link: window.location.href + codeStr,
          imgUrl: 'http://xnb.siweiquanjing.com/screen/images/logo1.png' // 分享图标
        }
      } else if (Number(this.$route.query.type) === 2) {
        shareParams = {
          title: '代理加盟：推荐商户免费使用牛霸系统获永久收益分成',
          desc: '该系统适用于酒吧、庆典、餐厅、婚礼等各种场合',
          link: window.location.href + codeStr,
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
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.lazyload = new LazyLoad({
        container: this.$refs.scrollWrapper
      })
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

