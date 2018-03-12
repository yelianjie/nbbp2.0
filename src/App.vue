<template>
  <div id="app">
    <router-view class="router-view" ></router-view>
    <loading v-model="isLoading" text="正在加载"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    }),
    ...mapGetters('app', {
      direction: 'direction'
    }),
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less">
.weui-mask {
  background-color: rgba(0,0,0,.8)!important;
}
.weui-loading_toast {
  z-index: 9999999999;
}
 .vux-pop-out-enter-active,
 .vux-pop-out-leave-active,
 .vux-pop-in-enter-active,
 .vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 0;
  position: absolute!important;
  backface-visibility: hidden;
  perspective: 1000;
 }
 .router-view {
   width: 100%;
 }
 .vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
 }
 
 .vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
 }
 
 .vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
 }
 
 .vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
 }
.noscroll,
.noscroll body {
  overflow: hidden;
}
.noscroll body {
  position: relative;
}
body {
  background-color: #f5f5f5;
  font-size: 16px;
  line-height: 1.4;
}
body, html, #app {
  height: 100%;
}
.container {
  position: relative;
  min-height: 100%;
}
.padding-bar {
  padding-bottom: 54px;
}
.padding-bottom-btn {
  padding-bottom: 50px;
}
.weui-toast.vux-toast-bottom {
  bottom: 54px;
}
.overscroll {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.inner {
  background-color: #fff;
}
.bottom_abs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.bottom_fix {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 15px;
  background-color: #fff;
}
.fff {
  background-color: #fff;
}
.level {
  padding: 2px 6px;
  line-height: 1;
  font-size: 12px;
  color: #fff;
  text-align: center;
  border-radius: 3px;
}
.level-1 {
  color: #868db3;
  position: relative;
  border: 1px solid #868db3;
  padding: 1px 6px;
}
.level-2 {
  background-image: linear-gradient(to right, #ecf1f1, #8891b4);
}
.level-3 {
  background-image: linear-gradient(to right, #f1ddbe, #c16659);
}
.level-4 {
  background-image: linear-gradient(to right, #95ec88, #1cb884);
}
.level-5 {
  background-image: linear-gradient(to right, #89e7f8, #4790df);
}
.level-6 {
  background-image: linear-gradient(to right, #849df6, #644ed4);
}
.level-7 {
  background-image: linear-gradient(to right, #d251b5, #f43a4e);
}
.level-8 {
  background-image: linear-gradient(to right, #fbae58, #f16232);
}
.level-9 {
  background-image: linear-gradient(to right, #ee6e44, #e43b31);
}
.sex {
  padding: 2px 4px;
  border-radius: 3px;
  .svg-icon {
    height: 12px!important;
    width: 12px!important;
    display: block;
  }
}
.sex-male {
  background-color: #3a72d8;
}
.sex-female {
  background-color: #ff3976;
}
.tag {
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  &.tagcity {
    background-color: #645bc4;
  }
}
.face-icon {
  width: 0.8rem;
  height: 0.6rem;
}
img.emoji {
  width: 0.6rem;
  max-height: 0.6rem;
}
</style>
