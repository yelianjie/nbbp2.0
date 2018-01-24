<template>
  <div class="container">
    <div class="main flex flex-v">
    <div class="main-header flex flex-align-center">
      <div class="flex main-header-left flex-align-center">
        <div class="main-header-avatar">
          <img src="../assets/logo.png">
        </div>
        <div class="main-header-user flex-1 flex flex-v flex-pack-center flex-align-center">
          <p class="nickname overflow f14">鲜花</p>
          <span class="level level-1">V1</span>
        </div>
      </div>
      <div class="flex flex-1 main-header-right flex-align-center">
        <img src="../assets/boardcast-icon.png" class="boardcast-icon">
        <div class="boardcast-scroller flex-1">
          <div class="scroller-wrap f14">
            <marquee direction="left" befavior="scroll" scrollamount="0">我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强</marquee>
            
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 main-content" ref="scrollWrapper">
      <infinite-loading @infinite="infiniteHandler" direction="top" :distance="0"></infinite-loading>
      <template v-for="(v, i) in chatlist">
        <msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 0" @onAvatar="userDialogVisible = true" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></msg>
        <msg-img :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 1" @onAvatar="userDialogVisible = true" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></msg-img>
        <msg-only-img :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 2" @onAvatar="userDialogVisible = true" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></msg-only-img>
        <bp-msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 3" @onAvatar="userDialogVisible = true" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></bp-msg>
        <ds-msg :key="i" :index="i" :data="v" @onLike="like" v-if="v.type == 4" @onAvatar="userDialogVisible = true" @onShare="shareMaskVisible = true" @onBp="bp" @onDs="ds"></ds-msg>
      </template>
    </div>
    <footer-main @onBuy="buyDialogVisible = true"></footer-main>
  </div>
  <div id="fixed-bgds-btns">
    <div class="f-btn" @click="bpWindowVisible = true"><img src="../assets/bp-btn.png"/></div>
    <div class="f-btn" @click="dsindowVisible = true"><img src="../assets/ds-btn.png"/></div>
  </div>
  <bp-window v-model="bpWindowVisible"></bp-window>
  <ds-window v-model="dsindowVisible"></ds-window>
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
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center">
            <img src="../assets/gift-b-icon.png"/>
            <span>为TA送礼</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center">
            <img src="../assets/ba-b-icon.png"/>
            <span>为TA霸屏</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center">
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
  <!-- <bp-dialog :title="'确认支付'" v-model="buyDialogVisible" @onConfirm="confirmBuy">
    <div class="">
      <div class="" style="font-size: 20px;margin-bottom: 10px;">30<img src="../assets/small.png"/></div>
      <p style="color: #88878f;"><svg-icon icon-class="close" />当前剩余余额可用：<svg-icon icon-class="close" />45</p>
    </div>
  </bp-dialog> -->
  <!--<bp-dialog :bg-title="true" :bgSrc="chargeBg" v-model="buyDialogVisible" @onConfirm="confirmBuy">
    <div class="">
      <p style="font-size: 13px;color:#6c6a75;text-align: left;
      margin-bottom: 10px;">当前有102元收益可兑换成牛角</p>
      <div><input type="number" class="boderbox" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
      <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span style="margin-left:6px;">1牛角=1元</span></div>
    </div>
  </bp-dialog>-->
  <!--<bp-dialog :bg-title="true" :bgSrc="despoitBg" v-model="buyDialogVisible" @onConfirm="confirmBuy">
    <div class="">
      <p style="font-size: 13px;color:#6c6a75;text-align: left;
      margin-bottom: 10px;">当前收益：102元</p>
      <div><input type="number" class="boderbox" placeholder="请输入要提现的金额" style="outline: none;border: 1px solid #ccc;border-radius: 5px;text-align:center;color: #161a25;width:100%;line-height:24px;padding: 4px 8px;"/></div>
      <div style="color:#6c6a75;text-align: left;font-size: 12px;margin-top:10px;"><svg-icon icon-class="notice"/><span>目前仅支持整百数提现</span></div>
    </div>
  </bp-dialog>-->
  </div>
</template>

<script>
import chargeBg from '../assets/charge-bg.png'
import despoitBg from '../assets/despoit-bg.png'
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
// type 0 msg type 1 msgImg type 2 Img tpye 3 bp type 4 ds
export default {
  data () {
    return {
      chargeBg: chargeBg,
      despoitBg: despoitBg,
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
      bpWindowVisible: false,
      dsindowVisible: false,
      userDialogVisible: false,
      shareMaskVisible: false,
      buyDialogVisible: false,
      concernVisible: false,
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
      }, 1000)
    },
    like (index) {
      this.chatlist[index].likes++
    },
    bp (index) {
      this.bpWindowVisible = true
    },
    ds (index) {
      this.dsindowVisible = true
    },
    confirmBuy () {
      setTimeout(() => {
        this.buyDialogVisible = false
      }, 3000)
    }
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
    margin-right: 0.3rem;
    .nickname {
      line-height: 1;
      margin-bottom: 4px;
      width: 1rem;
      text-align: center;
    }
  }
  .boardcast-icon {
    width: 0.36rem;
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
  padding: 0.5rem 0;
  box-sizing: content-box;
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
@media screen and (min-width: 320px) and (max-width: 374px) {
  /* .nickname {
    font-size: 13px;
  } */
}
</style>
