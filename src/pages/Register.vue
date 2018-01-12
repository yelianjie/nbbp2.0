<template>
  <div class="container min-h">
    <div class="register-top">
      <img src="../assets/logo.png" class="logo">
      <p class="slogan">牛霸，互动娱乐领导品牌</p>
    </div>
    <template v-if="type == 1">
      <group>
        <x-input title="酒吧名称" name="barname" placeholder="" type="text"  data-vv-as="酒吧名称" v-model="r_business.baranme" v-validate.initial="'required'"></x-input>
        <x-input title="手机号码" name="mobile" placeholder="" type="number"  data-vv-as="手机号码" v-model="r_business.mobile" v-validate.initial="'required|numeric|min:11|max:11'"></x-input>
        <x-input title="推荐人" name="mobile" placeholder="" type="text"  data-vv-as="推荐人" v-model="r_business.recommender" v-validate.initial="'required'"></x-input>
      </group>
    </template>
    <template v-if="type == 2">
      <group>
        <x-input title="用户名" name="agentname" placeholder="" type="text" data-vv-as="用户名" v-model="r_agent.username" v-validate.initial="'required'"></x-input>
        <x-input title="手机号码" name="mobile" placeholder="" type="number" data-vv-as="手机号码" v-model="r_agent.mobile" v-validate.initial="'required|numeric'"></x-input>
      </group>
    </template>
    <div class="footer-btn">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="SubmitRegister">立即注册</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
export default {
  name: 'Register',
  data () {
    return {
      type: 0,
      r_business: {
        baranme: '',
        mobile: '',
        recommender: ''
      },
      r_agent: {
        username: '',
        mobile: ''
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.query.type === 1) {
      document.title = '牛霸商户入驻'
    } else if (to.query.type === 2) {
      document.title = '牛霸代理入驻'
    }
    next(vm => {
      vm.type = to.query.type ? to.query.type : 0
    })
  },
  mounted () {

  },
  methods: {
    SubmitRegister () {
      this.$validator.validateAll().then(result => {
        console.log(result)
        let getErrors = this.vErrors.all()
        if (getErrors.length > 0) {
          this.$vux.toast.show({
            text: getErrors[0],
            position: 'bottom',
            type: 'text',
            time: 1500,
            width: '10em'
          })
          console.log(getErrors[0])
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>

