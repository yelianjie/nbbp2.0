<template>
  <div class="window-pop" v-fixscroll="'.bp-theme-container'">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="bp-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close" @click.native="closeWindow"/></span>
        <div class="window-top">
          <p class="window-title f14 flex flex-align-center" v-if="currentUserInfo.hasOwnProperty('initiator_mc_id')">为<img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl"  class="for-who circle"/>{{currentUserInfo.initiator_nickname}}霸屏</p>
          <p class="window-title f14 flex flex-align-center" style="line-height:0.64rem;" v-else>为全场观众霸屏</p>
        </div>
        <div class="rpxline" style="margin-bottom: 0.4rem;"></div>
        <div class="window-middle">
          <div class="bp-time-container">
            <swiper :options="swiperTimeOption">
              <swiper-slide v-for="(vv, ii) in times" :key="ii">
                <div style="text-align: left;">
                  <div class="bp-time-item" v-for="(v, i) in vv" :key="i" :class="{'selected': bpTimeIndex == i}" @click="bpTimeSelect(ii, i)">
                  <div class="time f13">{{v.time}}秒<span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="time-price overflow f12"><svg-icon icon-class="coin" className="coin" />{{v.price}}</div>
                </div>

              </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="bp-theme-container">
            <swiper :options="swiperThemeOption">
              <swiper-slide v-for="(v, i) in bpfilterList(screens)" :key="i">
                <div class="bp-theme-item borderbox" :class="{'selected': bpThemeIndex == i}" @click="bpThemeIndex != i ? bpThemeIndex = i : bpThemeIndex = -1">
                  <div class="bp-theme-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="theme-icon"><img class="lazy-bp-img" src="../../assets/blank.gif" :data-src="$options.filters.prefixImageUrl(v.icon)"></div>
                  <div class="theme-name f13 overflow">{{v.title}}</div>
                  <div class="time-price overflow f12 tc" style="margin-bottom: 0.15rem;"><svg-icon icon-class="coin" className="coin" />{{v.price}}</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="bp-input-area flex">
            <div class="bp-textarea flex-1">
              <textarea class="bp-input borderbox f14" maxlength="30" @focus="inputFocus" @blur="inputBlur" v-model="content" placeholder="请输入霸屏上墙语，30字以内"></textarea>
            </div>
            <div class="bp-upload">
              <upload name="bp-upload-img" :is-crop="true" @on-clip="afterClip" :cropRadio="0.7874" :limitSize="960">
                <div class="upload-inner borderbox flex flex-v flex-align-center flex-pack-center">
                  <svg-icon icon-class="camera"/>
                  <p class="f13">添加照片</p>
                  <label for="bp-upload-img" class="n-label" id="base64Img" :style="{'background-image':'url('+$options.filters.prefixImageUrl(base64Img)+')'}"></label>
                </div>
              </upload>
            </div>
          </div>
        </div>
        <div class="window-bottom f13 flex flex-align-center">
          <div class="account flex-1">总计：<svg-icon icon-class="coin" className="coin" />{{total}}</div>
          <div class="repeat"><svg-icon icon-class="substract" @click.native="takeTimes(0)"/><span>{{timesBpText}}</span><svg-icon icon-class="plus" @click.native="takeTimes(1)"/></div>
          <div class="submit"><button class="bp-button bp-submit" @click="goingBuy">购买</button></div>
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters, mapActions } from 'vuex'
import { prefixImageUrl, iOSversion, emojiReg } from '@/utils/utils'
import { isOpenClient } from '@/api/'
import Upload from '../Upload'
// import { BASE_API } from '../../../config/prod.env'
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  props: ['visible', 'times', 'screens'],
  data () {
    return {
      inputTimer: null,
      scroll: null,
      bpTimes: 1,
      bpTimeIndex: -1,
      bpTimeRowIndex: -1,
      bpThemeIndex: -1,
      content: '',
      swiperTimeOption: {
        slidesPerColumn: 1,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumnFill: 'row',
        freeMode: false,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperThemeOption: {
        slidesPerColumn: 1,
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesPerColumnFill: 'row',
        freeMode: false,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      base64Img: ''
    }
  },
  methods: {
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    bpTimeSelect (bpTimeRowIndex, index) {
      if (this.bpTimeIndex !== index) {
        this.bpTimeRowIndex = bpTimeRowIndex
        this.bpTimeIndex = index
        // 判断当前用户是否是管理员 如果是 判断是否还有剩余次数
        this.isTipForOverTime()
      } else {
        this.bpTimeRowIndex = -1
        this.bpTimeIndex = -1
      }
    },
    takeTimes (type) {
      if (type === 0) {
        if (this.bpTimes !== 1) {
          this.bpTimes--
          this.isTipForOverTime()
        }
      } else {
        this.bpTimes = this.bpTimes === 3 ? 1 : this.bpTimes + 1
        this.isTipForOverTime()
      }
    },
    bpfilterList (screens) {
      return screens.filter((v) => {
        return v.title !== '重金霸屏'
      })
    },
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
    afterClip (base64) {
      var img = new Image()
      var src = prefixImageUrl(base64)
      img.onload = () => {
        this.base64Img = base64
        setTimeout(() => {
          window.URL.revokeObjectURL(img.src)
        }, 100)
      }
      img.src = src
    },
    goingBuy () {
      isOpenClient({ht_id: this.$route.params.id}).then((res) => {
        if (res.result === 'ok') {
          this.buy()
        } else {
          this.$vux.toast.show({
            text: '酒吧大屏未开启，不能霸屏',
            width: '15em'
          })
          return false
        }
      })
    },
    buy () {
      if (this.bpTimeIndex === -1) {
        this.$vux.toast.show({
          text: '请选择霸屏时间'
        })
        return false
      }
      /* if (this.bpThemeIndex === -1) {
        this.$vux.toast.show({
          text: '请选择霸屏主题'
        })
        return false
      } */
      if (this.content === '') {
        this.$vux.toast.show({
          text: '请输入文字'
        })
        return false
      }
      if (this.bpThemeIndex === -1) {
        var isHasTextTheme = this.screens.findIndex((v) => v.title === '重金霸屏')
        this.bpThemeIndex = isHasTextTheme
      }
      let isCharge = Number(this.total) > Number(this.userInfo.balance)
      var content = this.content
      if (emojiReg.test(content)) {
        content = content.replace(emojiReg, '')
      }
      if (content.length > 30) {
        this.$vux.toast.show({
          text: '文字不能超过30个',
          width: '12em'
        })
        return false
      }
      /* var content = twemoji.parse(
        this.content,
        function (icon, options, variant) {
          // return BASE_API + '/dist/emoji-apple-svg/' + icon + '.svg'
          return '1'
        }
      ) */
      let postParams = {
        ht_id: this.$route.params.id,
        type: 2,
        screen_id: this.bpThemeIndex === -1 ? 0 : this.screens[this.bpThemeIndex].id,
        time_id: this.times[this.bpTimeIndex].id,
        count: this.bpTimes,
        content: content,
        img: this.base64Img,
        reward_uid: this.currentUserInfo.initiator_mc_id ? this.currentUserInfo.initiator_mc_id : ''
      }
      postParams = {postParams: postParams, extraInfo: {title: this.screens[this.bpThemeIndex].title}, price: this.total, confirmText: isCharge ? '充值购买' : '确定', isCharge: isCharge}
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
      // this.bpThemeIndex = -1
      // this.bpTimeIndex = -1
      this.content = ''
      this.base64Img = ''
    },
    initSelected (info) {
      this.bpTimeIndex = this.times.findIndex((v) => ~~(v.id) === ~~(info.time_id))
      this.bpThemeIndex = this.screens.findIndex((v) => ~~(v.id) === ~~(info.screen_id))
      console.log(this.bpTimeIndex, this.bpThemeIndex)
      this.bpTimes = info.count
      this.content = info.content
      this.base64Img = info.img
    },
    isTipForOverTime () {
      if (this.barManagerInfo.isManager && Number(this.barManagerInfo.game_count) !== 0 && (this.times[this.bpTimeIndex].time * this.bpTimes > this.barManagerInfo.max_bp_time)) {
        this.$vux.toast.show({
          text: '单次免费霸屏不能超过' + this.barManagerInfo.max_bp_time + '秒',
          width: '14em'
        })
      }
    }
  },
  components: {
    Upload,
    swiper,
    swiperSlide
  },
  computed: {
    total () {
      if (this.barManagerInfo.isManager && Number(this.barManagerInfo.game_count) > 0 && this.bpTimeIndex > -1 && (this.times[this.bpTimeIndex].time * this.bpTimes) <= this.barManagerInfo.max_bp_time) {
        return 0
      } else {
        const timePrice = this.bpTimeIndex !== -1 ? Number(this.times[this.bpTimeIndex].price) : 0
        const themePrice = this.bpThemeIndex !== -1 ? Number(this.screens[this.bpThemeIndex].price) : 0
        return Number((timePrice + themePrice) * this.bpTimes).toFixed(2)
      }
    },
    timesBpText () {
      const texts = ['一', '二', '三']
      return texts[this.bpTimes - 1] + '连霸屏'
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

#bp-model {
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

.bp-time-container {
  .swiper-slide {
    text-align: center;
  }
  .swiper-container {
    padding: 0.15rem 0;
  }
}

.bp-time-item {
  display: inline-block;
  width: 1.5rem;
  margin-bottom: 0.3rem;
  margin: 0 0.0875rem 0.3rem;
  .time {
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border: 1px solid @borderColor;
    border-radius: 3px;
    position: relative;
  }
  &.selected {
    .time {
      border: 1px solid @mainColor;
    }
    .selected-icon {
      display: block;
    }
  }
  .time-price {
    vertical-align: middle;
    text-align: center;
    margin-top: 4px;
    white-space: nowrap;
  }
}
.bp-theme-item {
  width: 1.38rem;
  margin: 0 0.0875rem 0.2rem;
  display: inline-block;
  position: relative;
  &:nth-child(4n+4) {
    margin-right: 0;
  }
  .theme-icon {
    img {
      width: 0.92rem;
      height: 0.92rem;
      display: block;
      margin: 0.15rem auto;
    }
  }
  .theme-name {
    text-align: center;
    margin-bottom: 2px;
  }
  .bp-theme-selected {
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
  &.selected .bp-theme-selected {
    display: block;
    .selected-icon {
      display: block;
    }
  }
}
.bp-input {
  width: 100%;
  height: 1.35rem;
  resize: none;
  padding: 0.2rem;
  background-color: transparent;
  border: 1px solid @borderColor;
  outline: none;
  border-radius: 6px;
  color: #fff;
  display: block;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 15px;
    line-height: 0.95rem;
  }
}
.upload-inner {
  width: 1.4rem;
  margin-left: 0.2rem;
  height: 1.35rem;
  border: 1px solid @borderColor;
  border-radius: 6px;
  position: relative;
  .svg-icon {
    width: 0.45rem;
    height: 0.45rem;
    display: block;
  }
  p {
    color: #fff;
    margin-top: 4px;
  }
}
#base64Img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: -1px;
  top: -1px;
  bottom: -1px;
  right: -1px;
  border-radius: 6px;
}
/* @media screen and (min-width: 768px){
  .bp-time-item:nth-child(4n+4) {
    margin-right: 0.7rem;
  }
} */
/* .base64-img {
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

</style>
