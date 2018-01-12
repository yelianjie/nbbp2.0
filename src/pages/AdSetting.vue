<template>
  <div class="container">
    <div class="fff">
      <div class="flex flex-h ad-item-set">
        <div class="ad-img">
          <div class="placeholder-add-btn"></div>
        </div>
        <div class="flex-1 ad-desc">
          <p class="title">大屏幕端</p>
          <p class="desc">支持jpg、png等格式，建议尺寸：大小不超过2M</p>
        </div>
      </div>
      <div class="flex flex-h ad-item-set">
        <div class="ad-img">
          <div class="placeholder-add-btn"></div>
        </div>
        <div class="flex-1 ad-desc">
          <p class="title">手机端</p>
          <p class="desc">支持jpg、png等格式，建议尺寸：大小不超过1M</p>
        </div>
      </div>
    </div>
    <p class="tip">若无上传图片，将优先展示牛霸平台广告</p>
  </div>
</template>

<script>
import { Group, XTextarea, XButton } from 'vux'
export default {
  components: {
    Group,
    XTextarea,
    XButton
  },
  data () {
    return {

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
.desc {
  font-size: 13px;
  color: #868686;
}
.tip {
  padding:5px 15px;
  font-size: 14px;
}
</style>
