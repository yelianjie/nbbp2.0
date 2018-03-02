<template>
  <div class="container padding-bottom-btn borderbox">
    <BusinessAgentTop :name="barInfo.name" :logo="barInfo.logo | prefixImageUrl" :currentMoney="barInfo.agent_balance" :totalMoney="barInfo.agent_income"></BusinessAgentTop>
    <div class="percent-divide fff">
      <p class="set-title">分成比例设置</p>
      <div class="flex flex-h percent-box">
        <div class="percent-item percent">
          <p class="percent-title">用户比例<span class="f12">（此项含用户分成的项目才生效）</span></p>
          <x-number v-model.number="barInfo.users_separate" fillable align="left"></x-number>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item flex-1 percent">
          <p class="percent-title">商户比例</p>
          <x-number v-model.number="barInfo.ht_separate" fillable align="left"></x-number>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item  flex-1 percent">
          <p class="percent-title">代理比例</p>
          <x-number v-model.number="barInfo.yewu_separate" fillable align="left"></x-number>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item percent">
          <p class="percent-title">酒吧管理</p>
          <x-number v-model.number="barInfo.manage_separate" fillable align="left"></x-number>
        </div>
        <div class="percent-item">
          <p class="percent-title">绑定二维码</p>
          <div class="bindif">
            <x-button :gradients="['#1D62F0', '#1D62F0']" mini @click.native="maskVisible = true">去绑定</x-button>
          </div>
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
        <div style="padding: 10px;background-color:#fff;margin-top:10px;">
          <vue-qr v-if="barInfo.logo" :margin="0" :logoSrc="barInfo.logo | prefixImageUrl" :dotScale="1" :text="url" :height="size" :width="size"></vue-qr>
        </div>
      </div>
    </div>
    <!-- <bp-dialog :visible="dialogVisible"></bp-dialog> -->
</div>
</template>

<script>
import { XNumber, XInput, Group, XButton } from 'vux'
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import { getAgentBar, updateRate } from '@/api/'
import logo from '../assets/logo.png'
import VueQr from 'vue-qr'
// import bpDialog from '@/components/bpDialog.vue'
export default {
  name: 'AgentBarInfo',
  components: {
    XNumber,
    XInput,
    Group,
    XButton,
    BusinessAgentTop,
    VueQr
  },
  data () {
    return {
      logo: logo,
      maskVisible: false,
      dialogVisible: false,
      barInfo: {},
      size: 200,
      mePercent: 25,
      url: window.location.href.replace('AgentBarInfo', 'BindManage')
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '代理管理'
    next()
  },
  created () {
    getAgentBar({ht_id: this.$route.params.id}).then((res) => {
      res.result.users_separate = Number(res.result.users_separate)
      res.result.ht_separate = Number(res.result.ht_separate)
      res.result.yewu_separate = Number(res.result.yewu_separate)
      res.result.manage_separate = Number(res.result.manage_separate)
      res.result.company_separate = Number(res.result.company_separate)
      this.barInfo = res.result
    })
  },
  mounted () {
    var fSize = parseInt(document.documentElement.style.fontSize)
    this.size = 4 * fSize
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
      if (this.barInfo.ht_separate + this.barInfo.manage_separate + this.barInfo.yewu_separate + this.barInfo.company_separate > 100) {
        this.$vux.toast.show({
          text: '商户、代理和酒吧管理比例之和不能超过' + (100 - this.barInfo.company_separate) + '%',
          width: '20em'
        })
        return true
      } else {
        return false
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
</style>
