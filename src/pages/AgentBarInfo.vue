<template>
  <div class="container padding-bottom-btn borderbox">
    <BusinessAgentTop :name="barInfo.name" :logo="barInfo.logo | prefixImageUrl" :currentMoney="barInfo.agent_balance" :totalMoney="barInfo.agent_income"></BusinessAgentTop>
    <div class="percent-divide fff">
      <p class="set-title">分成比例设置</p>
      <div class="flex flex-h percent-box">
        <div class="percent-item percent">
          <p class="percent-title">用户比例<span class="f12">（此项含用户分成的项目才生效）</span></p>
          <x-number v-model.number="barInfo.users_separate" fillable align="left" :min="0" @click.native="onUserClick" @on-change="userChange" :max="calUser"></x-number>
          <p class="default-percent f12">不高于<span style="color:red;">{{defaultRate.user}}%</span></p>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item flex-1 percent">
          <p class="percent-title">商户比例</p>
          <x-number v-model.number="barInfo.ht_separate" fillable align="left" :min="0" :max="100"></x-number>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item  flex-1 percent">
          <p class="percent-title">代理比例</p>
          <x-number v-model.number="barInfo.yewu_separate" fillable align="left" :min="0" :max="Number(defaultRate.agent)"></x-number>
          <p class="default-percent f12">不高于<span style="color:red;">{{defaultRate.agent}}%</span></p>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item percent">
          <p class="percent-title">酒吧管理</p>
          <x-number v-model.number="barInfo.manage_separate" fillable align="left" :min="0" :max="100"></x-number>
        </div>
        <div class="percent-item">
          <p class="percent-title">绑定二维码</p>
          <template v-if="supervise_info">
            <p class="f13" style="margin-top: 10px;">{{supervise_info.name}}</p>
            <p class="f13"><a :href="'tel:' + supervise_info.phone">{{supervise_info.phone}}</a></p>
            <div class="bindif">
              <x-button :gradients="['#ff0e0e', '#ff0e0e']" mini @click.native="cancelConfirm">取消绑定</x-button>
            </div>
          </template>
          <template v-else>
            <div class="bindif">
              <x-button :gradients="['#1D62F0', '#1D62F0']" mini @click.native="maskVisible = true">去绑定</x-button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="bottom_fix">
      <x-button :gradients="['#1D62F0', '#1D62F0']" @click.native="setBarPercent">保存</x-button>
    </div>

    <div v-show="maskVisible">
      <div id="maskLayer" @click="maskVisible = false" class="mask-overlay" style="background-color:rgba(0,0,0,.8);"></div>
      <div id="maskQrcode">
        <p class="f14">请扫描以下二维码绑定</p>
        <p class="f14">管理酒吧</p>
        <div style="margin-top:10px;">
          <canvas id="qr"></canvas>
          <!-- <vue-qr v-if="barInfo.logo" :margin="0" :logoSrc="barInfo.logo | prefixImageUrl" :dotScale="1" :text="url" :height="size" :width="size"></vue-qr> -->
        </div>
      </div>
    </div>
    <!-- <bp-dialog :visible="dialogVisible"></bp-dialog> -->
</div>
</template>

