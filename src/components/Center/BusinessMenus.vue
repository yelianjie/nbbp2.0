<template>
  <div class="menus clearfix">
    <div class="menu-item flex" v-for="(v,i) in menus" :key="i" @click="route(i)">
      <div class="menu-icon">
        <img :src="v.img" class="mimg">
      </div>
      <div class="menu-info flex flex-1 flex-v flex-pack-center">
        <span class="mname">{{v.name}}</span>
        <span class="mtip">{{v.tip}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'
export default {
  data () {
    return {
      menus: [{
        name: '基本信息',
        img: logo,
        tip: '酒吧名称',
        route: {
          path: '/BasicBusiness'
        }
      }, {
        name: '酒吧公告',
        img: '',
        tip: '公告编辑',
        route: {
          path: '/NoticeSetting'
        }
      }, {
        name: '霸屏管理',
        img: '',
        tip: '价格、类型、时长等',
        route: {
          path: '/BaPingManage'
        }
      }, {
        name: '背景设置',
        img: '',
        tip: '大屏幕背景',
        route: {
          path: '/BgSetting'
        }
      }, {
        name: '广告设置',
        img: '',
        tip: '广告图片设置',
        route: {
          path: '/AdSetting'
        }
      }, {
        name: '管理员',
        img: '',
        tip: '管理员编辑',
        route: {
          path: '/Manager'
        }
      }, {
        name: '帮助说明',
        img: '',
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
    &:nth-child(2n+1):after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #ccc;
      right: 0;
      top: 0;
    }
  }
  .menu-icon {
    width: 1rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
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
