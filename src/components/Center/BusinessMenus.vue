<template>
  <div class="menus clearfix">
    <div class="menu-item flex" v-for="(v,i) in menus" :key="i" @click="route(i)">
      <div class="menu-icon flex flex-align-center">
        <svg-icon :icon-class="v.icon"/>
      </div>
      <div class="menu-info flex flex-1 flex-v flex-pack-center">
        <span class="mname">{{v.name}}</span>
        <span class="mtip">{{v.tip}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [{
        name: '基本信息',
        icon: 'business-basic-icon',
        tip: '酒吧名称',
        route: {
          path: '/BasicBusiness/' + this.$route.params.id
        }
      }, {
        name: '酒吧公告',
        icon: 'business-notice-icon',
        tip: '公告编辑',
        route: {
          path: '/NoticeSetting/' + this.$route.params.id
        }
      }, {
        name: '霸屏管理',
        icon: 'business-ba-icon',
        tip: '价格、类型、时长等',
        route: {
          path: '/BaPingSetting/' + this.$route.params.id
        }
      }, {
        name: '背景设置',
        icon: 'business-bg-icon',
        tip: '大屏幕背景',
        route: {
          path: '/BgSetting/' + this.$route.params.id
        }
      }, {
        name: '广告设置',
        icon: 'business-ad-icon',
        tip: '广告图片设置',
        route: {
          path: '/AdSetting/' + this.$route.params.id
        }
      }, {
        name: '管理员',
        icon: 'business-manager-icon',
        tip: '管理员编辑',
        route: {
          path: '/Manager/' + this.$route.params.id
        }
      }, {
        name: '帮助说明',
        icon: 'business-help-icon',
        tip: '设置帮助',
        route: {
          path: '/Help'
        }
      }]
    }
  },
  components: {
  },
  methods: {
    route (index) {
      this.$router.push(this.menus[index].route)
    }
  }
}
</script>

<style lang="less" scoped>
.menus {
  font-size: 0;
  padding: 10px;
  .menu-item {
    float: left;
    width: 50%;
    padding: 10px 4px;
    box-sizing: border-box;
    position: relative;
    /* &:nth-child(2n+1):after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #ccc;
      right: 0;
      top: 0;
    } */
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
}
</style>
