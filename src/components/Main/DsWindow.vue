<template>
  <div class="window-pop" v-fixscroll="'.ds-gift-container'">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="ds-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close" @click.native="closeWindow"/></span>
        <div class="window-top">
          <p class="window-title f14 flex flex-align-center" v-if="currentUserInfo.hasOwnProperty('initiator_mc_id')">为<img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl"  class="for-who circle"/>{{currentUserInfo.initiator_nickname}}送礼</p>
          <p class="window-title f14 flex flex-align-center" style="line-height:0.64rem;" v-else>为全场观众送礼</p>
        </div>
        <div class="window-middle">
          <div class="ds-person-container">
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="ds-gift-container">
            <swiper :options="swiperDsGiftOption">
              <swiper-slide v-for="(v, i) in gifts" :key="i">
                <div class="ds-gift-item borderbox ds-item" :class="{'selected': dsGiftIndex == i}" @click="dsGiftIndex != i ? dsGiftIndex = i : dsGiftIndex = -1">
                  <div class="ds-gift-selected ds-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="gift-icon ds-img"><img class="lazy-bp-img" src="../../assets/blank.gif" :data-src="$options.filters.prefixImageUrl(v.icon)"></div>
                  <div class="gift-name ds-text overflow f13">{{v.title}}</div>
                  <div class="gift-price overflow f12"><svg-icon icon-class="coin" className="coin" />{{v.price}}</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="bp-input-area flex">
            <input class="bp-input borderbox f14" maxlength="15" @focus="inputFocus" @blur="inputBlur" placeholder="请输入送礼上墙语，15字以内"  v-model="content"/>
          </div>
        </div>
        <div class="window-bottom f13 flex flex-align-center">
          <div class="account  flex-1">总计：<svg-icon icon-class="coin" className="coin" />{{total}}</div>
          <div class="repeat"><svg-icon icon-class="substract" @click.native="dsTimes == 1 ? '' : dsTimes--"/><span>{{timesDsText}}</span><svg-icon icon-class="plus" @click.native="dsTimes == 3 ? dsTimes = 1 : dsTimes++"/></div>
          <div class="submit"><button class="bp-button bp-submit" @click="buy">购买</button></div>
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters, mapActions } from 'vuex'
// import twemoji from '@/vendor/twemoji.npm'
// import { BASE_API } from '../../../config/prod.env'
import { iOSversion, emojiReg } from '@/utils/utils'
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  data () {
    return {
      inputTimer: null,
      scroll: null,
      dsTimes: 1,
      dsGiftIndex: -1,
      content: '',
      swiperDsGiftOption: {
        slidesPerColumn: 2,
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesPerColumnFill: 'column',
        freeMode: false,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  props: ['visible', 'gifts'],
  methods: {
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    inputBlur () {
      if (this.inputTimer) {
        clearInterval(this.inputTimer)
        this.inputTimer = null
      }
    },
    inputFocus () {
      let oc = iOSversion()
      if (oc <= 10) {
        this.inputTimer = setInterval(() => {
          document.body.scrollTop = document.body.scrollHeight
        }, 500)
      }
    },
    closeWindow () {
      this.$emit('closeWindow', false)
    },
    buy () {
      if (this.dsGiftIndex === -1) {
        this.$vux.toast.show({
          text: '请选择礼物'
        })
        return false
      }
      let isCharge = Number(this.total) > Number(this.userInfo.balance)
      var content = this.content
      if (emojiReg.test(content)) {
        content = content.replace(emojiReg, '')
      }
      if (content.length > 15) {
        this.$vux.toast.show({
          text: '文字不能超过15个',
          width: '12em'
        })
        return false
      }
      /* var content = twemoji.parse(
        this.content,
        function (icon, options, variant) {
          // return BASE_API + '/dist/emoji-apple-svg/' + icon + '.svg'
          return ''
        }
      ) */
      let postParams = {
        ht_id: this.$route.params.id,
        type: 1,
        count: this.dsTimes,
        content: content,
        gift_id: this.gifts[this.dsGiftIndex].id,
        reward_uid: this.currentUserInfo.initiator_mc_id ? this.currentUserInfo.initiator_mc_id : 0,
        img: ''
      }
      postParams = {postParams: postParams, extraInfo: {title: this.gifts[this.dsGiftIndex].title}, price: this.total, confirmText: isCharge ? '充值购买' : '确定', isCharge: isCharge}
      if (!this.userInfo.is_recharge && ~~(this.barManagerInfo.game_count) === 0) {
        // 充过值显示取消 没冲过显示立即支付
        var extraParams = {
          cancelText: '立即支付',
          onCancel: (cb) => {
            this.$emit('onWxPay', cb)
          },
          cancelAutoClose: false
        }
        postParams = Object.assign({}, postParams, extraParams)
      }
      this.ChangeBuyDialogInfo(postParams)
      this.$emit('onBuy')
    },
    reset () {
      // this.dsGiftIndex = -1
      this.content = ''
    },
    initSelected (info) {
      this.dsGiftIndex = this.gifts.findIndex((v) => ~~(v.id) === ~~(info.gift_id))
      this.dsTimes = info.count
      this.content = info.content
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    total () {
      if (this.barManagerInfo.isManager && Number(this.barManagerInfo.game_count) > 0) {
        return 0
      } else {
        const giftPrice = this.dsGiftIndex !== -1 ? Number(this.gifts[this.dsGiftIndex].price) : 0
        return Number(giftPrice * this.dsTimes).toFixed(2)
      }
    },
    timesDsText () {
      const texts = ['一', '二', '三']
      return texts[this.dsTimes - 1] + '连送礼'
    },
    ...mapGetters('app', {
      currentUserInfo: 'currentUserInfo'
    }),
    ...mapGetters('user', {
      userInfo: 'userInfo',
      barManagerInfo: 'barManagerInfo'
    })
  }

}
</script>


<style lang="less" scoped>
@import '../../styles/window.less';
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.15);
/*vendor swiper*/

#ds-model {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 300px;
  z-index: 3;
  border-radius: 15px 15px 0 0;
  background: -webkit-radial-gradient(circle closest-corner, #621653, #170127);
  background: radial-gradient(circle closest-corner at 50% 30%, #621653, #170127);
}

.ds-item {
  width: 1.5rem;
  margin: 0 0.0875rem 0.2rem;
  display: inline-block;
  position: relative;
  .ds-img {
    position: relative;
    width: 0.92rem;
    height: 1.22rem;
    margin: 0 auto;
    img {
      /* width: 1.24rem;
      height: 1.24rem; */
      width: 1.1rem;
      height: 1.1rem;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .ds-text {
    text-align: center;
    margin: 0 0 0.15rem;
  }
  .ds-selected {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    border: 1px solid @mainColor;
    border-radius: 3px;
    z-index: 1;
    display: none;
  }
  &.selected .ds-selected {
    display: block;
    .selected-icon {
      display: block;
    }
  }
}
.bp-input {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0.1rem;
  background-color: transparent;
  border: 1px solid @borderColor;
  outline: none;
  border-radius: 6px;
  color: #fff;
  display: block;
  box-sizing: content-box;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 15px;
    
  }
}

.gift-price {
  text-align: center;
  line-height: 0.24rem;
  margin-bottom: 0.15rem;
  white-space: nowrap;
}
</style>
