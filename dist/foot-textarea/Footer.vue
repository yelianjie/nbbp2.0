<template>
  <div class="footer" :class="{'up': showFace}">
    <div class="flex" style="margin: 0.15rem;">
      <div class="footer-left flex">
        <div class="footer-icons flex">
          <div class="icon flex flex-align-center flex-pack-center" @click="$router.push('/')"><svg-icon icon-class="home"/></div>
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
          <img :src="base64 | prefixImageUrl"/>
          <svg-icon icon-class="close-no-circle" @click.native="deleteMsgImg"/>
        </div>
        <div class="chat-input flex-1 flex" :class="{'move': textImgVisible}">
          <div class="textarea-wrapper flex-1">
            <div class="content-editable f14" contenteditable="true">{{msg}}</div>
            <textarea v-model="msg" class="field-textarea" placeholder="说点什么吧！" ref="msg"></textarea>
          </div>
         <!--  <textarea @input="textareaInput" id="input" class="borderbox f13 flex-1" placeholder="说点什么吧！" @click="showFace = false" v-model="msg" ref="msg"></textarea> -->
        </div>
        <div class="chat-submit-btn flex flex-align-center" @click="sendMsg">
          <svg-icon icon-class="plane"/>
        </div>
      </div>
    </div>
    <chat-face @onFaceClick="handleFaceInput" style="margin: 0.15rem;"></chat-face>
  </div>
</template>

<script>
import Upload from '../Upload'
import ChatFace from '../ChatFace'
import { addNormalMsg } from '@/api/'
export default {
  data () {
    return {
      textImgVisible: false,
      base64: '',
      showFace: false,
      msg: '',
      inputObj: null
    }
  },
  watch: {
    msg (n, o) {
      this.observeInput()
    }
  },
  mounted () {
  },
  methods: {
    observeInput () {
      if (!this.inputObj) {
        this.inputObj = this.$refs.msg
      }
      var style = window.getComputedStyle(this.inputObj, null)
      var h = this.inputObj.scrollHeight
      var line = Math.round(h / parseInt(style.lineHeight))
      var marginBottom = '1rem'
      if (line === 2) {
        marginBottom = '1.4rem'
      } else if (line >= 3) {
        marginBottom = '1.8rem'
      }
      document.querySelector('.main-content').style.marginBottom = marginBottom
    },
    sendMsg () {
      if (!this.msg && !this.base64) {
        this.$vux.toast.show({
          text: '请上传图片或输入文字',
          width: '12em'
        })
        return false
      }
      addNormalMsg({ht_id: this.$route.params.id, content: this.msg, img: this.base64}).then((res) => {
        this.deleteMsgImg()
        this.msg = ''
        this.showFace = false
        this.$nextTick(() => {
          this.observeInput()
        })
      })
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
      this.$refs.msg.scrollTop = this.$refs.msg.scrollHeight
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
  }
  background-color: rgba(58, 10, 59, 0.9);
  position: absolute;
  left: 0;
  bottom: -2.85rem;
  right: 0;
  z-index: 1;
  transition: all .3s ease-out;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
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


.textarea-wrapper {
  position: relative;
  display: block;
  width: 100%;
  padding: .15rem 0;
  margin: 0 8px 0 .3rem;
  .content-editable {
    color: #fff;
    position: relative;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 100%;
    line-height: 0.4rem;
    word-break: break-all;
    word-wrap: break-word;
    max-height: 1.2rem;
  }
  .field-textarea {
    border: 0;
    outline: none;
    position: absolute;
    top: 0.15rem;
    bottom: 0.15rem;
    width: 100%;
    box-sizing: border-box;
    line-height: 0.4rem;
    font-size: 14px;
    color: #fff;
    text-align: left;
    resize: none;
    background-color: transparent;
    letter-spacing: 1.27px;
    &::-webkit-input-placeholder {
      text-align: left;
      font-size: 14px;
      color: #fff;
    }
  }
}
.chat-submit-btn {
  padding-right: 0.3rem;
}
</style>

