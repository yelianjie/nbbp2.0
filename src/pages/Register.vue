<template>
  <div class="container min-h">
    <div class="register-top">
      <img src="../assets/logo.png" class="logo">
      <p class="slogan">牛霸，互动娱乐领导品牌</p>
    </div>
    <template v-if="type == 1">
      <group>
        <x-input title="酒吧名称" name="name" placeholder="" type="text"  data-vv-as="酒吧名称" v-model="r_business.name" v-validate.initial="'required'"></x-input>
        <x-input title="手机号码" pattern="[0-9]*" name="phone" placeholder="" type="number"  data-vv-as="手机号码" v-model="r_business.phone" v-validate.initial="'required|numeric|mobile'"></x-input>
        <x-input title="推荐码" name="code" placeholder="" type="text"  data-vv-as="推荐码" v-model="r_business.code"></x-input>
      </group>
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
import { Group, XInput, XButton } from 'vux'
import { agentRegiste, registerBar } from '@/api/'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      type: 0,
      r_business: {
        name: '',
        phone: '',
        code: ''
      },
      r_agent: {
        name: '',
        phone: ''
      },
      loading: false
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
    })
  },
  created () {
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
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
            }).catch(() => {
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
            }).catch(() => {
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
    XButton
  }
}
</script>

<style lang="less" scoped>
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

</style>

