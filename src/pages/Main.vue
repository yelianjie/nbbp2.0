<template>
  <div class="container">
    <onlines :peoples="onlinePeople" @onShowCard="showCard" v-model="onlineVisible"></onlines>
    <div class="main flex flex-v">
      <div class="flex boardcast flex-align-center">
        <img src="../assets/boardcast-icon.png" class="boardcast-icon">
        <div class="boardcast-scroller flex-1">
          <div class="scroller-wrap f14">
            我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强刷本领强粉刷本领强刷本领强粉刷本领强
            <!--<marquee direction="left" befavior="scroll" scrollamount="4">我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强</marquee>-->
          </div>
        </div>
      </div>
    <div class="main-header flex flex-align-center">
      <div class="flex main-header-left flex-align-center">
        <div class="main-header-avatar">
          <router-link :to="{path: '/UserCenter'}"><img src="../assets/logo.png" class="circle"></router-link>
        </div>
      </div>
      <div class="flex-1 main-header-right">
        <div class="online-persons" v-for="(v, i) in onlinePeople" :key="i" @click="showCard">
          <img :src="v.avatar" class="circle person-avatar"/>
        </div>
      </div>
      <div class="white more f13 flex flex-align-center" @click="onlineVisible = true"><span>更多</span><svg-icon  @click.native="onlineVisible = true" icon-class="arrow-right"/></div>
    </div>
    <div class="flex-1 main-content" ref="scrollWrapper">
      <infinite-loading @infinite="infiniteHandler" direction="top" :distance="0">
        <div class="typing-indicator" slot="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </infinite-loading>
      <template v-for="(v, i) in chatlist">
        <msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 0" @onAvatar="showCard" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></msg>
        <msg-img :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 1" @onAvatar="showCard" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></msg-img>
        <msg-only-img :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 2" @onAvatar="showCard" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></msg-only-img>
        <bp-msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 3" @onAvatar="showCard" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></bp-msg>
        <ds-msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 4" @onAvatar="showCard" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></ds-msg>
      </template>
    </div>
    <footer-main @onSendMsg=""></footer-main>
  </div>
  <div id="fixed-bgds-btns">
    <div class="f-btn" @click="bpWindowVisible = true"><img src="../assets/bp-btn.png"/></div>
    <div class="f-btn" @click="dsindowVisible = true"><img src="../assets/ds-btn.png"/></div>
  </div>
  <bp-window v-model="bpWindowVisible"  @onBuy="buyDialogVisible = true"></bp-window>
  <ds-window v-model="dsindowVisible"  @onBuy="buyDialogVisible = true"></ds-window>
  <x-dialog v-model="userDialogVisible" :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="user-box">
      <div class="user-info flex flex-v flex-align-center">
        <img src="../assets/logo.png" class="avatar"/>
        <p class="uname f18">鲜花</p>
        <div class="msg-item-top flex flex-align-center">
          <span class="level level-1">V1</span>
          <span class="sex sex-male"><svg-icon icon-class="male" /></span>
          <span class="msg-name">游侠</span>
        </div>
        <p class="sign f14">签名：暂无签名</p>
        <div class="user-dialog-bottom flex-1 flex" style="width:100%;">
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="bp">
            <img src="../assets/gift-b-icon.png"/>
            <span>为TA送礼</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="ds">
            <img src="../assets/ba-b-icon.png"/>
            <span>为TA霸屏</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="like">
            <img src="../assets/like-b-icon.png"/>
            <span>为TA点赞</span>
          </div>
        </div>
      </div>
    </div>
    <div @click="userDialogVisible = false">
      <svg-icon icon-class="close" className="close-u-dialog-btn"/>
    </div>
  </x-dialog>
  <x-dialog v-model="shareMaskVisible" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
    <div class="fullscreen"  @click="shareMaskVisible = false">
      <img src="../assets/share.png" style="max-width: 100%;float:right;width: 4.2rem;margin: 0.2rem 0.2rem 0 0;"/>
    </div>
  </x-dialog>
  <x-dialog v-model="concernVisible" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="qrcode-box">
      <div class="qrcode-info flex flex-v flex-align-center">
        <img src="../assets/jj.jpg" class="qrcode"/>
        <p class="f14">请长按二维码</p>
        <p class="f14">关注牛霸霸屏官方公众号</p>
        <p class="f14">即可加入CMK酒吧聊天室</p>
      </div>
    </div>
  </x-dialog>
  <bp-dialog :title="'确认支付'" v-model="buyDialogVisible" @onConfirm="confirmBuy">
    <div class="">
      <div class="" style="font-size: 20px;margin-bottom: 10px;">{{buyDialogInfo.price}}<img src="../assets/small.png"/></div>
      <p style="color: #88878f;"><svg-icon icon-class="close" />当前剩余余额可用：<svg-icon icon-class="close" />{{buyDialogInfo.rest}}</p>
    </div>
  </bp-dialog>
  </div>
