<template>
  <div class="container min-h">
    <search
    @on-change="getResult"
    v-model="value"
    position="absolute"
    auto-scroll-to-top 
    @on-submit="onSubmit"
    @on-focus="onFocus"
    @on-blur="onBlur"
    ref="search"></search>
    <div id="results" :class="{'focus': focus == true}">
      <Manager v-for="(v, i) in results" :key="i" :result="v"></Manager>
    </div>
    <div class="manager-tips">
      <p>管理员权限：</p>
      <p>1、每天可免费在该酒吧购买10次霸屏，不可累加。</p>
      <p>2、可在手机端删除已经上墙的消息。</p>
    </div>
    <div id="current-managers" class="fff">
       <Manager v-for="(v, i) in results" :key="i" :result="v"></Manager>
    </div>
  </div>
</template>

<script>
import { Search } from 'vux'
import Manager from '../components/Manager/Manager'
export default {
  components: {
    Search,
    Manager
  },
  data () {
    return {
      value: '',
      focus: false,
      results: [{
        nickname: 'Somer'
      }, {
        nickname: 'Somer'
      }]
    }
  },
  methods: {
    onSubmit () {
      this.$refs.search.setBlur()
    },
    onFocus () {
      this.focus = true
    },
    onBlur () {
      this.focus = false
    },
    getResult (val) {
      console.log('on-change', val)
    }
  }
}
</script>

<style lang="less" scoped>
#results {
  background-color: #fff;
  margin-bottom: 10px;
  &.focus {
    padding-top: 44px;
  }
}
.manager-tips {
  background-color: #fff;
  padding: 10px 15px;
  p {
    font-size: 14px;
  }
}
</style>
