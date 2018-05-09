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
      <p class="search-tip f13">提示：只能搜索到关注牛霸霸屏公众号的用户</p>
      <p class="search-tip f13">您今天还能再新添加{{countObj.tcount}}个管理员</p>
      <inline-loading v-if="loading1" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
      <Manager v-for="(v, i) in searchResults" from="searchResults" :key="i" :index="i" :result="v" @on-add="onAdd" @on-delete="onDelete" @on-black="onAddBlack" :type="1"></Manager>
    </div>
    </search>
    <div id="tabs-manager">
      <tab>
        <tab-item selected @on-item-click="onItemClick">管理员</tab-item>
        <tab-item @on-item-click="onItemClick">黑名单</tab-item>
      </tab>
    </div>
    <p v-if="listType == 0" class="f12" style="padding: 8px 10px;">提示：最多只能添加{{countObj.count}}个管理员</p>
    <inline-loading v-if="loading2" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
    <div id="current-managers" class="fff">
      <Manager v-for="(v, i) in results" :show-add="false" :key="i" :index="i" :result="v"  @on-item-click="onEdit" @on-delete="onDeleteResult" :type="listType" @on-release="releaseBlack"></Manager>
    </div>
  </div>
</template>

<script>
import { Search, Tab, TabItem } from 'vux'
import Manager from '../components/Manager/Manager'
import { getBarManagers, getMembersByName, deleteManager, addBlack, blackList, releaseBlack, restAmountManager, isRest } from '@/api/'
import InlineLoading from '../components/InlineLoading'
export default {
  components: {
    Search,
    Tab,
    TabItem,
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
      loading2: true,
      listType: 0,
      countObj: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '管理员设置'
    next()
  },
  created () {
    restAmountManager({ht_id: this.$route.query.id}).then((res) => {
      this.countObj = res.result
    })
    this.getBarManagerData()
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44
  },
  methods: {
    onItemClick (index) {
      this.listType = index
      this.results = []
      if (index === 0) {
        // 管理员列表
        this.getBarManagerData()
      } else {
        // 黑名单列表
        this.getBlackListData()
      }
    },
    getBlackListData () {
      this.loading2 = true
      blackList({ht_id: this.$route.query.id}).then((res) => {
        Array.isArray(res.result) && (this.results = res.result)
      }).finally(() => {
        this.loading2 = false
      })
    },
    getBarManagerData () {
      this.loading2 = true
      getBarManagers({ht_id: this.$route.query.id}).then((res) => {
        Array.isArray(res.result.list) && (this.results = res.result.list)
      }).finally(() => {
        this.loading2 = false
      })
    },
    onAdd (data) {
      isRest({ht_id: this.$route.query.id}).then((res) => {
        if (res.result) {
          localStorage.setItem('managerInfo', JSON.stringify(this.searchResults[data.index]))
          this.$router.push(`/ManagerUpdate?id=${this.$route.query.id}&mc_id=${data.id}`)
        }
      })
      /* addManager({ht_id: this.$route.query.id, mc_id: data.id}).then((res) => {
        this.$vux.toast.show({
          text: '添加成功',
          isShowMask: false
        })
        data.cb && data.cb()
        this.searchResults[data.index].flag = 1
        this.listType === 0 && this.results.push({
          nickname: this.searchResults[data.index].nickname,
          mc_id: this.searchResults[data.index].id,
          headimgurl: this.searchResults[data.index].headimgurl
        })
      }) */
    },
    onEdit (data) {
      localStorage.setItem('managerInfo', JSON.stringify(this.results[data.index]))
      this.$router.push(`/ManagerUpdate?id=${this.$route.query.id}&mc_id=${data.id}&type=edit`)
    },
    onDelete (data) {
      deleteManager({ht_id: this.$route.query.id, mc_id: data.id}).then((res) => {
        this.$vux.toast.show({
          text: '删除成功',
          isShowMask: false
        })
        data.cb && data.cb()
        this.searchResults[data.index].flag = null
        if (this.listType !== 0) {
          return false
        }
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
    onAddBlack (data) {
      var _this = this
      this.$vux.confirm.show({
        title: '提示',
        content: '是否确定拉黑该用户？',
        onCancel () {
          console.log(this) // 非当前 vm
          console.log(_this) // 当前 vm
        },
        onConfirm () {
          addBlack({ht_id: _this.$route.query.id, mc_id: data.id}).then((res) => {
            _this.searchResults.splice(data.index, 1)
          })
        }
      })
    },
    releaseBlack (data) {
      releaseBlack({ht_id: this.$route.query.id, mc_id: data.id}).then((res) => {
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
@import (reference) '../styles/global.less';
.container /deep/ .vux-tab .vux-tab-item.vux-tab-selected {
    color: @centerColor;
  }

.container /deep/ .vux-tab-ink-bar {
  background-color: @centerColor;
}
#results {
  background-color: #fff;
}
#tabs-manager {
  background-color: #fff;
  &.focus {
    padding-top: 54px;
  }
  p {
    font-size: 14px;
  }
}
.search-tip {
  margin: 5px 10px;
}
</style>
