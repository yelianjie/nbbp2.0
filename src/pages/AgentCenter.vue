<template>
  <div class="container" style="backgournd-color:#f7f7f7;">
    <div class="top bg3">
      <div class="logo-line">
        <!-- <img :src="logo" class="logo-img circle"> -->
        <img v-if="info.agent" :src="info.agent.headimgurl | prefixImageUrl" class="logo-img circle"/>
        <span class="u-name white f13">{{info.agent.name}}（推荐码：{{info.agent.invitation_code}}）</span>
      </div>
    </div>
    <div data-v-7de79557="" class="middle tc white bg3" style="padding: 0.36rem 0;margin-bottom:10px;">
      <p data-v-7de79557="" class="f14">当前累计未提现收益</p>
      <p data-v-7de79557="" class="benefit-account" v-if="info.money.agent_balance">{{info.money.agent_balance}}</p>
      <p data-v-7de79557="" class="benefit-account" v-else>0</p>
      <p data-v-7de79557="" class="f16" v-if="info.money.agent_income">累计总收益：{{info.money.agent_income}} 元</p>
      <p data-v-7de79557="" class="f16" v-else>累计总收益：0 元</p>
    </div>
    <div class="fff">
      <p style="padding: 0.2rem 0.3rem;" class="f18">代理酒吧列表</p>
      <inline-loading v-if="loading" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
      <div class="f13 tc" v-if="noMore" style="color:#a0a0a0;padding: 10px 0;">当前还没有代理的商户</div>
      <BarsList :barsList="info.hotel" class="fff"></BarsList>
    </div>
    <div class="menus-horizontal fff" style="margin-top:10px;padding:0 10px;">
      <template v-for="(v,i) in horizontalMenus" @click="route(i)">
        <menu-item :data="v" @click.native="route(i)" :key="i"></menu-item>
      </template>
    </div>
    <footer class="footer flex">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <router-link :to="{path: '/BusinessJoin', query: {type: 1}}" class="enter-bar">立即推荐商户注册</router-link>
      </div>
    </footer>
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
      noMore: false,
      info: {
        money: {},
        agent: {},
        hotel: []
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
      if (res.result.hotel.length === 0) {
        this.noMore = true
      }
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
.top {
  padding: 10px 15px;
}
.logo-img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.u-name {
  display: inline-block;
  vertical-align: middle;
}
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
