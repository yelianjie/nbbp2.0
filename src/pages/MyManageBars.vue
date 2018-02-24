<template>
  <div class="container min-h fff">
    <div class="middle tc white bg3" style="padding: 0.36rem 0;">
      <p class="f14">当前累计未提现收益</p>
      <p class="benefit-account">{{moneyInfo.merchant_balance}}</p>
      <p class="f16">累计总收益：{{moneyInfo.merchant_income}} 元</p>
    </div>
    <p style="padding: 0.2rem 0.3rem;" class="f18 pr bar-title">我的酒吧</p>
    <div class="bars">
      <div class="vux-1px-t flex flex-align-center" v-for="(v, i) in barList" :key="i" style="padding: 0.2rem 0.3rem;" @click="goToDeposit(v.id)">
        <img class="circle" :src="v.logo | prefixImageUrl" style="width: 1rem;height: 1rem;margin-right: 0.4rem;"/>
        <div class="flex-1 flex flex-v">
          <p class="f16">{{v.name}}</p>
          <p class="f14" style="color: #939393;">注册时间：{{v.add_time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBars, deleteBar } from '@/api/'
export default {
  data () {
    return {
      confirmVisible: false,
      moneyInfo: {},
      barList: [],
      deleteInfo: null
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我的酒吧'
    next()
  },
  created () {
    getBars().then((res) => {
      this.moneyInfo = res.result.money
      this.barList = res.result.hotelList
    })
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
    goToDeposit (barId) {
      this.$router.push({
        path: `/Deposit/${barId}`,
        query: {
          type: 4
        }
      })
    }
  }
}
</script>

<style scoped>
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
