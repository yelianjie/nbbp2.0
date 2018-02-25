<template>
  <div>
    <slot></slot>
    <input type="file" accept="image/*" :id="name" :name="name" @change="fileChange" ref="fileInput"/>
    <div v-transfer-dom v-if="isCrop">
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
import { uploadImage } from '@/api/'
// import { dataURLtoFile } from '@/utils/utils'
import lrz from 'lrz'
// var EXIF = require('../utils/exif.js')
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
    },
    limitSize: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      cropVisible: false,
      canvas: null,
      tCanvas: null,
      ctx: null,
      crop: null,
      curFile: null
    }
  },
  mounted () {
    this.canvas = document.createElement('canvas')
    // 瓦片canvas
    this.tCanvas = document.createElement('canvas')
    var fsize = parseInt(document.documentElement.style.fontSize)
    this.clipWidth = Math.floor(6 * fsize)
    this.clipHeight = Math.floor(6 * fsize * this.cropRadio)
    if (!this.isCrop) {
      return
    }
    let lrzOption = {quality: 0.5}
    if (this.limitSize) {
      lrzOption.width = this.limitSize
      lrzOption.height = this.limitSize
    }
    this.crop = new PhotoClip(this.$refs.crop, {
      size: [this.clipWidth, this.clipHeight],
      lrzOption: lrzOption,
      style: {
        maskBorder: '1px dashed #fff'
      },
      outputQuality: 0.7
    })
  },
  methods: {
    cancel () {
      this.cropVisible = false
      this.crop.clear()
    },
    finishClip () {
      this.$vux.loading.show({
        text: '正在上传'
      })
      var base64 = this.crop.clip()
      uploadImage(base64, this.curFile.type, (res) => {
        this.$vux.loading.hide()
        this.$vux.toast.show({
          text: res.msg
        })
        if (!res.error) {
          this.$emit('on-clip', res.res)
        }
      })
      this.cancel()
      this.$vux.loading.hide()
    },
    fileChange (event) {
      var file = event.target.files[0]
      if (!file) {
        return
      }
      var _this = this
      this.curFile = file
      let msg = this.isCrop ? '正在加载图片' : '正在上传'
      this.$vux.loading.show({
        text: msg
      })
      if (this.crop) {
        this.crop.load(file)
        this.cropVisible = true
        this.$vux.loading.hide()
      } else {
        lrz(file, {
          width: this.limitSize,
          height: this.limitSize,
          quality: 0.5
        })
        .then(function (rst) {
          // 处理成功会执行
          uploadImage(rst.base64, _this.curFile.type, (res) => {
            _this.$vux.loading.hide()
            _this.$vux.toast.show({
              text: res.msg
            })
            if (!res.error) {
              _this.$emit('on-preview', res.res)
            }
          })
        })
        .catch(function (err) {
            // 处理失败会执行
          console.log(err)
        })
        .always(function () {
            // 不管是成功失败，都会执行
        })
      }
    },
    compress (img, Orientation, compressSize = 0.6) {
      var initSize = img.src.length
      var width = img.width
      var height = img.height
      var canvas = this.canvas
      var ctx = canvas.getContext('2d')
      if (this.limitSize !== 0) {
        if (width > this.limitSize || height > this.limitSize) {
          if (width >= height) {
            height = ~~(this.limitSize * height / width)
            width = this.limitSize
          } else {
            width = ~~(this.limitSize * width / height)
            height = this.limitSize
          }
        }
      }
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
      // 修复ios上传图片的时候 被旋转的问题
      if (Orientation !== '' && Orientation !== 1) {
        switch (Orientation) {
          case 6:// 需要顺时针（向左）90度旋转
            this.rotateImg(img, 'left', canvas)
            break
          case 8:// 需要逆时针（向右）90度旋转
            this.rotateImg(img, 'right', canvas)
            break
          case 3:// 需要180度旋转
            this.rotateImg(img, 'right', canvas)// 转两次
            this.rotateImg(img, 'right', canvas)
            break
        }
      }

      // 进行最小压缩
      var ndata = canvas.toDataURL('image/jpeg', compressSize)
      console.log('压缩前：' + initSize)
      console.log('压缩后：' + ndata.length)
      console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + '%')
      // tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
      return ndata
    },
    rotateImg (img, direction, canvas) {
      // 最小与最大旋转方向，图片旋转4次后回到原方向
      const minStep = 0
      const maxStep = 3
      if (img == null) {
        return
      }
      // img的高度和宽度不能在img元素隐藏后获取，否则会出错
      let height = img.height
      let width = img.width
      let step = 2
      if (step == null) {
        step = minStep
      }
      if (direction === 'right') {
        step++
        // 旋转到原位置，即超过最大值
        step > maxStep && (step = minStep)
      } else {
        step--
        step < minStep && (step = maxStep)
      }
      // 旋转角度以弧度值为参数
      let degree = step * 90 * Math.PI / 180
      let ctx = canvas.getContext('2d')
      switch (step) {
        case 0:
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0)
          break
        case 1:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, 0, -height)
          break
        case 2:
          canvas.width = width
          canvas.height = height
          ctx.rotate(degree)
          ctx.drawImage(img, -width, -height)
          break
        case 3:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, -width, 0)
          break
      }
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
    display: block;
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