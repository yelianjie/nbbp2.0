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
        <div class="header-ball"></div>
      </div>
      <div class="flex flex-1 main-header-right flex-align-center">
        <img src="../assets/boardcast-icon.png" class="boardcast-icon">
        <div class="boardcast-scroller flex-1">
          <div class="scroller-wrap">
            我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强
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
            <span class="icon flex flex-align-center flex-pack-center"><svg-icon icon-class="img"/></span>
            <span class="icon flex flex-align-center flex-pack-center"><svg-icon icon-class="face"/></span>
          </div>
        </div>
        <span class="buble-place left"></span>
        <div class="footer-right flex flex-1">
          <div class="upload-img"></div>
          <div class="chat-input flex-1">
            <input type="text" placeholder="说点什么吧！">
          </div>
          <div class="chat-submit-btn flex flex-align-center">
            <svg-icon icon-class="plane"/>
          </div>
        </div>
        <span class="buble-place right"></span>
      </div>
    </div>
  </div>
  <div id="fixed-bgds-btns">
    <div class="f-btn" @click="bpWindowVisible = true"><img src="../assets/bp-btn.png"/></div>
    <div class="f-btn"><img src="../assets/ds-btn.png"/></div>
  </div>
  <bp-window v-model="bpWindowVisible"></bp-window>
  </div>
</template>

<script>
import Msg from '../components/Main/Msg'
import MsgImg from '../components/Main/MsgImg'
import MsgOnlyImg from '../components/Main/Img'
import BpMsg from '../components/Main/BpMsg'
import DsMsg from '../components/Main/DsMsg'
import BpWindow from '../components/Main/BpWindow'
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
      bpWindowVisible: false
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
    BpWindow
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
    width: 1.3rem;
    height: 0.8rem;
    background-color: @bubleBg;
    position: relative;
  }
  .header-ball {
    position: absolute;
    width: 0.36rem;
    height: 0.8rem;
    right: 0;
    top: 0;
    transform: translate3d(100%, 0, 0);
    background-color: transparent;
    overflow: hidden;
    &:after {
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      .radius();
      background-color: @bubleBg;
      left: -0.44rem;
      content: "";
    }
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
  .main-header-right {
    margin-left: 0.4rem;
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
}
.buble-place {
    width: 0.36rem;
    height: 0.7rem;
    background-color: transparent;
    overflow: hidden;
    display: block;
    position: relative;
    &:after {
      position: absolute;
      width: 0.7rem;
      height: 0.7rem;
      .radius();
      background-color: @bubleBg;
      content: "";
    }
    &.right:after {
      transform: translateX(-50%);
    }
  }
.chat-input {
  margin-right: 10px;
  input {
    background-color: transparent;
    width: 100%;
    border: 0;
    line-height: 0.3rem;
    padding: 0.2rem 0 0.2rem 4px;
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

@media screen and (min-width: 414px) and (max-width: 414px) {
  .main-header .header-ball {
    right: 1px;
  }
  .footer-right .buble-place.left {
  }
  .footer-right .buble-place.right {
  }
}

@media screen and (min-width: 320px) and (max-width: 374px) {
  .chat-input {
    input {
      padding: 0.2rem 0 0.15rem 4px;
    }
  }
  .nickname {
    font-size: 13px;
  }
}
</style>
