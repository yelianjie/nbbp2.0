<template>
  <div class="container min-h">
    <group style="margin-top: 0;">
      <cell title="点歌霸屏" :link="{path: '/BapingSong', query: { type: 'BapingSong', id: $route.query.id}}" inline-desc='搜索添加上架歌曲'></cell>
      <cell title="打赏礼物" :link="{path: '/BapingCustom', query: { type: 'BapingGift', id: $route.query.id}}" inline-desc='勾选添加的礼物将上架给用户购买'></cell>
      <cell title="主题霸屏" :link="{path: '/BapingCustom', query: { type: 'BapingTheme', id: $route.query.id}}" inline-desc='勾选添加的主题霸屏将上架给用户购买'></cell>
      <cell title="霸屏时间" :link="{path: '/BapingCustom', query: { type: 'BapingTime', id: $route.query.id}}" inline-desc='勾选添加的时间将上架给用户购买'></cell>
    </group>
    <!-- <div class="flex tab-wrap">
      <a class="flex-1 tab" :class="{'active': activeName== 'BapingTheme'}" @click.prevent="activeName = 'BapingTheme'">主题霸屏</a>
      <a class="flex-1 tab" :class="{'active': activeName== 'BapingGift'}" @click.prevent="activeName = 'BapingGift'">礼物霸屏</a>
      <a class="flex-1 tab" :class="{'active': activeName== 'BapingTime'}" @click.prevent="activeName = 'BapingTime'">霸屏时间</a>
    </div> -->
    <!-- <component :is="activeName"></component> -->
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'BapingSetting',
  components: {
    Group,
    Cell
  },
  beforeRouteEnter (to, from, next) {
    document.title = '霸屏设置'
    next()
  },
  data () {
    return {
      activeName: 'BapingTheme'
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
  /deep/ .vux-no-group-title {
    margin-top: 0;
  }
  /deep/ .baping-item {
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
    .baping-icon {
      width: 60px;
      img {
        display: block;
        width: 40px;
        height: 40px;
      }
    }
    .baping-edit {
      font-size: 12px;
      padding: 4px 6px;
      background-color: #58a9ff;
      color: #fff;
      border-radius: 4px;
      margin-left: 10px;
    }
  }
}
.scroller-bp {
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
