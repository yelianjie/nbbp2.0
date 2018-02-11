<template>
  <div class="window-pop">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="bp-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close" @click.native="closeWindow"/></span>
        <div class="window-top">
          <p class="window-title f14 flex flex-align-center" v-if="currentUserInfo.hasOwnProperty('uid')">为<img :src="currentUserInfo.headImg | prefixImageUrl"  class="for-who circle"/>{{currentUserInfo.nickname}}霸屏</p>
          <p class="window-title f14 flex flex-align-center" style="line-height:0.64rem;" v-else>为全场观众霸屏</p>
        </div>
        <div class="rpxline" style="margin-bottom: 0.4rem;"></div>
        <div class="window-middle">
          <div class="bp-time-container">
            <div class="bp-time-item" v-for="(v, i) in times" :key="i" :class="{'selected': bpTimeIndex == i}" @click="bpTimeIndex != i ? bpTimeIndex = i : bpTimeIndex = -1">
              <div class="time f13">{{v.time}}秒<span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
              <div class="time-price f12"><svg-icon icon-class="coin" className="coin" />{{v.price}}</div>
            </div>
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="bp-theme-container">
            <swiper :options="swiperThemeOption">
              <swiper-slide v-for="(v, i) in screens" :key="i">
                <div class="bp-theme-item borderbox" :class="{'selected': bpThemeIndex == i}" @click="bpThemeIndex != i ? bpThemeIndex = i : bpThemeIndex = -1">
                  <div class="bp-theme-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="theme-icon"><img :src="v.icon | prefixImageUrl"></div>
                  <div class="theme-name f13 overflow">{{v.title}}</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="bp-input-area flex">
            <div class="bp-textarea flex-1">
              <textarea class="bp-input borderbox" maxlength="30" v-model="content" placeholder="请输入霸屏上墙语，30字以内"></textarea>
            </div>
            <div class="bp-upload">
              <upload name="bp-upload-img" :is-crop="true" @on-clip="afterClip" :cropRadio="0.5625">
                <div class="upload-inner borderbox flex flex-v flex-align-center flex-pack-center">
                  <svg-icon icon-class="camera"/>
                  <p class="f13">添加照片</p>
                  <label for="bp-upload-img" class="n-label" id="base64Img" :style="{'background-image':'url('+$options.filters.prefixImageUrl(base64Img)+')'}"></label>
                  <!--<div class="n-label base64-img" v-show="base64Img" :style="{'background-image':'url('+base64Img+')'}"></div>-->
                </div>
              </upload>
            </div>
          </div>
        </div>
        <div class="window-bottom f13 flex flex-align-center">
          <div class="account flex-1">总计：<svg-icon icon-class="coin" className="coin" />{{total}}</div>
          <div class="repeat"><svg-icon icon-class="substract" @click.native="bpTimes == 1 ? '' : bpTimes--"/><span>{{timesBpText}}</span><svg-icon icon-class="plus" @click.native="bpTimes == 3 ? bpTimes = 1 : bpTimes++"/></div>
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
import { prefixImageUrl } from '@/utils/utils'
import Upload from '../Upload'
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  props: ['visible', 'times', 'screens'],
  data () {
    return {
      bpTimes: 1,
      bpTimeIndex: -1,
      bpThemeIndex: -1,
      content: '',
      swiperThemeOption: {
        slidesPerColumn: 2,
        slidesPerView: 4,
        slidesPerColumnFill: 'row',
        freeMode: true,
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
    buy () {
      if (this.bpTimeIndex === -1) {
        this.$vux.toast.show({
          text: '请选择霸屏时间'
        })
        return false
      }
      if (this.bpThemeIndex === -1) {
        this.$vux.toast.show({
          text: '请选择霸屏主题'
        })
        return false
      }
      if (this.content === '') {
        this.$vux.toast.show({
          text: '请输入文字'
        })
        return false
      }
      let isCharge = Boolean(this.total > this.userInfo.balance)
      let postParams = {
        ht_id: this.$route.params.id,
        type: 2,
        screen_id: this.bpThemeIndex === -1 ? 0 : this.screens[this.bpThemeIndex].id,
        time_id: this.times[this.bpTimeIndex].id,
        count: this.bpTimes,
        content: this.content,
        img: this.base64Img,
        reward_uid: this.currentUserInfo.uid ? this.currentUserInfo.uid : ''
      }
      postParams = {postParams: postParams, price: this.total, confirmText: isCharge ? '充值' : '确定', isCharge: isCharge}
      this.ChangeBuyDialogInfo(postParams)
      this.$emit('onBuy')
    },
    reset () {
      this.bpThemeIndex = -1
      this.bpTimeIndex = -1
    }
  },
  components: {
    Upload,
    swiper,
    swiperSlide
  },
  computed: {
    total () {
      const timePrice = this.bpTimeIndex !== -1 ? Number(this.times[this.bpTimeIndex].price) : 0
      const themePrice = this.bpThemeIndex !== -1 ? Number(this.screens[this.bpThemeIndex].price) : 0
      return Number((timePrice + themePrice) * this.bpTimes).toFixed(2)
    },
    timesBpText () {
      const texts = ['一', '二', '三']
      return texts[this.bpTimes - 1] + '连霸屏'
    },
    ...mapGetters('main', {
      currentUserInfo: 'currentUserInfo'
    }),
    ...mapGetters('user', {
      userInfo: 'userInfo'
    })
  }
}
</script>


<style lang="less" scoped>
@import '../../styles/window.less';
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.3);
/*vendor swiper*/
.window /deep/ {
  /deep/ .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.8);
  }
  /deep/ .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 0.5);
  }
}

#bp-model {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 300px;
  z-index: 2;
  border-radius: 15px 15px 0 0;
  background: -webkit-radial-gradient(circle closest-corner, #621653, #170127);
  background: radial-gradient(circle closest-corner at 50% 30%, #621653, #170127);
}

.bp-time-item {
  display: inline-block;
  width: 1.15rem;
  margin-right: 0.7rem;
  margin-bottom: 0.3rem;
  &:nth-child(4n+4) {
    margin-right: 0;
  }
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
  }
}
.bp-theme-item {
  width: 1.5rem;
  margin: 0 0.0875rem 0.2rem;
  display: inline-block;
  position: relative;
  &:nth-child(4n+4) {
    margin-right: 0;
  }
  .theme-icon {
    img {
      width: 0.92rem;
      display: block;
      margin: 0.15rem auto;
    }
  }
  .theme-name {
    text-align: center;
    margin-bottom: 0.15rem;
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
@media screen and (min-width: 768px){
  .bp-time-item:nth-child(4n+4) {
    margin-right: 0.7rem;
  }
}
/* .base64-img {
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

</style>
