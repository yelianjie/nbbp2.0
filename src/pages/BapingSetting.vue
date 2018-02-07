<template>
  <div class="container min-h">
    <div class="flex tab-wrap">
      <a class="flex-1 tab" :class="{'active': activeName== 'BapingTheme'}" @click.prevent="activeName = 'BapingTheme'">主题霸屏</a>
      <a class="flex-1 tab" :class="{'active': activeName== 'BapingGift'}" @click.prevent="activeName = 'BapingGift'">礼物霸屏</a>
      <a class="flex-1 tab" :class="{'active': activeName== 'BapingTime'}" @click.prevent="activeName = 'BapingTime'">霸屏时间</a>
    </div>
    <component :is="activeName"></component>
  </div>
</template>

<script>
import BapingTheme from '../components/BapingSetting/BapingTheme'
import BapingGift from '../components/BapingSetting/BapingGift'
import BapingTime from '../components/BapingSetting/BapingTime'
export default {
  name: 'BapingSetting',
  components: {
    BapingTheme,
    BapingGift,
    BapingTime
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏商户管理-霸屏设置'
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
