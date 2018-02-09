<template>
  <div class="container padding-bar fff">
    <BusinessAgentTop :name="barInfo.name" :logo="barInfo.logo | prefixImageUrl" :currentMoney="barInfo.merchant_balance" :totalMoney="barInfo.ht_income"></BusinessAgentTop>
    <BusinessMenus></BusinessMenus>
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import BusinessMenus from '@/components/Center/BusinessMenus'
import Footer from '@/components/Center/Footer'
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
    BusinessMenus,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
