<template>
  <div class="container padding-bottom-btn borderbox">
    <BusinessAgentTop :name="barInfo.name" :logo="barInfo.logo | prefixImageUrl" :currentMoney="barInfo.agent_balance" :totalMoney="barInfo.agent_income"></BusinessAgentTop>
    <div class="percent-divide fff">
      <p class="set-title">分成比例设置</p>
      <div class="flex flex-h percent-box">
        <div class="percent-item percent">
          <p class="percent-title">用户比例<span class="small-tip">（此项含用户分成的项目才生效）</span></p>
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

    <div id="maskQrcode" v-show="maskVisible" @click="maskVisible = false">
      <p>请扫描以下二维码绑定</p>
      <p>管理酒吧</p>
      <img src="http://nb.siweiquanjing.com/attachment/bar/20171227191747_227.png"/>
    </div>
    <!-- <bp-dialog :visible="dialogVisible"></bp-dialog> -->
</div>
</template>

<script>
import { XNumber, XInput, Group, XButton } from 'vux'
import BusinessAgentTop from '@/components/Center/BusinessAgentTop'
import { getAgentBar, updateRate } from '@/api/'
// import bpDialog from '@/components/bpDialog.vue'
export default {
  name: 'AgentBarInfo',
  components: {
    XNumber,
    XInput,
    Group,
    XButton,
    BusinessAgentTop
  },
  data () {
    return {
      maskVisible: false,
      dialogVisible: false,
      barInfo: {},
      mePercent: 25
    }
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
          width: '12em'
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
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 12px;
  }
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
.small-tip {
  font-size: 12px;
}
.bindif {
  padding: 10px 0;
}
#maskQrcode {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, .75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    font-size: 14px;
  }
  img {
    margin-top: 10px;
    width: 160px;
    height: 160px;
    display: block;
  }
}
</style>
