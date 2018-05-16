<template>
  <div class="container min-h">
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
    document.title = '霸屏设置'
    next(vm => {
      vm.activeName = to.query.type
    })
  },
  data () {
    return {
      activeName: ''
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.container {
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

</style>
