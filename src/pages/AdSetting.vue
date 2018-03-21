<template>
  <div class="container">
    <div class="fff">
      <div class="flex flex-h ad-item-set">
        <div class="ad-img">
          <div class="placeholder-add-btn pr">
            <div class="add-fuhao"></div>
            <img class="bg" v-if="adScreenBg" :src="adScreenBg | prefixImageUrl"/>
            <upload name="upload-ad-screen" @on-preview="adScreenUpload" :encoderValue="0.8" :limitSize="1920"></upload>
            <label for="upload-ad-screen" class="n-label"></label>
          </div>
        </div>
        <div class="flex-1 ad-desc">
          <p class="title">大屏幕端</p>
          <p class="desc">支持jpg、png等格式，建议尺寸：1920 * 1080</p>
        </div>
      </div>
      <div class="flex flex-h ad-item-set">
        <div class="ad-img">
          <div class="placeholder-add-btn pr">
            <div class="add-fuhao"></div>
            <img class="bg" v-if="adMobileBg" :src="adMobileBg | prefixImageUrl" />
            <upload name="upload-ad-mobile" @on-preview="adMobileUpload" :encoderValue="0.8" :limitSize="828"></upload>
            <label for="upload-ad-mobile" class="n-label"></label>
          </div>
        </div>
        <div class="flex-1 ad-desc">
          <p class="title">手机端</p>
          <p class="desc">支持jpg、png等格式，建议尺寸：750 * 1206</p>
        </div>
      </div>
    </div>
    <p class="tip">若无上传图片，将优先展示牛霸平台广告</p>
  </div>
</template>

<script>
import { Group, XTextarea, XButton } from 'vux'
import Upload from '../components/Upload'
import { getAd, updateAdImage } from '@/api/'
export default {
  components: {
    Group,
    XTextarea,
    XButton,
    Upload
  },
  data () {
    return {
      adScreenBg: '',
      adMobileBg: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '广告设置'
    next()
  },
  created () {
    getAd({ht_id: this.$route.query.id}).then((res) => {
      this.adScreenBg = res.result.screen.url
      this.adMobileBg = res.result.phone.url
    })
  },
  methods: {
    adScreenUpload (url) {
      this.adScreenBg = url
      updateAdImage({type: 2, url: url, ht_id: this.$route.query.id}).then((res) => {
        console.log(res)
      })
    },
    adMobileUpload (url) {
      this.adMobileBg = url
      updateAdImage({type: 1, url: url, ht_id: this.$route.query.id}).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ad-item-set {
  padding: 15px;
  position: relative;
  &:not(:last-child):after {
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background-color: #ddd;
    content: "";
  }
}
.placeholder-add-btn {
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
  border: 1px solid #ddd;
  position: relative;
  .add-fuhao {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    &:after,
    &:before {
      position: absolute;
      transform: translate3d(-50%, -50%, 0);
      content: "";
      left: 50%;
      top: 50%;
      background-color: #ddd;
    }
    &:after {
      width: 2px;
      height: 50%;
    }
    &:before {
      width: 50%;
      height: 2px;
    }
  }
}
.desc {
  font-size: 13px;
  color: #868686;
}
.tip {
  padding:5px 15px;
  font-size: 14px;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
