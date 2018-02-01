<template>
  <div class="footer" :class="{'up': showFace}">
    <div class="flex">
      <div class="footer-left flex">
        <div class="footer-icons flex">
          <div class="icon flex flex-align-center flex-pack-center" @click="$router.go(-1)"><svg-icon icon-class="home"/></div>
          <div class="icon flex flex-align-center flex-pack-center">
            <upload name="msg-upload-img" @on-preview="msgImgUploadPreview">
              <svg-icon icon-class="img"/>
            </upload>
            <label for="msg-upload-img" class="n-label"></label>
          </div>
          <div class="icon flex flex-align-center flex-pack-center" @click="showFace = !showFace"><svg-icon icon-class="face"/></div>
        </div>
      </div>
      <div class="footer-right flex flex-1">
        <div class="upload-img flex flex-pack-center flex-align-center" v-show="textImgVisible">
          <img :src="base64"/>
          <svg-icon icon-class="close-no-circle" @click.native="deleteMsgImg"/>
        </div>
        <div class="chat-input flex-1" :class="{'move': textImgVisible}">
          <input type="text" placeholder="说点什么吧！" @click="showFace = false" v-model="msg">
        </div>
        <div class="chat-submit-btn flex flex-align-center" @click="sendMsg">
          <svg-icon icon-class="plane"/>
        </div>
      </div>
    </div>
    <div style="height: 0.15rem;"></div>
    <chat-face @onFaceClick="handleFaceInput"></chat-face>
  </div>
</template>

<script>
import Upload from '../Upload'
import ChatFace from '../ChatFace'
export default {
  data () {
    return {
      textImgVisible: false,
      base64: '',
      showFace: false,
      msg: ''
    }
  },
  methods: {
    sendMsg () {
      this.$emit('onSendMsg')
    },
    msgImgUploadPreview (base64) {
      this.textImgVisible = true
      this.base64 = base64
    },
    deleteMsgImg () {
      this.textImgVisible = false
      this.base64 = ''
    },
    handleFaceInput (value) {
      this.msg = this.msg + value
    }
  },
  components: {
    Upload,
    ChatFace
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.footer {
  &.up {
    bottom: 0;
    background-color: rgba(58, 10, 59, 0.9);
  }
  position: absolute;
  left: 0;
  bottom: -2.95rem;
  right: 0;
  z-index: 1;
  transition: all .3s ease-out;
  padding: 0.15rem;
  border-top: 0.5px solid rgba(255, 255, 255, 0.4);
  .svg-icon {
    width: 0.4rem;
    height: 0.4rem;
    display: block;
  }
}
.footer-icons {
  .icon {
    width: 0.7rem;
    height: 0.7rem;
    background-color: @bubleBg;
    border-radius: 50%;
    margin-right: 0.15rem;
    position: relative;
  }
}
.footer-right {
  background-color: @bubleBg;
  position: relative;
  border-radius: 50px;
  .upload-img {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    img {
      .radius();
      width: 0.7rem;
      height: 0.7rem;
      display: block;
    }
    .svg-icon {
      width: 0.3rem;
      height: 0.3rem;
      box-sizing: content-box;
      padding: 0.1rem 0.15rem;
    }
  }
}

.chat-input {
  margin-right: 10px;
  &.move input {
    padding: 0.2rem 0 0.2rem 1.4rem;
  }
  input {
    background-color: transparent;
    width: 100%;
    border: 0;
    line-height: 0.3rem;
    padding: 0.2rem 0 0.2rem 0.3rem;
    transition: all .3s ease-out;
    color: #fff;
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-size: @baseFontSize;
    }
  }
}

.chat-submit-btn {
  margin-right: 0.3rem;
}
</style>

