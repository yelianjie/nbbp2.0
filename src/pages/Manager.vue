<template>
  <div class="container min-h">
    <div style="height:0;"></div>
    <search
    @on-submit="getResult"
    v-model="value"
    position="absolute"
    auto-scroll-to-top 
    @on-focus="onFocus"
    @on-blur="onBlur"
    @on-cancel="onCancel"
    placeholder="请输入微信昵称查找添加"
    ref="search">
    <div id="results" :style="{'min-height': resultHeight + 'px'}">
      <inline-loading v-if="loading1" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
      <Manager v-for="(v, i) in searchResults" from="searchResults" :key="i" :index="i" :result="v" @on-add="onAdd" @on-delete="onDelete"></Manager>
    </div>
    </search>
    
    <div class="manager-tips" :class="{'focus': focus == true}">
      <p>管理员权限：</p>
      <p>1、每天可免费在该酒吧购买3次霸屏，不可累加。</p>
      <p>2、可在手机端删除已经上墙的消息。</p>
    </div>
    <inline-loading v-if="loading2" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
    <div id="current-managers" class="fff">  
      <Manager v-for="(v, i) in results" :show-add="false" :key="i" :index="i" :result="v"  @on-delete="onDeleteResult"></Manager>
    </div>
  </div>
</template>

<script>
import { Search } from 'vux'
import Manager from '../components/Manager/Manager'
import { getBarManagers, getMembersByName, addManager, deleteManager } from '@/api/'
import InlineLoading from '../components/InlineLoading'
export default {
  components: {
    Search,
    Manager,
    InlineLoading
  },
  data () {
    return {
      resultHeight: 0,
      value: '',
      focus: false,
      results: [],
      searchResults: [],
      loading1: false,
      loading2: true
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '管理员设置'
    next()
  },
  created () {
    getBarManagers({ht_id: this.$route.query.id}).then((res) => {
      this.loading2 = false
      Array.isArray(res.result) && (this.results = res.result)
    })
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44
  },
  methods: {
    onAdd (data) {
      addManager({ht_id: this.$route.query.id, mc_id: data.id}).then((res) => {
        this.$vux.toast.show({
          text: '添加成功',
          isShowMask: false
        })
        data.cb && data.cb()
        this.searchResults[data.index].flag = 1
        this.results.push({
          nickname: this.searchResults[data.index].nickname,
          mc_id: this.searchResults[data.index].id,
          headimgurl: this.searchResults[data.index].headimgurl
        })
      })
    },
    onDelete (data) {
      deleteManager({ht_id: this.$route.query.id, mc_id: data.id}).then((res) => {
        this.$vux.toast.show({
          text: '删除成功',
          isShowMask: false
        })
        data.cb && data.cb()
        this.searchResults[data.index].flag = null
        let find = this.results.findIndex(v => v.mc_id === data.id)
        if (find > -1) {
          this.results.splice(find, 1)
        }
      })
    },
    onDeleteResult (data) {
      deleteManager({ht_id: this.$route.query.id, mc_id: data.id}).then((res) => {
        this.$vux.toast.show({
          text: '删除成功',
          isShowMask: false
        })
        data.cb && data.cb()
        this.results.splice(data.index, 1)
      })
    },
    onFocus () {
      this.focus = true
      this.$noscroll()
    },
    onBlur () {
      this.$noscroll.cancel()
      this.focus = false
    },
    onCancel () {
      this.value = ''
      this.searchResults = []
    },
    getResult (val) {
      if (val === '') {
        return false
      }
      this.searchResults = []
      this.loading1 = true
      getMembersByName({ht_id: this.$route.query.id, nickname: val}).then((res) => {
        this.loading1 = false
        Array.isArray(res.result) && (this.searchResults = res.result)
      })
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
