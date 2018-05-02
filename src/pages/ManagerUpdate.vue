<template>
  <div class="container flex flex-v" style="height: 100%;">
    <div class="flex-1 scroll">
    <div class="top-manager tc">
      <img :src="info.headimgurl | prefixImageUrl" class="circle"/>
      <p class="nickname line1 f14" style="margin: 0 15px;">{{info.nickname}}</p>
    </div>
     <group label-width="12em" label-margin-right="2em" label-align="left">
       <group-title slot="title">管理员权限设置</group-title>
       <x-input title="每日最多免费打赏次数" text-align="right" type="number" v-model="count" :show-clear="false" @on-change="countValid" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">次</span>
      </x-input>
      <cell title="最高免费霸屏时长不超过" value="60秒"></cell>
      <x-switch title="可登录商户后台" v-model="powerOn" @on-change="powerOnChange" :disabled="is_merchant == 1"></x-switch>
     </group>
     <template v-if="powerOn">
      <checklist title="管理员权限" label-position="left" :options="powerList" v-model="powerCheck" :check-disabled="false" :disabled="is_merchant == 1"></checklist>
      </template>
    </div>
     <div class="flex" style="margin: 0 10px;padding: 10px 0;">
      <template v-if="$route.query.type">
      <x-button class="flex1" :gradients="['#e51c23', '#e51c23']" @click.native="deleteManager" :show-loading="loading" :disabled="loading" v-if="is_merchant == 0">删除</x-button>
      <div style="width: 10px;"></div>
      <x-button  class="flex1" :gradients="['#2481d2', '#2481d2']" @click.native="handleManager" :show-loading="loading2" :disabled="loading2">确认</x-button>
      </template>
      <template v-else>
      <x-button  :gradients="['#2481d2', '#2481d2']" @click.native="handleManager" :show-loading="loading2" :disabled="loading2">确认添加</x-button>
      </template>
      </div>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, Checklist, XButton } from 'vux'
import { getManagerInfo, addManager, getFunction, updateManagerInfo, deleteManager } from '@/api/'
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
      loading2: false,
      count: 3,
      info: {},
      is_merchant: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '管理员设置'
    next()
  },
  created () {
    var info = JSON.parse(localStorage.getItem('managerInfo'))
    this.info = info
    getFunction({ht_id: this.$route.query.id, mc_id: this.$route.query.mc_id}).then((res) => {
      if (Array.isArray(res.result)) {
        res.result.forEach((v) => {
          v.key = v.id
          v.value = v.name
          !this.$route.query.type && this.powerCheck.push(v.id.toString())
        })
        this.powerList = res.result
      }
    })
    if (this.$route.query.type) {
      getManagerInfo({ht_id: this.$route.query.id, mc_id: this.$route.query.mc_id}).then((res) => {
        if (res.result) {
          this.is_merchant = res.result.info.is_merchant
          var powerChecks = []
          res.result.function.map((v) => {
            powerChecks.push(v.id.toString())
          })
          // this.powerCheck = powerChecks
          this.$set(this.$data, 'powerCheck', powerChecks)
          this.powerOn = Boolean(~~(res.result.info.is_allow_in))
          this.count = ~~(res.result.info.daily_screen_count)
        }
      })
    }
  },
  mounted () {
  },
  methods: {
    countValid (value) {
      var toV = parseInt(value)
      if (!Number.isNaN(toV)) {
        this.count = toV > 50 ? 50 : toV
      }
    },
    handleManager () {
      this.loading2 = true
      var params = {
        ht_id: this.$route.query.id,
        mc_id: this.$route.query.mc_id,
        allow: this.powerOn ? 1 : 0,
        time: 60,
        num: this.count,
        function_id: this.powerOn ? this.powerCheck.join(',') : ''
      }
      var _action = addManager
      var _text = '添加成功'
      if (this.$route.query.type) {
        _action = updateManagerInfo
        _text = '更新成功'
      }
      _action(params).then((res) => {
        this.$vux.toast.show({
          text: _text,
          isShowMask: false
        })
        this.$router.go(-1)
      }).finally(() => {
        this.loading2 = false
      })
    },
    deleteManager () {
      var _this = this
      this.$vux.confirm.show({
        title: '提示',
        content: '确定删除该管理员？',
        onCancel () {
        },
        onConfirm () {
          _this.loading = true
          deleteManager({ht_id: _this.$route.query.id, mc_id: _this.$route.query.mc_id}).then((res) => {
            _this.$vux.toast.show({
              text: '删除成功',
              isShowMask: false
            })
            _this.$router.go(-1)
          }).finally(() => {
            _this.loading = false
          })
        }
      })
    },
    powerOnChange (currentValue) {
      this.powerOn = currentValue
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
.container {
  /deep/ .weui-switch:checked {
    border-color: @centerColor;
    background-color: @centerColor;
  }
  /deep/ .weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before {
    color:  @centerColor;
  }
  /deep/ .weui-btn + .weui-btn {
    margin-top: 0;
  }
}

.top-manager {
  padding: 0.2rem 0;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>
