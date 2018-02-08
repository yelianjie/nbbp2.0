<template>
  <div id="app">
    <loading v-model="isLoading" text="正在加载..."></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
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
  padding-bottom: 62px;
}
.padding-bottom-btn {
  padding-bottom: 42px;
}
.weui-toast.vux-toast-bottom {
  bottom: 54px;
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
  background-image: linear-gradient(to right, #ecf1f1, #8891b4);
}
.level-2 {
  background-image: linear-gradient(to right, #f1ddbe, #c16659);
}
.level-3 {
  background-image: linear-gradient(to right, #95ec88, #1cb884);
}
.level-4 {
  background-image: linear-gradient(to right, #89e7f8, #4790df);
}
.level-5 {
  background-image: linear-gradient(to right, #849df6, #644ed4);
}
.level-6 {
  background-image: linear-gradient(to right, #d251b5, #f43a4e);
}
.level-7 {
  background-image: linear-gradient(to right, #fbae58, #f16232);
}
.level-8 {
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
</style>