<script>
import { XNumber, XInput, Group, XButton } from 'vux'
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import { getAgentBar, updateRate, releaseSupervise } from '@/api/'
import logo from '../assets/logo.png'
// import VueQr from 'vue-qr'
import QRious from 'qrious'
// import bpDialog from '@/components/bpDialog.vue'
export default {
  name: 'AgentBarInfo',
  components: {
    XNumber,
    XInput,
    Group,
    XButton,
    BusinessAgentTop
    // VueQr
  },
  data () {
    return {
      logo: logo,
      maskVisible: false,
      dialogVisible: false,
      barInfo: {},
      supervise_info: null,
      defaultRate: {},
      size: 200,
      mePercent: 25,
      url: window.location.href.replace('AgentBarInfo', 'BindManage'),
      qr: null,
      edit: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '代理管理'
    next()
  },
  created () {
    getAgentBar({ht_id: this.$route.params.id}).then((res) => {
      res.result.agent.users_separate = Number(res.result.agent.users_separate)
      res.result.agent.ht_separate = Number(res.result.agent.ht_separate)
      res.result.agent.yewu_separate = Number(res.result.agent.yewu_separate)
      res.result.agent.manage_separate = Number(res.result.agent.manage_separate)
      res.result.agent.company_separate = Number(res.result.agent.company_separate)
      this.barInfo = res.result.agent
      this.supervise_info = res.result.supervise_info
      this.supervise_info.money = res.result.supervise_money
      this.defaultRate = res.result.default_rate
      var fSize = parseInt(document.documentElement.style.fontSize)
      this.size = 4 * fSize
      this.$nextTick(() => {
        this.qr = new QRious({
          element: document.getElementById('qr'),
          value: window.location.href.replace('AgentBarInfo', 'BindManage'),
          size: this.size
        })
        /* var img = new Image()
        img.onload = () => {
          this.drawLogo(img)
        }
        img.src = this.$options.filters.prefixImageUrl(this.barInfo.logo) */
      })
    })
  },
  mounted () {
  },
  watch: {
    maskVisible (newVal, oldVal) {
      if (newVal) {
        this.$noscroll()
      } else {
        this.$noscroll.cancel()
      }
    }
  },
  methods: {
    cancelConfirm () {
      const _this = this
      this.$vux.confirm.show({
        closeOnConfirm: false,
        content: `<div class="tc f14">
          <p>当前酒吧管理：${this.supervise_info.name}</p>
          <p>未提现余额：${this.supervise_info.money}元</p>
          <div style="height:1px;background-color:#ddd;margin: 10px 0;"></div>
          <p style="color:red;" class="f13">取消绑定后，当前酒吧管理：${this.supervise_info.name}将无法查看收益信息和提现。</p>
          <p style="margin-top: 10px;">该操作不可恢复，确认取消绑定吗？</p>
        </div>`,
        // 组件除show外的属性
        onCancel () {
        },
        onConfirm () {
          _this.$vux.loading.show({
            text: '正在取消绑定'
          })
          releaseSupervise({ht_id: _this.$route.params.id}).then((res) => {
            _this.$vux.toast.show({
              text: '取消绑定成功',
              width: '10em'
            })
            _this.$vux.confirm.hide()
            _this.supervise_info = null
          }).finally(() => {
            _this.$vux.loading.hide()
          })
        }
      })
    },
    setBarPercent () {
      if (!this.barInfo.id || this.calPercent()) {
        return false
      }
      let form = {
        ht_id: this.barInfo.id,
        users_separate: this.barInfo.users_separate,
        ht_separate: this.barInfo.ht_separate,
        yewu_separate: this.barInfo.yewu_separate,
        manage_separate: this.barInfo.manage_separate
      }
      updateRate(form).then((res) => {
        this.$vux.toast.show({
          text: '保存成功'
        })
      })
    },
    calPercent () {
      if (Number(this.barInfo.ht_separate) + Number(this.barInfo.manage_separate) + Number(this.barInfo.yewu_separate) + Number(this.barInfo.company_separate) > 100) {
        this.$vux.toast.show({
          text: '商户、代理和酒吧管理比例之和不能超过' + (100 - this.barInfo.company_separate) + '%',
          width: '20em'
        })
        return true
      } else {
        return false
      }
    },
    userChange (val) {
      if (this.defaultRate.user) {
        if (val > this.defaultRate.user) {
          this.barInfo.users_separate = val
        }
      }
    },
    onUserClick () {
      this.edit = true
    }
  },
  computed: {
    calUser () {
      if (this.edit) {
        return Number(this.defaultRate.user)
      } else {
        return 100
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  /deep/ .weui-cells {
    margin-top: 10px;
  }
}
.percent-divide {
  margin-top: 10px;
}
.percent-box {
  border-top: 1px solid #D9D9D9;
}
.set-title {
  padding: 10px 15px;
}
.top {
  padding: 15px 0;
}
.percent-item {
  padding: 10px 15px;
  position: relative;
  &.percent:after {
    position: absolute;
    left: 150px;
    top: 50px;
    content: "%";
  }
  /deep/ .weui-cell {
    padding: 10px 0;
    &:before {
      border: 0;
    }
  }
}
.bindif {
  padding: 10px 0;
}
#maskQrcode {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate3d(-50%, -50%, 0);
  p {
    color: #fff;
  }
}
.default-percent {
  position: absolute;
  left: 188px;
  top: 54px;
}
</style>
