<template>
  <div class="window-pop">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="ds-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close" @click.native="closeWindow"/></span>
        <div class="window-top">
          <p class="window-title f14 flex flex-align-center" v-if="true">为<img src="../../assets/logo.png" class="for-who circle"/>鲜花送礼</p>
          <p class="window-title f14 flex flex-align-center" v-else>为全场观众送礼</p>
        </div>
        <div class="window-middle">
          <div class="ds-person-container">
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="ds-gift-container">
            <swiper :options="swiperDsGiftOption">
              <swiper-slide v-for="(v, i) in 8" :key="i">
                <div class="ds-gift-item boderbox ds-item" :class="{'selected': dsGiftIndex == i}" @click="dsGiftIndex = i">
                  <div class="ds-gift-selected ds-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
                  <div class="gift-icon ds-img"><img src="../../assets/logo.png"></div>
                  <div class="gift-name ds-text overflow f13">兰博基尼</div>
                  <div class="gift-price f12"><svg-icon icon-class="coin" className="coin" />10</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="bp-input-area flex">
            <input class="bp-input boderbox" placeholder="请输入送礼上墙语，15字以内" />
          </div>
        </div>
        <div class="window-bottom f13 flex flex-align-center">
          <div class="account  flex-1">总计：<svg-icon icon-class="coin" className="coin" />104</div>
          <div class="repeat"><svg-icon icon-class="substract"/><span>连续送礼</span><svg-icon icon-class="plus"/></div>
          <div class="submit"><button class="bp-button bp-submit" @click="buy">购买</button></div>
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapActions } from 'vuex'
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  data () {
    return {
      dsGiftIndex: -1,
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
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    closeWindow () {
      this.$emit('closeWindow', false)
    },
    buy () {
      this.ChangeBuyDialogInfo({price: Math.floor(Math.random() * 100), rest: 30})
      this.$emit('onBuy')
    },
    reset () {
      this.dsGiftIndex = -1
    }
  },
  components: {
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

.ds-item {
  width: 1.5rem;
  margin: 0 0.0875rem 0.2rem;
  display: inline-block;
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
    margin: 0 0.15rem 0.15rem;
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
}
</style>
