<template>
  <div class="container">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="姓&emsp;&emsp;名" data-vv-as="姓名" v-model="info.name" v-validate.initial="'required'" :disabled="isHasBind"></x-input>
      <x-input title="联系电话" data-vv-as="联系电话" v-model.number="info.phone" type="number" :max="11"  v-validate.initial="'required|numeric|mobile'"></x-input>
      <x-input title="绑定酒吧" v-model="info.barname" :disabled="true"></x-input>
      <div class="submit-btn">
        <x-button :gradients="['#1D62F0', '#1D62F0']" @click.native="bindAction" :show-loading="loading" :disabled="loading">确认绑定</x-button>
      </div> 
    </group>
    <p class="t1">说明：</p>
    <p class="t2">绑定酒吧管理员后，只有系统管理员才能更改。</p>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
import { getBarInfo, bindBarManager, isSupervise } from '@/api/'
export default {
  data () {
    return {
      info: {
        name: '',
        phone: '',
        barname: 'CMK酒吧'
      },
      loading: false,
      isHasBind: false
    }
  },
  components: {
    Group,
    XInput,
    XButton
  },
  created () {
    isSupervise().then((res) => {
      var o = {}
      if (res.result) {
        this.isHasBind = true
        o = res.result
      }
      this.info = Object.assign({}, this.info, o)
    })
    getBarInfo({ht_id: this.$route.query.id}).then((res) => {
      this.info.barname = res.result.name
    })
  },
  beforeRouteEnter (to, from, next) {
    document.title = '酒吧管理绑定'
    next()
  },
  methods: {
    bindAction () {
      this.$validator.validateAll().then(result => {
        let getErrors = this.vErrors.all()
        if (getErrors.length > 0) {
          this.$vux.toast.show({
            text: getErrors[0],
            width: '10em'
          })
        } else {
          this.loading = true
          bindBarManager({ht_id: this.$route.query.id, name: this.info.name, phone: this.info.phone}).then((res) => {
            this.$vux.toast.show({
              text: '绑定成功',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.replace({path: '/UserCenter'})
            }, 500)
          }).finally(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  /deep/ .vux-no-group-title {
    margin: 0;
  }
  .submit-btn {
    width: 80%;
    margin: 15px auto;
  }
  .t1 {
    font-size: 14px;
    color: #666;
    margin: 10px 20px;
  }
  .t2 {
    font-size: 14px;
    color: #666;
    padding: 10px;
    margin: 10px 20px;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(183,183,183,0.5);
  }
}
</style>
