<template>
  <div class="container padding-bottom-btn">
    <div class="top flex flex-v flex-align-center fff">
      <img src="../assets/logo.png">
      <p>酒吧logo，将展示在二维码、酒吧首页上</p>
    </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="酒吧名称" readonly value="牛霸酒吧" :should-toast-error="false"></x-input>
      <x-input title="酒吧地址" readonly value="浙江省宁波市鄞州区首南街道777号" :should-toast-error="false"></x-input>
    </group>
    <div class="percent-divide fff">
      <p class="set-title">分成比例设置</p>
      <div class="flex flex-h percent-box">
        <div class="percent-item">
          <p class="percent-title">用户比例<span class="small-tip">（此项含用户分成的项目才生效）</span></p>
          <x-number :value="50" fillable align="left"></x-number>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item flex-1">
          <p class="percent-title">商户比例</p>
          <x-number :value="50" fillable align="left"></x-number>
        </div>
        <div class="percent-item  flex-1">
          <p class="percent-title">代理比例</p>
          <x-number :value="50" fillable align="left"></x-number>
        </div>
      </div>
      <div class="flex flex-h percent-box">
        <div class="percent-item">
          <p class="percent-title">酒吧管理</p>
          <x-number :value="50" fillable align="left"></x-number>
        </div>
      </div>
    </div>
    <div class="percent-divide fff">
      <p class="set-title">绑定二维码</p>
      <div class="bindif">
        <x-button :gradients="['#1D62F0', '#1D62F0']" mini @click.native="maskVisible = true">去绑定</x-button>
      </div>
    </div>
    <div class="bottom_fix">
      <x-button :gradients="['#1D62F0', '#1D62F0']" link="/">保存</x-button>
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
// import bpDialog from '@/components/bpDialog.vue'
export default {
  name: 'AgentBarInfo',
  components: {
    XNumber,
    XInput,
    Group,
    XButton
  },
  data () {
    return {
      maskVisible: false,
      dialogVisible: false
    }
  },
  mounted () {
  },
  watch: {
    maskVisible (newVal, oldVal) {
      if (newVal) {
        document.documentElement.classList.add('noscroll')
      } else {
        document.documentElement.classList.remove('noscroll')
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
  padding: 0 15px 10px;
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
