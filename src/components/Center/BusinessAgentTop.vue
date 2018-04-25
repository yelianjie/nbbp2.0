<template>
  <div class="center-wrap">
    <div class="top">
      <div class="logo-line">
        <img :src="logo" class="logo-img circle" v-if="logo">
        <img v-else src="../../assets/blank.gif" class="logo-img circle"/>
        <span class="u-name">{{name}}</span>
      </div>
    </div>
    <div class="middle">
      <button id="deposit-btn" class="fff-bp" @click="setLocalStorage">我要提现</button>
      <div class="item-wrap flex">
        <div class="flex-1 data-item">
          <p class="f14 gray">可提现收益</p>
          <p class="f14">{{currentMoney}}</p>
        </div>
      </div>
      <div class="item-wrap flex">
        <div class="data-item">
          <p class="f14 gray">总收益</p>
          <p class="f14">{{totalMoney}}</p>
        </div>
        <div class="data-item">
          <p class="f14 gray">昨日总收益</p>
          <p class="f14">{{yesMoney}}</p>
        </div>
      </div>
    </div>
    <group class="actions">
      <cell title="收益详情" is-link :link="{path: '/IncomeOthers', query: {id: this.$route.query.id, type: this.$route.query.type == 2 ? 2 : 1}}"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  props: ['logo', 'name', 'currentMoney', 'totalMoney', 'yesMoney'],
  data () {
    return {

    }
  },
  methods: {
    setLocalStorage () {
      localStorage.setItem('depositInfo', JSON.stringify({name: this.name, logo: this.logo, balance: this.currentMoney}))
      this.$router.push({path: '/Deposit', query: {id: this.$route.query.id, type: this.$route.query.type}})
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>

<style lang="less" scoped>
.center-wrap {
  background-color: #2481d2;
  color: #fff;
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
.middle {
  margin: 0 auto 15px;
  position: relative;
  .benefit-account {
    font-size: 24px;
    font-weight: bold;
  }
}
.item-wrap {
  padding: 10px 15px;
}
.gray {
  color: #ccc;
}
.center-wrap {
  /deep/ .weui-cells {
    background-color: #237dcb;
    &:after,
    &:before {
      border: 0;
    }
  }
  /deep/ .weui-cell_access:active {
    background-color: #3d8dd3;
  }
}
#deposit-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 5px 18px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
}
.data-item {
  min-width: 100px;
}
</style>
