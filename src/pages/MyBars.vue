<template>
  <div class="container min-h fff flex flex-v">
    <div class="middle tc white bg3" style="padding: 0.36rem 0;">
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
          <div slot="content" class="vux-1px-t flex flex-align-center" style="padding: 0.2rem 0.3rem;" @click="goToBar(v.id, v.name)">
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
  </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import { getBars, deleteBar } from '@/api/'
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
      myScroll: null
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '商户管理'
    next()
  },
  created () {
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
        this.barList.splice(this.deleteInfo.index, 1)
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
    goToBar (barId, barName) {
      this.$router.push({
        path: `/BusinessCenter/${barId}`,
        query: {
          name: encodeURI(barName),
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
    InlineLoading
  }
}
</script>

<style scoped>
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
</style>
