<template>
<div v-transfer-dom>
  <div class="crop-box fullscreen flex flex-v" v-show="visible">
    <div class="fullscreen crop-inner" v-if="src">
      <img :src="src" id="img"/>
    </div>
    <div class="flex buttons">
      <button @click="cancel" class="flex-1">取消</button>
      <button @click="clip" class="flex-1">确定</button>
    </div>
  </div>
</div>
</template>

<script>
// import '../vendor/touch'
// import '../vendor/veCrop'
import { TransferDomDirective as TransferDom } from 'vux'
import 'croppie/croppie.css'
import Croppie from 'croppie'
export default {
  directives: {
    TransferDom
  },
  model: {
    prop: 'visible',
    event: 'croptrigger'
  },
  props: ['visible', 'cropRadio'],
  data () {
    return {
      crop: null,
      src: '',
      clipWidth: 150,
      clipHeight: 150
    }
  },
  mounted () {
    var fsize = parseInt(document.documentElement.style.fontSize)
    this.clipWidth = Math.floor(6 * fsize)
    this.clipHeight = Math.floor(6 * fsize * this.cropRadio)
  },
  methods: {
    updateImg (src) {
      let _this = this
      this.src = src
      this.$nextTick(() => {
        this.$vux.loading.show({
          text: '正在加载'
        })
        this.crop = new Croppie(document.getElementById('img'), {
          showZoomer: false,
          viewport: {
            width: _this.clipWidth,
            height: _this.clipHeight,
            type: 'square'
          }
        })
        this.$vux.loading.hide()
      })
    },
    clip () {
      this.$vux.loading.show({
        text: '正在裁剪'
      })
      this.crop.result({
        type: 'base64',
        size: 'original'
      }).then((base64) => {
        this.cancel()
        this.$emit('on-clip', base64)
        this.$vux.loading.hide()
      })
    },
    cancel () {
      this.$emit('croptrigger', false)
      this.src = ''
      this.crop && this.crop.destroy()
    }
  }
}
</script>

<style lang="less" scoped>
.crop-box {
  position: fixed;
  background-color: #000;
}
.crop-inner {
  bottom: 48px;
}
.buttons {
  height: 48px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  button {
    font-size: 14px;
    color: #fff;
    background-color: transparent;
    -webkit-appearance: none;
    border: 0;
    outline: none;
    &:last-of-type {
      color: #f21575;
    }
  }
}
</style>

