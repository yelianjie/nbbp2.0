<template>
  <div class="container min-h">
    <div style="height:0;"></div>
    <search
    @on-change="getResult"
    v-model="value"
    position="absolute"
    auto-scroll-to-top 
    @on-submit="onSubmit"
    @on-focus="onFocus"
    @on-blur="onBlur"
    ref="search">
    <div id="results" :style="{'min-height': resultHeight + 'px'}">
      <Manager v-for="(v, i) in results" :key="i" :result="v"></Manager>
    </div>
    </search>
    
    <div class="manager-tips" :class="{'focus': focus == true}">
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
      resultHeight: 0,
      value: '',
      focus: false,
      results: [{
        nickname: 'Somer'
      }, {
        nickname: 'Somer'
      }]
    }
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44
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
}
.manager-tips {
  background-color: #fff;
  padding: 10px 15px;
  &.focus {
    padding-top: 54px;
  }
  p {
    font-size: 14px;
  }
}
</style>
