<template>
  <!--<div class="fullscreen" id="crop-container">
    <div class="gold-inner" id="inner">
        <div class="frame">
            <img src="../assets/gold-rotate.png" class="rotate" id="btnRotate">
        </div>
        <div id="innerFrame" class="inner-frame"></div>
        <img src="../assets/blank.gif" id="frameImg" class="frame-img">
    </div>
    <button id="clip" @click="clip">裁剪</button>
</div>-->
  <div id="demo" class="fullscreen">
    <img :src="src" id="img"/>
    <div id="button"><button @click="clipa">裁剪</button></div>
    <div id="show" v-if="final"><img :src="final"/></div>
  </div>
</template>

<script>
// import '../vendor/touch'
// import '../vendor/veCrop'
import 'croppie/croppie.css'
import Croppie from 'croppie'
export default {
  data () {
    return {
      crop: null,
      src: '',
      final: ''
    }
  },
  mounted () {
    /* this.$nextTick(() => {
      var frameImg = document.getElementById('frameImg')
      var frame = document.getElementById('inner')
      var cropFrame = document.getElementById('innerFrame')
      var CropP = window.veCrop
      this.crop = new CropP({
        img: frameImg,
        frame: frame,
        frameBorderWidth: 2,
        cropFrame: cropFrame
      })
    }) */
  },
  methods: {
    updateImg (src) {
      // document.getElementById('frameImg').setAttribute('src', src)
      this.src = src
      this.$nextTick(() => {
        this.crop = new Croppie(document.getElementById('img'), {})
      })
    },
    clipa () {
      this.crop.result({
        type: 'base64',
        size: 'original'
      }).then((base64) => {
        this.final = base64
      })
    },
    clip () {
      this.crop.generate(function (base64) {
        console.log(base64)
      })
    }
  }
}
</script>

<style lang="less" scoped>
#demo {
  position: fixed;
  bottom: 10%;
  background-color: #000;
}
#button {
  position: absolute;
  bottom: 0;
  z-index: 1222;
}
#show {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 333;
  background-color: red;
}
/*#crop-container {
  background-color: #000;
}
.gold-inner {
  width: 100%;
  margin: 0 auto;
  height: 90%;
  border: 1px solid #fff;
  position: relative;
  overflow: hidden;
  z-index: 2;
  .frame {
    position: absolute;
    left: 0;
    top: -2px;
    right: 0;
    bottom: 0;
    z-index: 3;
    box-sizing: border-box;
    border-radius: 0.2rem;
    background: url(../assets/gold-frame.png) no-repeat center center;
    pointer-events: none;
    background-size: 100% 100%;
    text-align: right;
  }
  .inner-frame {
    position: absolute;
    width: 6.266667rem;
    height: 2.4rem;
    left: 50%;
    margin-left: -3.133333rem;
    top: 50%;
    margin-top: -1.2rem;
    pointer-events: none;
  }
  .frame-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 0.2rem;
    z-index: 1;
    transition: transform .1s ease;
    transition: transform .1s ease, -webkit-transform .1s ease;
  }
}*/
</style>

