<template>
  <div class="container padding-bar f7f7f7 borderbox">
    <BusinessAgentTop :hideIncome="iSHideIncome" :showTx="mInfo.is_merchant > 0" :name="barInfo.name" :logo="barInfo.logo | prefixImageUrl" :currentMoney="barInfo.merchant_balance" :totalMoney="barInfo.merchant_income" :yesMoney="barInfo.yst_money"></BusinessAgentTop>
    <group gutter = '0' style="margin: 0;">
      <cell style="margin: 0;background-color: #2481d2;color:#fff;" class='f14' title="收益统计详情" :link="{path: '/BusinessOrderDetail', query: {id: $route.query.id}}"></cell>
    </group>
    <BusinessMenus :menus="menus"></BusinessMenus>
    <footer class="footer flex">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <a @click.prevent="judgeRouter" class="enter-bar">进入我的酒吧</a>
      </div>
    </footer>
  </div>
</template>

<script>
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import BusinessMenus from '@/components/Center/BusinessMenus'
import logo from '../assets/logo.png'
import { getBarMoney, getManagerInfo } from '@/api/'
import { mapGetters } from 'vuex'
import { Group, Cell } from 'vux'
export default {
  name: 'BusinessCenter',
  data () {
    return {
      logo: logo,
      footList: [ {
        name: '我的酒吧',
        icon: 'business-bar-icon'
      }],
      barInfo: {},
      menus: [],
      mInfo: {},
      curIsSuper: false
    }
  },
  created () {
    getBarMoney({ht_id: this.$route.query.id}).then((res) => {
      this.barInfo = res.result
      localStorage.setItem('businessNeed', JSON.stringify({id: this.$route.query.id, name: res.result.name, qrcode: this.$options.filters.prefixImageUrl(res.result.phone_er_url)}))
      document.title = res.result.name + '管理'
    })
    getManagerInfo({ht_id: this.$route.query.id, mc_id: this.userInfo.id}).then((res) => {
      if (res.result && res.result.function) {
        res.result.function.forEach(v => {
          v.route = {
            path: v.path,
            query: {
              id: this.$route.query.id
            }
          }
        })
        this.menus = res.result.function
        this.mInfo = res.result.info
        this.curIsSuper = Boolean(res.result.is_super)
      }
    })
  },
  methods: {
    judgeRouter () {
      if (this.barInfo.province_id) {
        this.$router.push(`/Main/${this.$route.query.id}`)
      } else {
        this.$router.push({
          path: `/BasicBusiness`,
          query: {
            id: `${this.$route.query.id}`,
            toMain: 1
          }
        })
      }
    }
  },
  components: {
    BusinessAgentTop,
    BusinessMenus,
    Group,
    Cell
  },
  computed: {
    ...mapGetters('user', {
      userInfo: 'userInfo'
    }),
    iSHideIncome () {
      if (this.mInfo.is_merchant > 0 || this.curIsSuper) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
