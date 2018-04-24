<template>
  <div class="container flex flex-v" style="height: 100%;">
    <div class="flex-1 scroll">
    <div class="top-manager tc">
      <img :src="info.headimgurl | prefixImageUrl" class="circle"/>
      <p class="nickname line1 f13">{{info.nickname}}</p>
    </div>
     <group label-width="12em" label-margin-right="2em" label-align="left">
       <group-title slot="title">管理员权限设置</group-title>
       <x-input title="每日最多免费打赏次数" text-align="right" type="number">
        <span slot="right">人</span>
      </x-input>
      <cell title="最高免费霸屏时长不超过" value="60秒"></cell>
      <x-switch title="可登录商户后台" v-model="powerOn" @on-change="powerOnChange"></x-switch>
     </group>
     <template v-if="powerOn">
      <checklist title="管理员权限" label-position="left" :options="powerList" v-model="powerCheck" @on-change="powerChange"></checklist>
      </template>
    </div>
     <div id="profile-submit-btn">
      <x-button :gradients="['#2481d2', '#2481d2']" :show-loading="loading" :disabled="loading">确认添加</x-button>
      </div>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, Checklist, XButton } from 'vux'
import { getManagerInfo, addManager, getFunction } from '@/api/'
export default {
  components: {
    GroupTitle,
    Group,
    Cell,
    XInput,
    XSwitch,
    Checklist,
    XButton
  },
  data () {
    return {
      powerCheck: [],
      powerList: [],
      powerOn: false,
      loading: false,
      info: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '管理员设置'
    next()
  },
  created () {
    var info = JSON.parse(localStorage.getItem('managerInfo'))
    this.info = info
    getFunction().then((res) => {
      if (Array.isArray(res.result)) {
        res.result.forEach((v) => {
          v.key = v.id
          v.value = v.name
        })
        this.powerList = res.result
      }
    })
    if (!this.$route.query.type) {
      getManagerInfo({ht_id: this.$route.query.id, mc_id: this.$route.query.mc_id}).then((res) => {
        console.log(res)
      })
    }
  },
  mounted () {
  },
  methods: {
    powerChange (val, label) {
      console.log(val)
    },
    powerOnChange (currentValue) {
      this.powerOn = currentValue
    }
  }
}
</script>

<style lang="less" scoped>
.top-manager {
  padding: 0.2rem 0;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>