</template>

<script>
import { XDialog } from 'vux'
import BpDialog from '../components/bpDialog'
import InfiniteLoading from 'vue-infinite-loading'
import FooterMain from '../components/Main/Footer'
import Msg from '../components/Main/Msg'
import MsgImg from '../components/Main/MsgImg'
import MsgOnlyImg from '../components/Main/Img'
import BpMsg from '../components/Main/BpMsg'
import DsMsg from '../components/Main/DsMsg'
import BpWindow from '../components/Main/BpWindow'
import DsWindow from '../components/Main/DsWindow'
import Onlines from '../components/Main/Onlines'
import { mapGetters } from 'vuex'
// type 0 msg type 1 msgImg type 2 Img tpye 3 bp type 4 ds
export default {
  data () {
    return {
      chatlist: [],
      list: [{
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
      onlinePeople: [{
        sex: 2,
        name: '娄艺潇',
        avatar: 'https://tvax2.sinaimg.cn/crop.0.0.512.512.50/4e7f0c83ly8fe9xa2lqksj20e80e83z3.jpg'
      }, {
        sex: 1,
        name: '思想聚焦',
        avatar: 'https://tva4.sinaimg.cn/crop.0.0.180.180.50/67dd74e0jw1e8qgp5bmzyj2050050aa8.jpg'
      }, {
        sex: 1,
        name: '西门町在宁波',
        avatar: 'https://tvax3.sinaimg.cn/crop.0.0.512.512.50/8216df68ly8ff1b8rtm8zj20e80e83yn.jpg'
      }, {
        sex: 1,
        name: '人民日报',
        avatar: 'https://tva1.sinaimg.cn/crop.0.3.1018.1018.50/a716fd45gw1ev7q2k8japj20sg0sg779.jpg'
      }, {
        sex: 1,
        name: '当时我就震惊了',
        avatar: 'https://tva1.sinaimg.cn/crop.0.0.440.440.50/6927e7a5jw8ezf44123d4j20c80c80tg.jpg'
      }, {
        sex: 1,
        name: '同道大叔',
        avatar: 'https://tva4.sinaimg.cn/crop.0.0.512.512.50/b6f28977jw8eqb042gir6j20e80e8aa9.jpg'
      }, {
        sex: 2,
        name: '短腿王怼怼',
        avatar: 'https://tvax4.sinaimg.cn/crop.0.0.750.750.50/a0c1fb53ly8fn3kukoes5j20ku0kudh5.jpg'
      }, {
        sex: 2,
        name: '头大就是硬道理',
        avatar: 'https://tvax1.sinaimg.cn/crop.0.9.494.494.50/bd30a422ly8fj0d8js9zwj20dq0e874q.jpg'
      }, {
        sex: 2,
        name: '林依晨Ariel',
        avatar: 'https://tvax1.sinaimg.cn/crop.0.0.512.512.50/6a661712ly8fnshg7z2z7j20e80e8js8.jpg'
      }, {
        sex: 1,
        name: 'jasonchenmusic',
        avatar: 'https://tvax4.sinaimg.cn/crop.0.1.509.509.50/73a68773ly8fea294f5i0j20e50e83yq.jpg'
      }],
      bpWindowVisible: false,
      dsindowVisible: false,
      userDialogVisible: false,
      shareMaskVisible: false,
      buyDialogVisible: false,
      concernVisible: false,
      onlineVisible: false,
      currentUserInfo: {},
      height: 0,
      noMore: false
    }
  },
  mounted () {
  },
  watch: {
    height: function (newVal, oldVal) {
      var diff = newVal - oldVal
      this.$refs.scrollWrapper.scrollTop = diff
    }
  },
  methods: {
    infiniteHandler ($state) {
      setTimeout(() => {
        const temp = []
        for (var i = 0; i < 5; i++) {
          var index = Math.floor(Math.random(0, 1) * this.list.length)
          temp.push(this.list[index])
        }
        this.chatlist = temp.concat(this.chatlist)
        this.height = this.$refs.scrollWrapper.scrollHeight
        $state.loaded()
        // $state.complete()
      }, 1000)
    },
    showCard (data) {
      this.currentUserInfo = data
      this.userDialogVisible = true
    },
    like () {
      // this.chatlist[index].likes++
    },
    bp () {
      this.onlineVisible = false
      this.userDialogVisible = false
      this.bpWindowVisible = true
    },
    ds () {
      this.onlineVisible = false
      this.userDialogVisible = false
      this.dsindowVisible = true
    },
    confirmBuy () {
      this.buyDialogVisible = false
      /* setTimeout(() => {
        this.buyDialogVisible = false
      }, 3000) */
    }
  },
  computed: {
    ...mapGetters('app', {
      buyDialogInfo: 'buyDialogInfo'
    })
  },
  components: {
    FooterMain,
    BpDialog,
    Msg,
    MsgImg,
    MsgOnlyImg,
    BpMsg,
    DsMsg,
    BpWindow,
    DsWindow,
    Onlines,
    XDialog,
    InfiniteLoading
  }
}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.container {
  color: #fff;
  overflow: hidden;
}
.main {
  height: 100%;
  background: @bgColor;
}
.main-header {
  padding: 0.1rem 0;
  .main-header-left {
    margin-left: 0.24rem;
    position: relative;
  }
  .main-header-avatar {
    img {
      width: 0.8rem;
      height: 0.8rem;
      display: block;
    }
  }
  .main-header-right {
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-left: 0.24rem;
    font-size: 0;
    white-space: nowrap;
    padding: 2px 0;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
      box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
      background-color: #e8e8e8;
    }

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000000;
      border: 0px solid #555555;
    }
  }
  .person-avatar {
    display: block;
    width: 0.64rem;
    height: 0.64rem;
  }
  .online-persons {
    margin-right: 0.2rem;
    width: 0.64rem;
    height: 0.64rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }
  .more {
    padding: 0 10px; 
  }
}
.boardcast {
  margin: 0.2rem 0;
}
.boardcast-icon {
  width: 0.4rem;
  height: 0.36rem;
  display: block;
  margin-left: 0.24rem;
  margin-right: 0.2rem;
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
  transform: translate3d(100%, 0, 0);
  animation: scrollNotice 15s linear 0s infinite;
}
@keyframes scrollNotice {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
.main-content {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

#fixed-bgds-btns {
  position: absolute;
  bottom: 1.4rem;
  right: 0;
  img {
    width: 1.34rem;
  }
}

.user-info {
  width: 5.4rem;
  background: #fff url('../assets/card-bg.png') no-repeat top;
  background-size: contain;
  border-radius: 15px;
  margin: 0 auto;
  .avatar {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    margin: 0.6rem 0 0.4rem;
  }
  .uname {
    color: #161a25;
    margin-bottom: 0.2rem;
  }
  .msg-name {
    color: #161a25;
  }
  .sign {
    color: #88878f;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
}
.user-dialog-bottom {
  background-color: #d9dbea;
  border-radius: 0 0 15px 15px;
  padding: 0.25rem 0;
  .u-d {
    * {
      display: block;
    }
    span {
      font-size: 13px;
      color: #6c6a75;
      margin-top: 4px;
    }
  }
}
.close-u-dialog-btn.svg-icon {
  width: 0.7rem;
  height: 0.7rem;
  box-sizing: content-box;
  display: block;
  margin: 0.5rem auto;
}
.qrcode-info {
  width: 4.75rem;
  padding: 0.6rem 0;
  background: #fff url('../assets/qrcode-bg.png') no-repeat top;
  background-size: contain;
  border-radius: 15px;
  margin: 0 auto;
  .qrcode {
    width: 2.2rem;
    height: 2.2rem;
    margin-bottom: 0.8rem;
  }
  p {
    line-height: 0.4rem;
    color: #3d404f;
  }
}
.typing-indicator {
  background-color: rgba(157, 157, 157, 0.2);
  will-change: transform;
  width: auto;
  border-radius: 50px;
  padding: 0.2rem;
  display: table;
  margin: 5px auto;
  position: relative;
}

.typing-indicator span {
  height: 0.2rem;
  width: 0.2rem;
  float: left;
  margin: 0 1px;
  background-color: #9E9EA1;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
}
.typing-indicator span:nth-of-type(1) {
  -webkit-animation: 1s blink infinite 0.3333s;
          animation: 1s blink infinite 0.3333s;
}
.typing-indicator span:nth-of-type(2) {
  -webkit-animation: 1s blink infinite 0.6666s;
          animation: 1s blink infinite 0.6666s;
}
.typing-indicator span:nth-of-type(3) {
  -webkit-animation: 1s blink infinite 0.9999s;
          animation: 1s blink infinite 0.9999s;
}

@-webkit-keyframes blink {
  50% {
    opacity: 1;
  }
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}

@media screen and (min-width: 320px) and (max-width: 374px) {
  /* .nickname {
    font-size: 13px;
  } */
}
</style>
