<template>
  <div class="container pr fff">
    <section class="section">
      <h4 class="b f15">1、填入公众号底栏菜单的URL地址：</h4>
      <article class="article">
        <p class="b f14">{{info.name}}URL: </p>
        <p class="f14" style="-webkit-user-select: text;user-select: text;">{{ info.id | screenUrl}}</p>
        <p class="b f14" style="margin-top: 10px;">酒吧列表页URL: </p>
        <p class="f14" style="-webkit-user-select: text;user-select: text;">{{ info.id | listUrl}}</p>
        <p class="f14" style="margin-top: 10px;">请选择您需要在公众号底栏打开的菜单链接复制</p>
      </article>
    </section>
    <section class="section">
      <h4 class="b f15">2、电脑登录公众号后台设置底栏菜单</h4>
      <article class="article">
        <p class="b f14">登录进入公众号后台--自定义菜单（如下图）--将复制的链接填入相应位置</p>
        <img :src="'./static/help/insert-business.png'" style="width: 100%;margin: 10px 0;" @click="previewImage('./static/help/insert-business.png')"/>
      </article>
      <p class="f14" style="margin-top: 10px;">成功设置后即可在您的公众号里点击微上墙参与互动</p>
    </section>
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
    document.title = '公众号接入牛霸微上墙'
    var info = JSON.parse(localStorage.getItem('businessNeed'))
    next(vm => {
      vm.info = info
    })
  },
  filters: {
    screenUrl: (val) => {
      return BASE_API + '/screen/?ht_id=' + val
    },
    listUrl: (val) => {
      return BASE_API + '/dist/#/'
    }
  },
  methods: {
    previewImage (url) {
      url = BASE_API + '/dist/' + url
      var pics = {current: url, urls: [url]}
      this.$wechat.previewImage(pics)
    }
  }
}
</script>

<style lang="less" scoped>
.b {
  color: #3d7fd9;
}
.section {
  margin: 0 0.45rem;
  padding: 0.5rem 0;
}
.article {
  padding: 0.25rem;
  margin-top: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>
