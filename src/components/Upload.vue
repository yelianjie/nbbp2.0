<template>
  <div>
    <slot></slot>
    <input type="file" :id="name" :name="name" @change="fileChange"/>
  </div>
</template>

<script>

export default {
  props: ['name'],
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
          _this.$emit('onPreview', img)
        }
        img.src = base64
      }
    }
  }
}
</script>
