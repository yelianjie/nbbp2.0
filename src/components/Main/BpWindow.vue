<template>
  <div class="window-pop">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="window" id="bp-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close"/></span>
        <div class="window-top">
          <p class="window-title">为&ensp;鲜花&ensp;霸屏</p>
        </div>
        <div class="window-middle">
          <div class="bp-time-container">
            <div class="bp-time-item selected" v-for="i in 8" :key="i">
              <div class="time">{{i * 10}}秒<span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
              <div class="time-price"><img src="../../assets/logo.png" class="coin"/>10</div>
            </div>
          </div>
          <div class="rpxline" style="margin-bottom: 0.2rem;"></div>
          <div class="bp-theme-container">
            <div class="bp-theme-item boderbox" v-for="i in 8" :key="i">
              <div class="bp-theme-selected"><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
              <div class="theme-icon"><img src="../../assets/logo.png"></div>
              <div class="theme-name overflow">生日霸屏</div>
            </div>
          </div>
          <div class="bp-input-area flex">
            <div class="bp-textarea flex-1">
              <textarea class="bp-input boderbox" placeholder="请输入霸屏上墙语，30字以内"></textarea>
            </div>
            <div class="bp-upload">
              <label class="upload-inner boderbox flex flex-v flex-align-center flex-pack-center" for="bp-upload-img">
                <svg-icon icon-class="camera"/>
                <p>添加照片</p>
                <input type="file" id="bp-upload-img" name="bp-upload-img"/>
              </label>
            </div>
          </div>
        </div>
        <div class="window-bottom flex flex-align-center">
          <div class="account">总计：104</div>
          <div class="repeat flex-1"><svg-icon icon-class="substract"/><span>连续霸屏</span><svg-icon icon-class="plus"/></div>
          <div class="submit"><button class="bp-button bp-submit">购买</button></div>
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  props: ['visible'],
  methods: {
    closeWindow () {
      this.$emit('closeWindow', false)
    }
  },
  components: {
  }

}
</script>


<style lang="less" scoped>
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.5);
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
.bp-time-container,
.bp-theme-container {
  font-size: 0;
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
.bp-time-item {
  display: inline-block;
  font-size: 13px;
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
    font-size: 12px;
  }
}
.bp-theme-item {
  width: 1.5rem;
  margin-right: 0.23333rem;
  display: inline-block;
  font-size: 12px;
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
</style>
