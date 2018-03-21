<template>
  <div class="container min-h fff flex flex-v">
    <div class="middle tc fff-bp bg3" style="padding: 0.36rem 0;">
      <p class="f14">当前累计未提现收益</p>
      <p class="benefit-account">{{moneyInfo.merchant_balance}}</p>
      <p class="f16">累计总收益：{{moneyInfo.merchant_income}} 元</p>
    </div>
    <p style="padding: 0.2rem 0.3rem;" class="f18 pr bar-title">我的酒吧</p>
    <div class="bars flex-1">
      <div>
      <inline-loading v-if="loading" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
      <swipeout v-else>
        <swipeout-item :sensitivity="15" :ref="'swipeoutItem' + i" transition-mode="follow" :auto-close-on-button-click="false" v-for="(v, i) in barList" :key="i">
          <div slot="right-menu">
            <swipeout-button @click.native="onDeleteBar(i, v.id)" type="primary" background-color="#D23934">删除</swipeout-button>
          </div>
          <div slot="content" class="vux-1px-t flex flex-align-center" style="padding: 0.2rem 0.3rem;" @click="goToBar(v.id)">
            <img class="circle" :src="v.logo | prefixImageUrl" style="width: 1rem;height: 1rem;margin-right: 0.4rem;"/>
            <div class="flex-1 flex flex-v">
              <p class="f16">{{v.name}}</p>
              <p class="f14" style="color: #939393;">注册时间：{{v.add_time}}</p>
            </div>
          </div>
        </swipeout-item>
      </swipeout>
      </div>
    </div>
    <bp-dialog :title="'提示'" v-model="confirmVisible" @onConfirm="confirmDelete">
      <p class="f16">确认删除该酒吧吗？</p>
      <p class="f14" style="color:#a09e9e;">确认后将无法查看收益及提现</p>
      <p class="f12" style="color:red;">该操作无法恢复</p>
  </bp-dialog>
  <x-dialog v-model="concernVisible" :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="qrcode-box">
      <div class="qrcode-info flex flex-v flex-align-center">
        <p class="f15" style="color:#fff;font-weight: bold;">注册成功</p>
        <p class="f15" style="color:#fff;margin-bottom: 0.3rem;font-weight: bold;">欢迎成为牛霸商户</p>
        <img v-if="ticket" :src="'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + ticket" class="qrcode"/>
        <p class="f14">请<span style="color:red;">长按</span>二维码</p>
        <p class="f14">关注牛霸霸屏官方公众号</p>
        <p class="f14">进入<span style="color:red;">商户管理后台</span></p>
      </div>
    </div>
  </x-dialog>
  </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton, XDialog } from 'vux'
import { getBars, deleteBar, isSubscribe } from '@/api/'
import BpDialog from '../components/bpDialog'
import InlineLoading from '../components/InlineLoading'
export default {
  data () {
    return {
      confirmVisible: false,
      moneyInfo: {},
      barList: [],
      deleteInfo: null,
      loading: true,
      myScroll: null,
      concernVisible: false,
      ticket: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '商户管理'
    next()
  },
  created () {
    isSubscribe({ht_id: 0, type: 2, url: window.location.hash.substring(1)}).then((res) => {
      if (res.result === '已关注') {
        this.concernVisible = false
      } else {
        this.ticket = res.result
        this.concernVisible = true
      }
    })
    getBars().then((res) => {
      this.moneyInfo = res.result.money
      this.barList = res.result.hotelList
      this.loading = false
    })
  },
  mounted () {
  },
  methods: {
    confirmDelete () {
      deleteBar({ht_id: this.deleteInfo.id}).then((res) => {
        let origin = Object.assign([], this.barList)
        origin.splice(this.deleteInfo.index, 1)
        this.barList = []
        this.$nextTick(() => {
          this.barList = origin
        })
        this.confirmVisible = false
      })
    },
    onDeleteBar (index, id) {
      this.confirmVisible = true
      this.deleteInfo = {
        index: index,
        id: id
      }
    },
    goToBar (barId) {
      this.$router.push({
        path: `/BusinessCenter`,
        query: {
          id: barId,
          type: 2
        }
      })
    }
  },
  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    BpDialog,
    InlineLoading,
    XDialog
  }
}
</script>

<style scoped lang="less">
.bars {
  overflow: hidden;
}
.bars /deep/ .vux-1px-t::before {
  border: 0;
}
.bar-title:before {
  position: absolute;
  bottom: 0;
  left: 0.3rem;
  right: 0.3rem;
  height: 1px;
  background-color: #f2f2f2;
  content: "";
  transform: scaleY(0.5);
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
