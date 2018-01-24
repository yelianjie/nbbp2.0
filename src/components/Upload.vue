<template>
  <div>
    <slot></slot>
    <input type="file" :id="name" :name="name" @change="fileChange"/>
    <crop v-show="cropVisible" ref="crop"></crop>
  </div>
</template>

<script>
import Crop from '../components/Crop'
export default {
  props: ['name'],
  data () {
    return {
      cropVisible: false
    }
  },
  methods: {
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
          _this.cropVisible = true
          _this.$refs.crop.updateImg(base64)
        }
        img.src = base64
      }
    }
  },
  components: {
    Crop
  }
}
</script>
