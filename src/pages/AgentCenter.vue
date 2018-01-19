<template>
  <div class="container fff">
    <BusinessAgentTop :name="'牛霸酒吧'" :logo="logo" :currentMoney="'324'" :totalMoney="'10000'"></BusinessAgentTop>
    <BarsList :barsList="barsList"></BarsList>
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import BarsList from '@/components/Center/BarsList'
import Footer from '@/components/Center/Footer'
import logo from '../assets/logo.png'
export default {
  name: 'AgentCenter',
  data () {
    return {
      logo: logo,
      barsList: [{
        distance: '5000',
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号'
      }],
      footList: [{
        name: '管理首页',
        icon: ''
      }, {
        name: '酒吧列表',
        icon: ''
      }, {
        name: '帮助说明',
        icon: ''
      }]
    }
  },
  mounted () {
  },
  components: {
    BusinessAgentTop,
    BarsList,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
