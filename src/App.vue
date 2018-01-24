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
  border-radius: 3px;
}
.level-1 {
  background-image: linear-gradient(to right, #60e76e, #19a859);
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
  color: #fff;
  &.tagcity {
    background-color: #645bc4;
  }
}
</style>
