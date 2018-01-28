<template>
  <div>
    <slot></slot>
    <input type="file" accept="image/*" :id="name" :name="name" @change="fileChange" ref="fileInput"/>
    <div v-transfer-dom>
      <div class="crop-box fullscreen flex flex-v" v-show="cropVisible">
        <div class="fullscreen crop-inner" ref="crop"></div>
        <div class="flex buttons">
          <button @click="cancel" class="flex-1">取消</button>
          <button @click="finishClip" class="flex-1">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Crop from '../components/Crop'
import PhotoClip from 'photoclip'
import { TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    isCrop: {
      type: Boolean,
      default: false
    },
    cropRadio: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      cropVisible: false,
      canvas: null,
      tCanvas: null,
      ctx: null,
      crop: null
    }
  },
  mounted () {
    this.canvas = document.createElement('canvas')
    // 瓦片canvas
    this.tCanvas = document.createElement('canvas')
    var fsize = parseInt(document.documentElement.style.fontSize)
    this.clipWidth = Math.floor(6 * fsize)
    this.clipHeight = Math.floor(6 * fsize * this.cropRadio)
    this.crop = new PhotoClip(this.$refs.crop, {
      size: [this.clipWidth, this.clipHeight],
      lrzOption: {
        quality: 0.8
      },
      outputQuality: 1
    })
  },
  methods: {
    cancel () {
      this.cropVisible = false
      this.crop.clear()
    },
    finishClip () {
      var base64 = this.crop.clip()
      this.$emit('on-clip', base64)
      this.cancel()
    },
    fileChange (event) {
      var file = event.target.files[0]
      if (!file) {
        return
      }
      this.cropVisible = true
      this.crop.load(file)
    },
    compress (img) {
      var initSize = img.src.length
      var width = img.width
      var height = img.height
      var canvas = this.canvas
      var ctx = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      /* var tCanvas = this.tCanvas
      // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      var ratio
      if ((ratio = width * height / 2000000) > 1) {
        ratio = Math.sqrt(ratio)
        width /= ratio
        height /= ratio
      } else {
        ratio = 1
      }
      canvas.width = width
      canvas.height = height
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      var count
      if ((count = width * height / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1)
        var nw = ~~(width / count)
        var nh = ~~(height / count)
        tCanvas.width = nw
        tCanvas.height = nh
        for (var i = 0; i < count; i++) {
          for (var j = 0; j < count; j++) {
            ctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh)
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height)
      } */
      ctx.drawImage(img, 0, 0, width, height)
      // 进行最小压缩
      var ndata = canvas.toDataURL('image/jpeg', 0.6)
      console.log('压缩前：' + initSize)
      console.log('压缩后：' + ndata.length)
      console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + '%')
      // tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
      return ndata
    }
  },
  components: {
    Crop
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