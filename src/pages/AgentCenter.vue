<template>
  <div class="container fff">
    <BusinessAgentTop :name="info.user.nickname" :logo="info.user.headimgurl | prefixImageUrl" :currentMoney="info.user.profit_balance" :totalMoney="info.user.total_profit_balance"></BusinessAgentTop>
    <BarsList :barsList="info.hotel"></BarsList>
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import BarsList from '@/components/Center/BarsList'
import Footer from '@/components/Center/Footer'
import logo from '../assets/logo.png'
import { getAgentIndex } from '@/api/'
export default {
  name: 'AgentCenter',
  data () {
    return {
      logo: logo,
      info: {
        user: {
          profit_balance: 0.000,
          total_profit_balance: 0.000
        }
      },
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
  created () {
    getAgentIndex().then((res) => {
      this.info = res.result
    })
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
