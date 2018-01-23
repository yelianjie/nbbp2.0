<template>
  <div class="window-pop">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="ds-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close"/></span>
        <div class="window-top">
          <p class="window-title">为&ensp;鲜花&ensp;送礼</p>
        </div>
        <div class="window-middle">
          <div class="ds-person-container">
            <swiper :options="swiperDsPersonOption">
              <swiper-slide v-for="(v, i) in 8" :key="i">
                <div class="ds-person-item ds-item" :class="{'selected': dsToIndex == i}" @click="dsToIndex = i">
                  <div class="ds-person-selected ds-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="person-avatar ds-img"><img src="../../assets/logo.png"></div>
                  <div class="person-name ds-text">Somer</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="ds-gift-container">
            <swiper :options="swiperDsGiftOption">
              <swiper-slide v-for="(v, i) in 8" :key="i">
                <div class="ds-gift-item boderbox ds-item" :class="{'selected': dsGiftIndex == i}" @click="dsGiftIndex = i">
                  <div class="ds-gift-selected ds-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="gift-icon ds-img"><img src="../../assets/logo.png"></div>
                  <div class="gift-name ds-text overflow">兰博基尼</div>
                  <div class="gift-price"><img src="../../assets/logo.png" class="coin"/>10</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="bp-input-area flex">
            <input class="bp-input boderbox" placeholder="请输入送礼上墙语，15字以内" />
          </div>
        </div>
        <div class="window-bottom flex flex-align-center">
          <div class="account">总计：104</div>
          <div class="repeat flex-1"><svg-icon icon-class="substract"/><span>连续送礼</span><svg-icon icon-class="plus"/></div>
          <div class="submit"><button class="bp-button bp-submit">购买</button></div>
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  data () {
    return {
      dsToIndex: -1,
      dsGiftIndex: -1,
      swiperDsPersonOption: {
        slidesPerView: 4,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      },
      swiperDsGiftOption: {
        slidesPerColumn: 2,
        slidesPerView: 4,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  props: ['visible'],
  methods: {
    closeWindow () {
      this.$emit('closeWindow', false)
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>


<style lang="less" scoped>
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.5);
/*vendor swiper*/
.window /deep/ {
  /deep/ .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.8);
  }
  /deep/ .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 0.5);
  }
}


#ds-model {
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
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.ds-person-container,
.ds-gift-container {
  font-size: 0;
  .swiper-container {
    padding: 10px 0 15px;
  }
}
.close-icon {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  .svg-icon {
    width: 0.4rem;
    height: 0.4rem;
  }
}
.selected-icon {
    color: @mainColor;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(50%, -50%, 0);
    display: none;
    width: 0.3rem;
    height: 0.3rem;
    .svg-icon {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 2;
      display: block;
    }
    &:after {
      content: "";
      position: absolute;
      left: 15%;
      top: 15%;
      width: 70%;
      height: 70%;
      border-radius: 50%;
      z-index: 1;
      background-color: #fff;
    }
  }
.ds-item {
  width: 1.5rem;
  margin-right: 0.23333rem;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 0.2rem;
  position: relative;
  .ds-img {
    img {
      width: 0.92rem;
      display: block;
      margin: 0.15rem auto;
    }
  }
  .ds-text {
    text-align: center;
    margin-bottom: 0.15rem;
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
  height: 0.3rem;
  padding: 0.2rem;
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
    line-height: 0.95rem;
  }
}
.upload-inner {
  width: 1.4rem;
  margin-left: 0.2rem;
  height: 1.35rem;
  border: 1px solid @borderColor;
  border-radius: 6px;
  .svg-icon {
    width: 0.45rem;
    height: 0.45rem;
    display: block;
  }
  p {
    font-size: 13px;
    color: #fff;
    margin-top: 4px;
  }
}
input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
}
.bp-submit {
  width: 1.4rem;
  height: 0.64rem;
  padding: 0;
  line-height: 0.64rem;
  text-align: center;
  background-color: @mainColor;
  color: #fff;
}
.coin {
  width: 0.16rem;
  height: 0.16rem;
  vertical-align: 0;
}
.gift-price {
  text-align: center;
}
</style>
