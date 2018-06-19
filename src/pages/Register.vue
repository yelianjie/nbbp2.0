<template>
  <div class="container min-h">
    <div class="register-top">
      <img src="../assets/logo.png" class="logo">
      <p class="slogan">牛霸，互动娱乐领导品牌</p>
    </div>
    <template v-if="type == 1">
      <group>
        <x-input title="商户名称" name="name" placeholder="" type="text"  data-vv-as="商户名称" v-model="r_business.name" v-validate.initial="'required'"></x-input>
        <cell title="商户地址" :value="r_business.address" is-link value-align="left" @click.native="showMap"></cell>
        <x-input title="商户地址" name="address" placeholder="" type="text"  data-vv-as="商户地址" v-model="r_business.address" v-validate.initial="'required'" style="display: none;"></x-input>
        <x-input title="手机号码" pattern="[0-9]*" name="phone" placeholder="" type="number"  data-vv-as="手机号码" v-model="r_business.phone" v-validate.initial="'required|numeric|mobile'"></x-input>
        <x-input title="推荐码" :disabled="code ? true : false" name="code" placeholder="" type="text"  data-vv-as="推荐码" v-model="r_business.code"></x-input>
      </group>
      <transition name="slide-fade">
        <iframe src="" id="iframe" frameborder="0" v-show="mapVisible" allowTransparency="true" style="background-color:#fff;"></iframe>
      </transition>
    </template>
    <template v-if="type == 2">
      <group>
        <x-input title="用户名" name="agentname" placeholder="" type="text" data-vv-as="用户名" v-model="r_agent.name" v-validate.initial="'required'"></x-input>
        <x-input title="手机号码" pattern="[0-9]*" name="mobile" placeholder="" type="number" data-vv-as="手机号码" v-model="r_agent.phone" v-validate.initial="'required|numeric|mobile'"></x-input>
      </group>
    </template>
    <div class="footer-btn">
      <x-button :gradients="['#1D62F0', '#67b8f5']" @click.native="SubmitRegister" :disabled="loading" :show-loading="loading">立即注册</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton, Cell } from 'vux'
import { agentRegiste, registerBar } from '@/api/'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      type: 0,
      mapVisible: false,
      r_business: {
        name: '',
        phone: '',
        code: ''
      },
      r_agent: {
        name: '',
        phone: ''
      },
      loading: false,
      code: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    if (Number(to.query.type) === 1) {
      document.title = '牛霸商户入驻'
    } else if (Number(to.query.type) === 2) {
      document.title = '牛霸代理入驻'
    }
    next(vm => {
      vm.type = to.query.type ? to.query.type : 0
      var code = to.query.code ? to.query.code.toString() : ''
      if (code && code !== '') {
        // code = code.replace(/\,/g, '').replace(/\s/g, '')
        vm.code = code
        vm.r_business.code = code
      }
      vm.$nextTick(() => {
        document.getElementById('iframe').style.width = '100%'
        document.getElementById('iframe').style.height = '100%'
        // document.getElementById('iframe').style.width = window.innerWidth + 'px'
        // document.getElementById('iframe').style.height = window.innerHeight + 'px'
        window.addEventListener('message', vm.onSelectAddress, false)
      })
    })
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
    window.removeEventListener('message', this.onSelectAddress, false)
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
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
    },
    onSelectAddress (e) {
      if (!e.data.type) {
        const res = JSON.parse(e.data)
        const o = {
          address: res.addressComponents.street ? res.addressComponents.street + res.addressComponents.streetNumber : res.address,
          locationLng: res.point.lng,
          locationLat: res.point.lat,
          province_name: res.addressComponents.province,
          city_name: res.addressComponents.city,
          area_name: res.addressComponents.district
        }
        this.r_business = Object.assign({}, this.r_business, o)
        this.mapVisible = false
      }
    },
    SubmitRegister () {
      this.$validator.validateAll().then(result => {
        let getErrors = this.vErrors.all()
        if (getErrors.length > 0) {
          this.$vux.toast.show({
            text: getErrors[0],
            width: '10em'
          })
        } else {
          this.loading = true
          if (Number(this.type) === 1) {
            // 商户注册
            registerBar(this.r_business).then((res) => {
              this.getUserInfo().then((res) => {
                this.$vux.toast.show({
                  text: '注册成功'
                })
                setTimeout(() => {
                  this.$vux.toast.hide()
                  this.$router.push('/MyBars')
                }, 800)
              })
            }).finally(() => {
              this.loading = false
            })
          } else {
            // 代理注册
            agentRegiste(this.r_agent).then((res) => {
              this.getUserInfo().then((res) => {
                this.$vux.toast.show({
                  text: '注册成功'
                })
                setTimeout(() => {
                  this.$vux.toast.hide()
                  this.$router.push('/AgentCenter')
                }, 800)
              })
            }).finally(() => {
              this.loading = false
            })
          }
        }
      })
    }
  },
  components: {
    Group,
    XInput,
    XButton,
    Cell
  }
}
</script>

<style lang="less" scoped>
.container /deep/ .vux-label {
  width: 5em;
}
.register-top {
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 60px;
    height: 60px;
  }
  .slogan {
    margin-top: 10px;
    font-size: 16px;
  }
}
.footer-btn {
  margin: 30px 10px 0;
  /* position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; */
}
.vux-x-input.disabled {
  color: rgba(0, 0, 0, 0.5);
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

