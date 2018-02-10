<template>
  <div class="container padding-bar f7f7f7 borderbox">
    <BusinessAgentTop :name="barInfo.name" :logo="barInfo.logo | prefixImageUrl" :currentMoney="barInfo.merchant_balance" :totalMoney="barInfo.ht_income"></BusinessAgentTop>
    <BusinessMenus></BusinessMenus>
    <footer class="footer flex">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <router-link :to="{path: '/Main/' + $route.params.id}" class="enter-bar">进入我的酒吧</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import BusinessMenus from '@/components/Center/BusinessMenus'
import logo from '../assets/logo.png'
import { getBarMoney } from '@/api/'
export default {
  name: 'BusinessCenter',
  data () {
    return {
      logo: logo,
      footList: [ {
        name: '我的酒吧',
        icon: 'business-bar-icon'
      }],
      barInfo: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = decodeURI(to.query.name) + '管理'
    next()
  },
  created () {
    getBarMoney({ht_id: this.$route.params.id}).then((res) => {
      this.barInfo = res.result
    })
  },
  components: {
    BusinessAgentTop,
    BusinessMenus
  }
}
</script>

<style lang="less" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #f7f7f7;
  .enter-bar {
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background-color: #2481d2;
  }
}
</style>
