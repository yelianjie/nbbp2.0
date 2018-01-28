<template>
  <div>
    <slot></slot>
    <input type="file" accept="image/*" :id="name" :name="name" @change="fileChange" ref="fileInput"/>
    <template v-if="isCrop">
      <crop v-model="cropVisible" ref="crop" @on-clip="finishClip" :crop-radio="cropRadio"></crop>
    </template>
  </div>
</template>

<script>
import Crop from '../components/Crop'
// import { Exif } from '../utils/exif.min.js'
var EXIF = require('../utils/exif.js')
export default {
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
      ctx: null
    }
  },
  mounted () {
    this.canvas = document.createElement('canvas')
    // 瓦片canvas
    this.tCanvas = document.createElement('canvas')
    /* window.EXIF.getData(document.getElementById(this.name), function () {
      var allMetaData = window.EXIF.getAllTags(this)
      console.log(allMetaData)
    }) */
  },
  methods: {
    finishClip (base64) {
      this.$emit('on-clip', base64)
    },
    fileChange (event) {
      var _this = this
      var file = event.target.files[0]
      if (!file) {
        return
      }
      var reader = new FileReader()
      reader.readAsDataURL(file) // 将文件以Data URL形式进行读入页面
      reader.onload = function () {
        var base64 = this.result
        var img = new Image()
        img.onload = function () {
          // _this.$emit('onPreview', img)
          EXIF.EXIF.getData(img, function () {
            var orientation = EXIF.EXIF.getTag(this, 'Orientation')
            if (_this.isCrop) {
              _this.cropVisible = true
              var _base642 = _this.compress(img)
              console.log(_base642)
              _this.$refs.crop.updateImg(_base642, orientation)
            } else {
              // 压缩直接返回
              var _base64 = _this.compress(img)
              _this.$emit('on-preview', _base64)
            }
          })
        }
        img.src = base64
      }
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
      var ndata = canvas.toDataURL('image/jpeg', 0.1)
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
