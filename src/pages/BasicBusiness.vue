<template>
  <div class="container min-h">
    <div class="inner">
      <div class="top flex flex-v flex-align-center">
        <upload name="upload-logo" @on-preview="logoUploadPreview" class="pr">
          <img :src="form.logo ? form.logo : defaultLogo">
          <label for="upload-logo" class="n-label"></label>
        </upload>
        
        <p>酒吧logo，将展示在二维码、酒吧首页上</p>
      </div>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input title="昵&emsp;&emsp;称"></x-input>
        <cell title="酒吧地址" :value="form.address" is-link value-align="left" @click.native="showMap"></cell>
      </group>
      <div class="bottom_abs">
        <x-button :gradients="['#1D62F0', '#1D62F0']" link="/">保存</x-button>
      </div>
      <transition name="slide-fade">
        <iframe src="" id="iframe" frameborder="0" v-show="mapVisible" allowTransparency="true" style="background-color:#fff;"></iframe>
      </transition>
    </div>
  </div>
</template>

<script>
import { XInput, Group, Cell, XButton } from 'vux'
import Upload from '../components/Upload'
import defaultLogo from '../assets/logo.png'
export default {
  name: 'BasicBusiness',
  components: {
    XInput,
    Group,
    Cell,
    XButton,
    Upload
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏商户管理-基础信息'
    next()
  },
  data () {
    return {
      mapVisible: false,
      mapLoad: false,
      defaultLogo: defaultLogo,
      form: {
        logo: '',
        address: ''
      }
    }
  },
  mounted () {
    document.getElementById('iframe').style.width = window.innerWidth + 'px'
    document.getElementById('iframe').style.height = window.innerHeight + 'px'
    window.addEventListener('message', this.onSelectAddress, false)
  },
  beforeDestroy () {
    window.removeEventListener('message', this.onSelectAddress, false)
  },
  methods: {
    logoUploadPreview (base64) {
      console.log(base64)
      this.form.logo = base64
    },
    onSelectAddress (e) {
      if (!e.data.type) {
        this.form = Object.assign({}, this.form, JSON.parse(e.data))
        this.mapVisible = false
        console.log(e.data)
      }
    },
    showMap () {
      this.mapVisible = true
      if (this.mapLoad) {
        return
      }
      setTimeout(() => {
        document.getElementById('iframe').src = '/dist/map/index.html'
        this.mapLoad = true
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>

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
#iframe {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>
