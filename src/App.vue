<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/global.less';
@import './styles/bpDialog.less';

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
  height: 100%;
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
  border-radius: 4px;
}
.level-1 {
   background-color: red;
}
</style>
