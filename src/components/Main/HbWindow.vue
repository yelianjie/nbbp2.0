<template>
  <div>
    <x-dialog v-model="hbWindowVisible" @on-hide="hbWindowClose" :mask-z-index="498" :dialog-style="{'z-index': '499', 'padding-top': '0.8rem', 'max-width': '100%', width: '100%', 'background-color': 'transparent', 'text-align': 'left'}" data-vv-scope="hbInputForm">
    <div class="hb-send-window pr">
      <img :src="userInfo.headimgurl | prefixImageUrl" class="circle hb-u-avatar"/>
      <h3 class="hb-send-user pr line1 fff-bp f18">金主 {{userInfo.nickname}}</h3>
      <p class="hb-text-tip f13">
        点击切换为
        <template v-if="hongbao.pay_type == 2">
          <a style="color:#ffed2e;margin:0 4px;" @click.prevent="hongbao.pay_type = 1">牛角红包</a>
        </template>
        <template v-if="hongbao.pay_type == 1">
          <a style="color:#ffed2e;margin:0 4px;" @click.prevent="hongbao.pay_type = 2">现金红包</a>
        </template>
      </p>
      <div class="hb-input-box flex flex-align-center" style="margin-bottom: 0.1rem;">
        <div class="hb-input-icon"></div>
        <div class="hb-input-label">总金额</div>
        <div class="hb-input-wrap flex-1">
          <input type="number" pattern="[0-9]*" class="hb-input f16 tr" data-vv-as="红包金额" v-validate.initial="'required|numeric'" @input="validZero" v-model="hongbao.money"/>
          <!-- <input type="text" class="hb-input f16 tr" data-vv-as="红包金额" v-validate.initial="'required'" v-model="hongbao.money"/> -->
        </div>
        <div class="hb-input-label-unit">
          <template v-if="hongbao.pay_type == 1">
            牛角
          </template>
          <template v-if="hongbao.pay_type == 2">
            元
          </template>
        </div>
      </div>
      <p class="hb-text-tip f13" style="margin: 0px 0 10px;">大于等于20元将在大屏幕上显示</p>
      <div class="hb-input-box flex flex-align-center">
        <div class="hb-input-label">个数</div>
        <div class="hb-input-wrap flex-1">
          <input type="number" pattern="[0-9]*" class="hb-input f16 tr" data-vv-as="红包个数" v-validate.initial="'required|numeric'" v-model="hongbao.amount" @input="validCount"/>
        </div>
        <div class="hb-input-label-unit">个</div>
      </div>
      <!-- <div class="hb-input-box flex flex-align-center">
        <input type="text" readonly placeholder="谁可以抢" class="hb-input"/>
        <div class="hb-arrow"><svg-icon icon-class="arrow-down"/></div>
      </div> -->
      <div class="hb-input-box flex flex-align-center">
        <input type="text" :placeholder="hongbaoMes[0][0]" class="hb-input" maxlength="15" v-model="hongbao.content"/>
        <div class="hb-hid">
          <popup-picker :data="hongbaoMes" v-model="hongbao.message" @on-change="hbMesChange" :popup-style="{'z-index': 5003}">
            <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
              <div class="hb-arrow">
              <svg-icon icon-class="arrow-down"/>
              </div>
            </template>
          </popup-picker>
        </div>
      </div>
      <p class="hb-text-tip f13">谁可以抢？</p>
      <div class="flex hb-for">
        <label for="hb_all" class="f13" @click="hbForWhoChose(0)" :class="{'active' : hongbao.type == 0}">全场</label>
        <label for="hb_male" class="f13" @click="hbForWhoChose(2)" :class="{'active' : hongbao.type == 2}">男士</label>
        <label for="hb_female" class="f13" @click="hbForWhoChose(1)" :class="{'active' : hongbao.type == 1}">女士</label>
        <label for="hb_custom" class="f13" style="width:1.6rem;" @click="hbForWhoChose(3)" :class="{'active' : hongbao.type == 3}">
        <template v-if="onlineHbChose.length > 0">
          已选&nbsp;({{onlineHbChose.length}})
        </template>
        <template v-else>
          自定义
        </template>
        </label>
      </div>
      <x-button id="hb-put-btn" @click.native="packet" :disabled="packetLoading" :show-loading="packetLoading">发红包</x-button>
    </div>
    <div @click="hbWindowVisible = false">
      <svg-icon icon-class="close" className="close-u-dialog-btn"/>
    </div>
  </x-dialog>
    <bp-dialog :title="'确认支付'" v-model="buyDialogVisible" @onConfirm="confirmBuy" :cancelAutoClose="buyDialogInfo.cancelAutoClose" :onCancel="buyDialogInfo.onCancel" :cancelText="buyDialogInfo.cancelText" :cancelColor="buyDialogInfo.cancelColor" :confirmText="buyDialogInfo.confirmText">
    <div class="">
      <div style="font-size: 26px;margin-bottom: 8px;">{{buyDialogInfo.price}}<svg-icon icon-class="coin" style="width:0.32rem;fill: #fdc635;margin-left:2px;vertical-align: bottom;"/></div>
      <template v-if="userInfo.is_recharge">
      <p style="color: #88878f;"><svg-icon icon-class="tip" style="margin-top:-2px;margin-right:2px;" />当前余额可用：<svg-icon icon-class="coin"  style="margin-top:-2px;margin-right:2px;"/>{{userInfo.balance}}</p>
      <p class="f13" v-if="buyDialogInfo.isCharge" style="color:#8bc5ec;margin-top:6px;">余额不足，请充值</p>
      </template>
      <template v-else>
        <p class="f13">选择购买充值即可成为牛霸会员贵族</p>
        <p class="f13">全平台永久享受贵族特权</p>
      </template>
    </div>
  </bp-dialog>
  </div>
