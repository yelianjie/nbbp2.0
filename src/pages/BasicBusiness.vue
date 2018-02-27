<template>
  <div class="container min-h">
    <div class="inner">
      <div class="top flex flex-v flex-align-center">
        <upload name="upload-logo" @on-clip="afterClip" :limitSize="400" class="pr" :is-crop="true" :isFlag="1" >
          <img :src="$options.filters.prefixImageUrl(showLogo)" class="circle" v-if="showLogo">
          <img v-else :src="defaultLogo" />
          <label for="upload-logo" class="n-label"></label>
        </upload>
        
        <p>酒吧logo，将展示在二维码、酒吧首页上</p>
      </div>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input title="昵&emsp;&emsp;称" v-model="form.name"></x-input>
        <cell title="酒吧地址" :value="form.address" is-link value-align="left" @click.native="showMap"></cell>
      </group>
      <div class="bottom_abs">
        <x-button :gradients="['#1D62F0', '#1D62F0']" @click.native="updateInfo" :show-loading="loading">保存</x-button>
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
import { updateBarInfo, getBarInfo } from '@/api/'
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
    document.title = '基础信息'
    next()
  },
  data () {
    return {
      mapVisible: false,
      mapLoad: false,
      defaultLogo: defaultLogo,
      showLogo: '',
      loading: false,
      form: {
        id: this.$route.params.id ? this.$route.params.id : '',
        name: '',
        logo: '',
        address: '',
        locationLng: '',
        locationLat: '',
        province_name: '',
        city_name: '',
        area_name: ''
      }
    }
  },
  created () {
    getBarInfo({ht_id: this.$route.params.id}).then((res) => {
      this.form = res.result
      this.showLogo = res.result.logo
    })
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
    updateInfo () {
      if (this.form.name === '') {
        this.$vux.toast.show({
          text: '酒吧名称不能为空'
        })
        return
      }
      this.loading = true
      updateBarInfo(this.form).then((res) => {
        this.$vux.toast.show({
          text: '修改成功'
        })
      }).finally(() => {
        this.loading = false
      })
    },
    afterClip (base64) {
      this.form.logo = base64
      this.showLogo = base64
    },
    onSelectAddress (e) {
      if (!e.data.type) {
        const res = JSON.parse(e.data)
        const o = {
          address: res.address,
          locationLng: res.point.lng,
          locationLat: res.point.lat,
          province_name: res.addressComponents.province,
          city_name: res.addressComponents.city,
          area_name: res.addressComponents.district
        }
        this.form = Object.assign({}, this.form, o)
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
        // /dist/map/index.html
        document.getElementById('iframe').src = process.env.NODE_ENV === 'production' ? './map/index.html' : '/dist/map/index.html'
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
