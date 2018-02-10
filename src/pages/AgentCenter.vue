<template>
  <div class="container fff">
    <div data-v-7de79557="" class="middle tc white bg2" style="padding: 0.36rem 0;margin-bottom:0.1rem;">
      <p data-v-7de79557="" class="f14">当前累计未提现收益</p>
      <p data-v-7de79557="" class="benefit-account">{{info.money.merchant_balance}}</p>
      <p data-v-7de79557="" class="f16">累计总收益：{{info.money.merchant_income}} 元</p>
    </div>
    <BarsList :barsList="info.hotel"></BarsList>
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>
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
        money: {},
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
    BarsList,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
