<template>
  <div class="container">
    <div class="main flex flex-v">
    <div class="main-header flex flex-align-center">
      <div class="flex main-header-left flex-align-center">
        <div class="main-header-avatar">
          <img src="../assets/logo.png">
        </div>
        <div class="main-header-user flex-1 flex flex-v flex-pack-center flex-align-center">
          <p class="nickname">鲜花</p>
          <span class="level level-1">V1</span>
        </div>
      </div>
      <div class="flex flex-1 main-header-right flex-align-center">
        <img src="../assets/boardcast-icon.png" class="boardcast-icon">
        <div class="boardcast-scroller flex-1">
          <div class="scroller-wrap">
            <marquee direction="left" befavior="scroll" scrollamount="0">我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强</marquee>
            
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 main-content">
      <template v-for="(v, i) in chatlist">
        <msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 0"></msg>
        <msg-img :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 1"></msg-img>
        <msg-only-img :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 2"></msg-only-img>
        <bp-msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 3"></bp-msg>
        <ds-msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 4"></ds-msg>
      </template>
    </div>
    <div class="footer ">
      <div class="flex">
        <div class="footer-left flex">
          <div class="footer-icons flex">
            <span class="icon flex flex-align-center flex-pack-center"><svg-icon icon-class="home"/></span>
            <span class="icon flex flex-align-center flex-pack-center" @click="textImgVisible = true"><svg-icon icon-class="img"/></span>
            <span class="icon flex flex-align-center flex-pack-center"><svg-icon icon-class="face"/></span>
          </div>
        </div>
        <div class="footer-right flex flex-1">
          <div class="upload-img flex flex-pack-center flex-align-center" v-show="textImgVisible">
            <img src="../assets/logo.png"/>
            <svg-icon icon-class="close-no-circle" @click.native="textImgVisible = false"/>
          </div>
          <div class="chat-input flex-1" :class="{'move': textImgVisible}">
            <input type="text" placeholder="说点什么吧！">
          </div>
          <div class="chat-submit-btn flex flex-align-center">
            <svg-icon icon-class="plane"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="fixed-bgds-btns">
    <div class="f-btn" @click="bpWindowVisible = true"><img src="../assets/bp-btn.png"/></div>
    <div class="f-btn" @click="dsindowVisible = true"><img src="../assets/ds-btn.png"/></div>
  </div>
  <bp-window v-model="bpWindowVisible"></bp-window>
  <ds-window v-model="dsindowVisible"></ds-window>
  
  </div>
</template>

<script>
import { XDialog } from 'vux'
import Msg from '../components/Main/Msg'
import MsgImg from '../components/Main/MsgImg'
import MsgOnlyImg from '../components/Main/Img'
import BpMsg from '../components/Main/BpMsg'
import DsMsg from '../components/Main/DsMsg'
import BpWindow from '../components/Main/BpWindow'
import DsWindow from '../components/Main/DsWindow'
// type 0 msg type 1 msgImg type 2 Img tpye 3 bp type 4 ds
export default {
  data () {
    return {
      chatlist: [{
        content: '重金霸屏，献给未来的你你你你你啊~',
        likes: 666,
        type: 3
      }, {
        content: '每一秒钟就有我的笑容~',
        likes: 688,
        type: 4
      }, {
        content: '黑夜问白天，能不能赦免，灰色的人间',
        likes: 5,
        type: 0
      }, {
        content: '冰封的眼泪，一滴就很咸',
        likes: 15,
        type: 1
      }, {
        content: '你说你有点难追',
        likes: 666,
        type: 2
      }, {
        content: '你会怎么',
        likes: 666,
        type: 0
      }],
      bpWindowVisible: false,
      dsindowVisible: false,
      textImgVisible: false
    }
  },
  mounted () {
  },
  methods: {
    like (index) {
      this.chatlist[index].likes++
    },
    openDialog () {
      this.$bpDialog({
        title: '提示啊',
        content: '<b>我有没有加粗</b>',
        stopAuto: false,
        confirmCallback: () => {
          setTimeout(() => {
            this.$bpDialog.hide()
          }, 3000)
        }
      })
    }
  },
  components: {
    Msg,
    MsgImg,
    MsgOnlyImg,
    BpMsg,
    DsMsg,
    BpWindow,
    DsWindow,
    XDialog
  }
}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.container {
  color: #fff;
}
.main {
  height: 100%;
  background: @bgColor;
}
.main-header {
  padding: 0.2rem 0;
  .main-header-left {
    margin-left: 0.6rem;
    width: 1.7rem;
    height: 0.8rem;
    background-color: @bubleBg;
    border-radius: 0 50px 50px 0;
    position: relative;
  }
  .main-header-avatar {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 0.8rem;
    height: 0.8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main-header-user {
    margin-left: 0.4rem;
    .nickname {
      line-height: 1;
      margin-bottom: 4px;
    }
  }
  .boardcast-icon {
    width: 0.32rem;
    height: 0.32rem;
    display: block;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  .boardcast-scroller {
    width: 3.68rem;
    height: 0.4rem;
    overflow: auto;
  }
  .scroller-wrap {
    width: 100%;
    height: 100%;
    line-height: 0.4rem;
  }
}
.main-content {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.footer {
  padding: 0.15rem;
  border-top: 0.5px solid rgba(255, 255, 255, 0.4);
  .svg-icon {
    width: 0.4rem;
    height: 0.4rem;
    display: block;
  }
}
.footer-icons {
  span {
    width: 0.7rem;
    height: 0.7rem;
    background-color: @bubleBg;
    border-radius: 50%;
    margin-right: 0.15rem;
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
#fixed-bgds-btns {
  position: absolute;
  bottom: 1.4rem;
  right: 0;
  img {
    width: 1.34rem;
  }
}
.chat-submit-btn {
  margin-right: 0.3rem;
}

@media screen and (min-width: 320px) and (max-width: 374px) {
  .nickname {
    font-size: 13px;
  }
}
</style>
