<template>
  <div class="container pr">
    <img :src="'./static/help/b-end.jpg'" style="width:100%;"/>
    <div class="bar f12">
      <p class="p1" style="margin-bottom: 0.1rem;">{{info.name}}</p>
      <p class="p1" style="-webkit-user-select: text;user-select: text;">{{ info.id | screenUrl}}</p>
    </div>
    <img v-if="info.qrcode" :src="info.qrcode" class="qrcode"/>
  </div>
</template>

<script>
import { BASE_API } from '../../config/prod.env'
export default {
  data () {
    return {
      info: {
        qrcode: '',
        name: '',
        id: ''
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '使用帮助'
    var info = JSON.parse(localStorage.getItem('businessNeed'))
    next(vm => {
      vm.info = info
    })
  },
  filters: {
    screenUrl: (val) => {
      return BASE_API + '/screen/?ht_id=' + val
    }
  }
}
</script>

<style lang="less" scoped>
.bar {
  position: absolute;
  left: 2.6rem;
  top: 4.8rem;
  width: 4rem;
  word-break: break-all;
  color: #696969;
}
.qrcode {
  position: absolute;
  top: 12.3rem;
  left: 0.8rem;
  width: 2.4rem;
  height: 2.4rem;
}
</style>
