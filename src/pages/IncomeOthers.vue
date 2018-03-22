<template>
  <div class="container">
    <group title="2018年总收益：34564元">
      <cell title="3" value="2015元" is-link :link="{path: '/IncomeByMonth'}"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  beforeRouteEnter (to, from, next) {
    document.title = '收益详情'
    next()
  },
  components: {
    Group,
    Cell
  }
}
</script>
