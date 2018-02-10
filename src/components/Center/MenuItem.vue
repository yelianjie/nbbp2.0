<template>
  <div class="menu-item flex">
    <div class="menu-icon flex flex-align-center">
      <svg-icon :icon-class="data.icon"/>
    </div>
    <div class="menu-info flex flex-1 flex-v flex-pack-center">
      <span class="mname">{{data.name}}</span>
      <span class="mtip">{{data.tip}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less" scoped>
.menu-item {
  width: 100%;
  padding: 10px 4px;
  box-sizing: border-box;
  position: relative;
}
.menu-icon {
  width: 1rem;
  color: #717171;
  .svg-icon {
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    margin:0 auto;
  }
}
.menu-info {
  line-height: 1;
}
.mname {
  font-size: 16px;
  color: #000;
  height: 16px;
  margin-bottom: 10px;
  overflow: hidden;
}
.mtip {
  font-size: 14px;
  height: 14px;
  color: #ccc;
  overflow: hidden;
}
</style>
