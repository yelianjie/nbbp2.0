<template>
  <div class="container padding-bar fff">
    <BusinessAgentTop :name="'Somer'" :logo="logo" :currentMoney="'325'" :totalMoney="'10000'"></BusinessAgentTop>
    <BusinessMenus></BusinessMenus>
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import BusinessMenus from '@/components/Center/BusinessMenus'
import Footer from '@/components/Center/Footer'
import logo from '../assets/logo.png'
export default {
  name: 'BusinessCenter',
  data () {
    return {
      logo: logo,
      footList: [ {
        name: '我的酒吧',
        icon: 'business-bar-icon'
      }]
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = decodeURI(to.query.name) + '管理'
    next()
  },
  components: {
    BusinessAgentTop,
    BusinessMenus,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
