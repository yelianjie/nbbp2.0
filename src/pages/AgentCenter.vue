<template>
  <div class="container" style="backgournd-color:#f7f7f7;">
    <div data-v-7de79557="" class="middle tc white bg3" style="padding: 0.36rem 0;margin-bottom:10px;">
      <p data-v-7de79557="" class="f14">当前累计未提现收益</p>
      <p data-v-7de79557="" class="benefit-account">{{info.money.merchant_balance}}</p>
      <p data-v-7de79557="" class="f16">累计总收益：{{info.money.merchant_income}} 元</p>
    </div>
    <div class="fff">
      <p style="padding: 0.2rem 0.3rem;" class="f18">代理酒吧列表</p>
      <inline-loading v-if="loading" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
      <BarsList :barsList="info.hotel" class="fff"></BarsList>
    </div>
    <div class="menus-horizontal fff" style="margin-top:10px;padding:0 10px;">
      <template v-for="(v,i) in horizontalMenus" @click="route(i)">
        <menu-item :data="v" @click.native="route(i)" :key="i"></menu-item>
      </template>
    </div>
  </div>
</template>

<script>
import BarsList from '@/components/Center/BarsList'
import logo from '../assets/logo.png'
import { getAgentIndex } from '@/api/'
import MenuItem from '@/components/Center/MenuItem'
import InlineLoading from '../components/InlineLoading'
export default {
  name: 'AgentCenter',
  data () {
    return {
      logo: logo,
      loading: true,
      info: {
        money: {},
        user: {
          profit_balance: 0.000,
          total_profit_balance: 0.000
        }
      },
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
  beforeRouteEnter (to, from, next) {
    document.title = '代理管理'
    next()
  },
  created () {
    getAgentIndex().then((res) => {
      this.info = res.result
      this.loading = false
    })
  },
  mounted () {
  },
  components: {
    BarsList,
    MenuItem,
    InlineLoading
  }
}
</script>

<style lang="less" scoped>
.container /deep/ .bar-item {
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0.3rem;
    right: 0.3rem;
    height: 1px;
    background-color: #f2f2f2;
    content: "";
    transform: scaleY(0.5);
  }
}
</style>