</template>

<script>
import { XDialog, PopupPicker, XButton } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import { createHb } from '@/api/'
import BpDialog from '../bpDialog'
export default {
  components: {
    XDialog,
    PopupPicker,
    XButton,
    BpDialog
  },
  model: {
    prop: 'visible',
    event: 'setVisible'
  },
  props: ['visible'],
  data () {
    return {
      hongbaoMes: [['有钱任性，大家快抢啊！', '红包驾到，手慢无！', '红包给最可爱的你！', '给大家助兴，玩得开心~', '全场美女专属，约起来！']],
      hbWindowVisible: false,
      packetLoading: false,
      buyDialogVisible: false,
      hongbao: {
        ht_id: this.$route.params.id,
        message: ['有钱任性，大家快抢啊！'],
        content: '',
        pay_type: 2, // 2 现金 1 牛角,
        money: 20,
        amount: 10,
        auth_uid_str: '',
        type: 0 // 0 全场 2 男士 1 女士 3 自定义
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$store.commit('app/SET_FIELD', {field: 'hbmount', value: 50})
      this.hbWindowVisible = true
    })
  },
  watch: {
    'hongbao.amount' (newVal, oldVal) {
      this.$store.commit('app/SET_FIELD', {field: 'hbmount', value: newVal})
    }
  },
  methods: {
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    hbWindowClose () {
      this.$store.commit('app/SET_ONLINESELECTED', [])
      this.$emit('onClose')
      setTimeout(() => {
        this.$emit('setVisible', false)
      }, 350)
    },
    hbForWhoChose (v) {
      this.hongbao.type = v
      if (v === 3) {
        this.$parent.onlineVisible = true
        this.$store.commit('app/SET_FIELD', {field: 'scene', value: 'hongbao'})
      }
    },
    hbMesChange (v) {
      this.hongbao.content = v.join('')
    },
    validZero () {
      if (/^0/.test(event.target.value)) {
        this.hongbao.money = ''
      }
    },
    validCount () {
      if (/^0/.test(event.target.value)) {
        this.hongbao.amount = ''
      } else {
        if (~~(event.target.value > 100)) {
          this.hongbao.amount = 100
        }
      }
    },
    packet () {
      var _self = this
      if (~~(this.hongbao.money) < 2) {
        this.$vux.toast.show({
          text: '红包金额最小2元',
          width: '10em'
        })
        return false
      }
      this.$validator.validateAll('hbInputForm').then(result => {
        let getErrors = this.vErrors.all()
        if (getErrors.length > 0) {
          this.$vux.toast.show({
            text: getErrors[0],
            width: '10em'
          })
          return false
        } else {
          if (~~(this.hongbao.type) === 3 && this.onlineHbChose.length === 0) {
            this.$vux.toast.show({
              text: '请选择接受红包的用户',
              width: '15em'
            })
            return false
          }
          if (~~(this.hongbao.type) === 3 && ~~(this.hongbao.amount) > this.onlineHbChose.length) {
            this.$vux.toast.show({
              text: '红包个数和自定义个数不等',
              width: '15em'
            })
            return false
          }
          if (this.hongbao.pay_type === 2) {
            var _params = {}
            if (!this.hongbao.content) {
              _params = Object.assign({}, this.hongbao, {content: this.hongbaoMes[0][0]})
            } else {
              _params = Object.assign({}, this.hongbao, {})
            }
            _params.auth_uid_str = this.onlineHbChose.join(',')
            this.packetLoading = true
            // 调起微信支付 现金红包
            createHb(_params).then((res) => {
              window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
                _self.packetLoading = false
                switch (res.err_msg) {
                  case 'get_brand_wcpay_request:cancel':
                    // alert('用户取消支付！')
                    break
                  case 'get_brand_wcpay_request:fail':
                    _self.$vux.toast.show({
                      text: '支付失败！（' + res.err_desc + '）',
                      width: '10em'
                    })
                    break
                  case 'get_brand_wcpay_request:ok':
                    // 支付成功关闭红包
                    _self.hbWindowVisible = false
                    break
                  default:
                    alert(JSON.stringify(res))
                    break
                }
              })
            }).catch(() => {
              this.packetLoading = false
            })
          } else {
            // 余额红包
            this.payBus = 2
            // commit buyDialogInfo
            let isCharge = Number(this.hongbao.money) > Number(this.userInfo.balance)
            var params = {
              extraInfo: {title: '塞红包'},
              price: this.hongbao.money,
              isCharge: isCharge,
              confirmText: isCharge ? '充值购买' : '确定'
            }
            if (!this.userInfo.is_recharge) {
              // 充过值显示取消 没冲过显示立即支付
              var extraParams = {
                cancelText: '立即支付',
                onCancel: (cb) => {
                  this.hongbao.pay_type = 2
                  this.packet()
                },
                cancelAutoClose: false
              }
              params = Object.assign({}, params, extraParams)
            }
            this.ChangeBuyDialogInfo(params)
            this.buyDialogVisible = true
          }
        }
      })
    },
    confirmBuy () {
      if (this.buyDialogInfo.isCharge) {
        // 需要充值跳转充值页
        // 在当前页购买
        /* localStorage.setItem('buyDialogInfo', JSON.stringify(this.buyDialogInfo))
        localStorage.setItem('currentUserInfo', JSON.stringify(this.currentUserInfo))
        localStorage.setItem('payBack', '1')
        this.$router.push('/Charge') */
        this.buyDialogVisible = false
        this.$parent.chargeShow()
        this.$store.commit('app/SET_FIELD', {field: 'order_no', value: ''})
        this.$store.commit('app/SET_FIELD', {field: 'buyComponetName', value: 'hbRef'})
        this.$store.commit('app/SET_FIELD', {field: 'sourceType', value: 3})
        // window.location.href = window.location.origin + window.location.pathname + '#/Charge'
      } else {
        // 直接购买
        // 判断是红包
        var _params = {}

        if (!this.hongbao.content) {
          _params = Object.assign(this.hongbao, {content: this.hongbaoMes[0][0]})
        } else {
          _params = Object.assign(this.hongbao, {})
        }
        _params.auth_uid_str = this.onlineHbChose.join(',')
        createHb({..._params, order_no: this.$store.state.app.order_no}).then((res) => {
          this.$store.commit('app/SET_FIELD', {field: 'order_no', value: ''})
          this.$store.commit('user/SET_USER_INFO_BALANCE', res.result.balance)
          this.$vux.toast.show({
            text: '红包已生成',
            width: '10em'
          })
          this.buyDialogVisible = false
          this.$parent.chargeVisible = false
          this.hbWindowVisible = false
          if (this.$parent.chargeFlag) {
            // 确定是要充值过程的 显示提示充值后的dialog
            this.$parent.buySuccessDialogVisible = true
            this.$parent.chargeFlag = false
          }
        })
      }
    }
  },
  computed: {
    ...mapGetters('app', {
      currentUserInfo: 'currentUserInfo',
      onlineHbChose: 'onlineHbChose',
      buyDialogInfo: 'buyDialogInfo'
    }),
    ...mapGetters('user', {
      userInfo: 'userInfo'
    })
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../styles/global.less';
.hb-send-window {
  width: 5.9rem;
  padding: 0.2rem 0.4rem 0.4rem;
  margin: 0 auto;
  background-image: linear-gradient(top, #e92e41, #fa5b41);
  box-sizing: border-box;
  border-radius: 20px;
}
.hb-text-tip {
  color: rgba(255, 255, 255, 0.7);
}
.hb-input-box {
  margin-bottom: 0.3rem;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
}
.hb-input {
  background-color: #fff;
  border: 0;
  outline: none;
  display: block;
  padding: 2px 0;
  width: 100%;
  height: 20px;
  font-size: 16px;
  -webkit-appearance: none;
  &.tr {
    text-align: right;
  }
  &::-webkit-input-placeholder{
    font-size: 16px;
  }
}
.hb-input-wrap {
  margin-left: 4px;
  margin-right: 4px;
}
.hb-text-tip {
  margin: 10px 0 5px;
}
.hb-input-label {
  color: #1d1d1d;
}
.hb-input-label-unit {
  color: #b2b2b2;
}
.hb-for {
  justify-content: space-between;
  margin-bottom: 0.3rem;
  label {
    display: block;
    width: 0.9rem;
    text-align: center;
    padding: 5px 0;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    position: relative;
    &.active {
      color: #ffed2e;
      border: 1px solid #ffed2e;
      .selected-icon {
        display: block;
      }
    }
  }
}
.hb-send-user {
  padding-left: 1.6rem;
}
.hb-u-avatar {
  position: absolute;
  left: 0.4rem;
  top: -0.8rem;
  width: 1.4rem;
  height: 1.4rem;
  border: 4px solid #e92e41;
}
.hb-arrow {
  color: #b2b2b2;
  padding-left: 10px;
  position: relative;
  &::before {
    content: "";
    .setLeftLine(#b2b2b2, 0);
  }
}
.hb-hid /deep/ .vux-popup-picker-select,
.hb-hid /deep/ .weui-cell__ft {
  display: none;
}
.hb-hid /deep/ .weui-cell  {
  padding: 0;
}
.close-u-dialog-btn.svg-icon {
  width: 0.7rem;
  height: 0.7rem;
  box-sizing: content-box;
  display: block;
  margin: 0.5rem auto;
}
#hb-put-btn {
  background-color: #ffed2e;
  color: #e2404f;
  border-radius: 25px;
}
</style>
