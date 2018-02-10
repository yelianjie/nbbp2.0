<template>
  <div class="">
    <div class="menus fff clearfix">
      <template v-for="(v,i) in menus">
        <menu-item :data="v" @click.native="route(i)" :key="i"></menu-item>
      </template>
    </div>
    <div class="menus-horizontal fff" style="margin-top:10px;padding:0 10px;">
      <template v-for="(v,i) in horizontalMenus" @click="route(i)">
        <menu-item :data="v" @click.native="route(i)" :key="i"></menu-item>
      </template>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
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
      }],
      horizontalMenus: [{
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
    MenuItem
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
  padding: 0 10px;
  margin-top: 10px;
  .menu-item {
    width: 50%;
    float: left;
    &:nth-child(2n+1):after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #ebebeb;
      right: 0;
      top: 0;
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #ebebeb;
      left: 0;
      bottom: 0;
    }
  }
}

</style>
