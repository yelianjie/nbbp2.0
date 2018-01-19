<template>
  <div class="container min-h">
    <div class="flex tab-wrap">
      <a class="flex-1 tab" :class="{'active': activeName== 'VideoBg'}" @click.prevent="activeName = 'VideoBg'">视频背景</a>
      <a class="flex-1 tab" :class="{'active': activeName== 'ImageBg'}" @click.prevent="activeName = 'ImageBg'">图片背景</a>
    </div>
    <bg-list type="video" :selected="videoSelected" :list="videos" v-show="activeName== 'VideoBg'"></bg-list>
    <bg-list type="image" :selected="imageSelected" :list="images" v-show="activeName== 'ImageBg'"></bg-list>
  </div>
</template>

<script>
import BgList from '../components/BgSetting/BgList'
export default {
  name: 'BgSetting',
  components: {
    BgList
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏商户管理-背景设置'
    next()
  },
  data () {
    return {
      imageSelected: 1,
      images: [{
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }],
      activeName: 'VideoBg',
      videoSelected: 2,
      videos: [{
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }]
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
@topHeight: 44px;
.tab-wrap {
  margin-bottom: 10px;
}
.tab {
  display: block;
  height: @topHeight;
  line-height: @topHeight;
  background-color: #fff;
  text-align: center;
  position: relative;
  &.active:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 15%;
    right: 15%;
    border-bottom: 2px solid #58a9ff;
  }
  &:not(:last-child):after {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border-right: 1px solid #f2f2f2;
    content: "";
  }
}
.container {
  overflow: hidden;
  /deep/ .bg-item {
    display: block;
    padding: 10px 15px;
    background-color: #fff;
    position: relative;
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
    }
    .bg-icon {
      img {
        display: block;
        width: 180px;
        height: 108px;
      }
    }
  }
}
.scroller-bg {
  position: absolute;
  top: @topHeight + 10;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
