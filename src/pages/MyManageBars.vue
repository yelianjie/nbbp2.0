<template>
  <div class="container min-h fff">
    <div class="middle tc white bg3" style="padding: 0.36rem 0;">
      <p class="f14">当前累计未提现收益</p>
      <p class="benefit-account">{{info.total_balance}}</p>
      <p class="f16">累计总收益：{{info.total_income}} 元</p>
    </div>
    <p style="padding: 0.2rem 0.3rem;" class="f18 pr bar-title">我管理的酒吧</p>
    <inline-loading v-if="loading" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
    <div class="bars">
      <div class="vux-1px-t flex flex-align-center" v-for="(v, i) in info.list" :key="i" style="padding: 0.2rem 0.3rem;" @click="goToDeposit(v.id, i)">
        <img class="circle" :src="v.logo | prefixImageUrl" style="width: 1rem;height: 1rem;margin-right: 0.4rem;"/>
        <div class="flex-1 flex flex-v">
          <p class="f16">{{v.name}}</p>
          <p class="f14" style="color: #939393;">{{v.address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBarManagerMoney } from '@/api/'
import InlineLoading from '../components/InlineLoading'
export default {
  data () {
    return {
      confirmVisible: false,
      info: {
        list: []
      },
      deleteInfo: null,
      loading: true
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我的酒吧'
    next()
  },
  created () {
    getBarManagerMoney().then((res) => {
      this.info = res.result
      this.loading = false
    })
  },
  methods: {
    goToDeposit (barId, index) {
      const info = this.info.list[index]
      localStorage.setItem('depositInfo', JSON.stringify({name: info.name, logo: info.logo, balance: info.supervise_balance}))
      this.$router.push({
        path: `/Deposit/${barId}`,
        query: {
          type: 4
        }
      })
    }
  },
  components: {
    InlineLoading
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
