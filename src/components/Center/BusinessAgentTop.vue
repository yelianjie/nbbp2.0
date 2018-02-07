<template>
  <div class="center-wrap">
    <div class="top">
      <div class="logo-line">
        <img :src="logo" class="logo-img circle">
        <span class="u-name">{{name}}</span>
      </div>
    </div>
    <div class="middle tc">
      <p class="f14">当前收益</p>
      <p class="benefit-account">{{currentMoney}}</p>
      <p class="f16">总收益：{{totalMoney}} 元</p>
    </div>
    <group class="actions">
      <cell title="我要提现" is-link :link="{path: '/Deposit/' + this.$route.params.id}"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  props: ['logo', 'name', 'currentMoney', 'totalMoney'],
  data () {
    return {

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
  background-color: #2b2b2b;
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
  margin: 10px auto 30px;
  .benefit-account {
    font-size: 24px;
    font-weight: bold;
  }
}

.center-wrap {
  /deep/ .weui-cells {
    background-color: #333;
    &:after,
    &:before {
      border: 0;
    }
  }
  /deep/ .weui-cell_access:active {
    background-color: #3e3e3e;
  }
}

</style>
