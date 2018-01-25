<template>
  <div class="window-pop">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="bp-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close"/></span>
        <div class="window-top">
          <p class="window-title f14">为&ensp;鲜花&ensp;霸屏</p>
        </div>
        <div class="window-middle">
          <div class="bp-time-container">
            <div class="bp-time-item selected" v-for="i in 8" :key="i">
              <div class="time f13">{{i * 10}}秒<span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
              <div class="time-price f12"><svg-icon icon-class="coin" className="coin" />10</div>
            </div>
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="bp-theme-container">
            <swiper :options="swiperThemeOption">
              <swiper-slide v-for="(v, i) in 8" :key="i">
                <div class="bp-theme-item boderbox">
                  <div class="bp-theme-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="theme-icon"><img src="../../assets/logo.png"></div>
                  <div class="theme-name f13 overflow">生日霸屏</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="bp-input-area flex">
            <div class="bp-textarea flex-1">
              <textarea class="bp-input boderbox" placeholder="请输入霸屏上墙语，30字以内"></textarea>
            </div>
            <div class="bp-upload">
              <upload name="bp-upload-img" :is-crop="true" @on-clip="afterClip" :cropRadio="0.5625">
                <div class="upload-inner boderbox flex flex-v flex-align-center flex-pack-center">
                  <svg-icon icon-class="camera"/>
                  <p class="f13">添加照片</p>
                  <label for="bp-upload-img" class="n-label" id="base64Img" :style="{'background-image':'url('+base64Img+')'}"></label>
                  <!--<div class="n-label base64-img" v-show="base64Img" :style="{'background-image':'url('+base64Img+')'}"></div>-->
                </div>
              </upload>
            </div>
          </div>
        </div>
        <div class="window-bottom f13 flex flex-align-center">
          <div class="account flex-1">总计：<svg-icon icon-class="coin" className="coin" />104</div>
          <div class="repeat"><svg-icon icon-class="substract"/><span>连续霸屏</span><svg-icon icon-class="plus"/></div>
          <div class="submit"><button class="bp-button bp-submit">购买</button></div>
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Upload from '../Upload'
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  props: ['visible'],
  data () {
    return {
      swiperThemeOption: {
        slidesPerColumn: 2,
        slidesPerView: 4,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      base64Img: ''
    }
  },
  methods: {
    closeWindow () {
      this.$emit('closeWindow', false)
    },
    afterClip (base64) {
      this.base64Img = base64
    }
  },
  components: {
    Upload,
    swiper,
    swiperSlide
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
  margin-bottom: 0.4rem;
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
  margin-right: 0.23333rem;
  display: inline-block;
  margin-bottom: 0.2rem;
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
/* .base64-img {
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

</style>
