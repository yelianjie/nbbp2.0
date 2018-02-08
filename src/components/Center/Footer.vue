<template>
  <footer class="footer flex">
    <div class="flex-1 flex-v tc flex-pack-center flex-align-center" v-for="(v, i) in footList" :key="i">
      <svg-icon :icon-class="v.icon"/>
      <p>{{v.name}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['footList'],
  components: {
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #f7f7f7;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    content: "";
    background-color: #fafafa;
  }
  /deep/ .weui-grid {
    padding: 6px 0;
  }
  /deep/ .weui-grid__icon + .weui-grid__label {
    margin-top: 0;
  }
}
</style>
