<template>
  <div class="container padding-bar" style="backgournd-color:#f7f7f7;">
    <div class="top bg3">
      <div class="logo-line">
        <!-- <img :src="logo" class="logo-img circle"> -->
        <img v-if="info.agent" :src="info.agent.headimgurl | prefixImageUrl" class="logo-img circle"/>
        <span class="u-name fff-bp f13">{{info.agent.name}}</span>
      </div>
    </div>
    <div data-v-7de79557="" class="middle tc fff-bp bg3" style="padding: 0.36rem 0;margin-bottom:10px;">
      <p data-v-7de79557="" class="f14">当前累计未提现收益</p>
      <p data-v-7de79557="" class="benefit-account" v-if="info.money.agent_balance">{{info.money.agent_balance}}</p>
      <p data-v-7de79557="" class="benefit-account" v-else>0</p>
      <p data-v-7de79557="" class="f16" v-if="info.money.agent_income">累计总收益：{{info.money.agent_income}} 元</p>
      <p data-v-7de79557="" class="f16" v-else>累计总收益：0 元</p>
    </div>
    <div class="fff flex flex-h flex-align-center" style="margin: 10px 0;height: 44px;padding: 0 15px;">
      <div class="f15">您的代理推荐码</div>
      <div class="flex-1 f15" style="text-align:right;">{{info.agent.invitation_code}}</div>
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
    <x-dialog v-model="concernVisible" :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="qrcode-box">
      <div class="qrcode-info flex flex-v flex-align-center">
        <p class="f15" style="color:#fff;font-weight: bold;">注册成功</p>
        <p class="f15" style="color:#fff;margin-bottom: 0.3rem;font-weight: bold;">欢迎成为牛霸代理</p>
        <img v-if="ticket" :src="'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + ticket" class="qrcode"/>
        <p class="f14">请<span style="color:red;">长按</span>二维码</p>
        <p class="f14">关注牛霸霸屏官方公众号</p>
        <p class="f14">进入<span style="color:red;">代理管理后台</span></p>
      </div>
    </div>
  </x-dialog>
  </div>
</template>

<script>
import BarsList from '@/components/Center/BarsList'
import { XDialog } from 'vux'
import logo from '../assets/logo.png'
import { getAgentIndex, isSubscribe } from '@/api/'
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
          path: '/HelpAgent'
        }
      }],
      concernVisible: false,
      ticket: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '代理管理'
    next()
  },
  created () {
    isSubscribe({ht_id: 0, type: 3, url: window.location.hash.substring(1)}).then((res) => {
      if (res.result === '已关注') {
        this.concernVisible = false
      } else {
        this.ticket = res.result
        this.concernVisible = true
      }
    })
    getAgentIndex().then((res) => {
      this.info = res.result
      localStorage.setItem('agentNeed', JSON.stringify({code: res.result.agent.invitation_code}))
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
    InlineLoading,
    XDialog
  },
  methods: {
    route (index) {
      this.$router.push(this.horizontalMenus[index].route)
    }
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
.qrcode-info {
  width: 4.75rem;
  padding: 0.3rem 0 0.6rem;
  background: #fff url('../assets/qrcode-bg.png') no-repeat top;
  background-size: contain;
  border-radius: 15px;
  margin: 0 auto;
  .qrcode {
    width: 2.2rem;
    height: 2.2rem;
    margin-bottom: 0.4rem;
  }
  p {
    line-height: 0.4rem;
    color: #3d404f;
    padding: 0 10px;
    word-break: break-all;
  }
}
</style>
