<template>
  <footer class="footer">
     <grid>
      <grid-item :label="v.name" v-for="(v,i) in footList" :key="i">
        <img slot="icon" :src="v.icon">
      </grid-item>
    </grid>
  </footer>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  props: ['footList'],
  components: {
    Grid,
    GridItem
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
  background-color: #fff;
  /deep/ .weui-grid {
    padding: 6px 0;
  }
  /deep/ .weui-grid__icon + .weui-grid__label {
    margin-top: 0;
  }
}
</style>
