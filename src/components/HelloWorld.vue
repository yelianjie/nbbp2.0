<template>
  <div id="scroller" ref="scrollWrapper">
    <infinite-loading @infinite="infiniteHandler" direction="top"></infinite-loading>
    <ul>
      <li v-for="(v, i) in list" :key="i">{{v}}</li>
    </ul>
  </div>
</template>
<script>

import InfiniteLoading from 'vue-infinite-loading'
import { GetAlbums } from '../api/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      height: 0,
      noMore: false
    }
  },
  mounted () {
    let _arr = []
    for (var i = 0; i < 20; i++) {
      _arr.push(i)
    }
    this.$set(this, 'list', _arr)
    GetAlbums()
  },
  methods: {
    infiniteHandler ($state) {
      setTimeout(() => {
        const temp = []
        for (let i = 0; i < 20; i++) {
          temp.push(Math.random())
        }
        this.list = temp.concat(this.list)
        this.height = this.$refs.scrollWrapper.scrollHeight
        $state.loaded()
      }, 1000)
    }
  },
  watch: {
    height: function (newVal, oldVal) {
      var diff = newVal - oldVal
      this.$refs.scrollWrapper.scrollTop = diff
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#scroller {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}
li {
  line-height: 32px;
  padding-left: 10px;
  font-size: 16px;
}
</style>
