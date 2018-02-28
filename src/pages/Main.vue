<template>
  <div class="container" v-if="show">
    <onlines :peoples="onlinePeople" @onShowCard="showCard" v-model="onlineVisible"></onlines>
    <div class="main flex flex-v">
      <div class="flex boardcast flex-align-center">
        <img src="../assets/boardcast-icon.png" class="boardcast-icon">
        <div class="boardcast-scroller flex-1 flex flex-align-center">
          <MarqueeTips v-if="notice" class="f15" :content="notice" :speed="15"></MarqueeTips>
          <!--<div class="scroller-wrap f14">
            我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强刷本领强粉刷本领强刷本领强粉刷本领强
            <marquee direction="left" befavior="scroll" scrollamount="4">我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强</marquee>
          </div>-->
        </div>
      </div>
    <div class="main-header flex flex-align-center">
      <div class="flex main-header-left flex-align-center">
        <div class="main-header-avatar">
          <template v-if="userInfo.grade_title && userInfo.grade_title != '平民'">
            <router-link :to="{path: '/UserCenter'}"><span class="level-icon-avatar" :style="{'background-image': 'url('+$options.filters.filterLevel(userInfo.grade_title, 'avatarIcon')+')'}"></span></router-link>
            <img :src="userInfo.headimgurl | prefixImageUrl" class="circle">
          </template>
          <template v-else>
            <router-link :to="{path: '/UserCenter'}"><img :src="userInfo.headimgurl | prefixImageUrl" class="circle"></router-link>
          </template>
        </div>
      </div>
      <div class="flex-1 main-header-right">
        <div class="online-persons" v-for="(v, i) in onlinePeople" :key="i" @click="showCard(v)">
          <img :src="v.headimgurl | prefixImageUrl" class="circle person-avatar"/>
        </div>
      </div>
      <div class="white more f13 flex flex-align-center" @click="onlineVisible = true"><span>更多</span><svg-icon  @click.native="onlineVisible = true" icon-class="arrow-right"/></div>
    </div>
    <div class="flex-1 main-content" ref="scrollWrapper">
      <infinite-loading @infinite="infiniteHandler" direction="top" :distance="1" ref="infiniteLoading">
        <div class="typing-indicator" slot="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span slot="no-more" class="f13">再往上拉就没有了~</span>
      </infinite-loading>
      <template v-for="(v, i) in chatlist">
        <msg :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onLike="like" v-if="v.msg_type == 0 && v.img == ''" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></msg>
        <msg-img :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onPreviewImage="previewImage" @onLike="like" v-if="v.content != '' && v.msg_type == 0 && v.img != ''" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></msg-img>
        <msg-only-img :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onPreviewImage="previewImage" @onLike="like" v-if="v.content == '' && v.msg_type == 0" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></msg-only-img>
        <bp-msg :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onPreviewImage="previewImage" @onLike="like" v-if="v.msg_type == 2" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></bp-msg>
        <ds-msg :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onLike="like" v-if="v.msg_type == 1" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></ds-msg>
      </template>
    </div>
    <footer-main></footer-main>
  </div>
  <div id="fixed-bgds-btns">
    <div class="f-btn" @click="screenForAll"><img src="../assets/bp-btn.png"/></div>
    <div class="f-btn" @click="rewardForAll"><img src="../assets/ds-btn.png"/></div>
  </div>
  <bp-window v-model="bpWindowVisible" ref="bpWindow" :times="barDataInfo.time" :screens="barDataInfo.screen" @onBuy="buyDialogVisible = true"></bp-window>
  <ds-window v-model="dsWindowVisible" ref="dsWindow" :gifts="barDataInfo.gift" @onBuy="buyDialogVisible = true"></ds-window>
  <x-dialog v-model="userDialogVisible" :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="user-box">
      <div class="user-info">
        <div class="pr">
          <template v-if="currentUserInfo.grade_title != '平民'">
            <span class="level-icon-id" :style="{'background-image': 'url('+$options.filters.filterLevel(currentUserInfo.grade_title, 'avatarIcon')+')'}"></span>
            <img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl" class="avatar" style="border: 0;"/>
          </template>
          <template v-else>
            <img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl" class="avatar"/>
          </template>
        </div>
        <!--<img src="../assets/logo.png" class="avatar"/>-->
        <p class="uname f18 white">{{currentUserInfo.initiator_nickname}}</p>
        <div class="msg-item-top flex flex-pack-center">
          <span class="sex sex-male"><svg-icon icon-class="male" v-if="currentUserInfo.sex == 1"/><svg-icon icon-class="female" v-if="currentUserInfo.sex == 2"/></span>
          <span class="level" style="background-color: #625bc3;">{{currentUserInfo.city}}</span>
          <span class="level" :class="'level-' + currentUserInfo.mc_level_id"  v-if="currentUserInfo.grade_title != '平民'">{{currentUserInfo.grade_title}}</span>
        </div>
        <p class="sign f14" v-if="currentUserInfo.autograph">签名：{{currentUserInfo.autograph}}</p>
        <p class="sign f14" v-else>签名：暂无</p>
        <div class="user-dialog-bottom flex" style="width:100%;">
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="ds">
            <img src="../assets/gift-b-icon.png"/>
            <span>为TA送礼</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="bp">
            <img src="../assets/ba-b-icon.png"/>
            <span>为TA霸屏</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="like(currentUserInfo)">
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
  <bp-dialog :title="'确认支付'" v-model="buyDialogVisible" @onConfirm="confirmBuy" :confirmText="buyDialogInfo.confirmText">
    <div class="">
      <div style="font-size: 26px;margin-bottom: 8px;">{{buyDialogInfo.price}}<svg-icon icon-class="coin" style="width:0.32rem;fill: #fdc635;margin-left:2px;vertical-align: bottom;"/></div>
      <p style="color: #88878f;"><svg-icon icon-class="tip" style="margin-top:-2px;margin-right:2px;" />当前余额可用：<svg-icon icon-class="coin"  style="margin-top:-2px;margin-right:2px;"/>{{userInfo.balance}}</p>
      <p class="f12" v-if="barManagerInfo.isManager" style="color:#b187e4;margin-top:6px;">今日剩余免费霸屏、打赏{{barManagerInfo.game_count}}次</p>
      <p class="f13" v-if="buyDialogInfo.isCharge" style="color:#8bc5ec;margin-top:6px;">余额不足，请充值</p>
    </div>
  </bp-dialog>
  <bp-dialog :title="'提示'" v-model="deleteDialogVisible" @onConfirm="confirmDelete">
    <div class="">
      <div class="" style="font-size: 20px;margin-bottom: 8px;">
      <p class="f16" style="color:#7b7b7b;margin-top:6px;">确定删除该消息吗</p></div>
    </div>
  </bp-dialog>
  <transition name="fade-out">
    <div class="adbg fullscreen" v-if="adVisible && barDataInfo.advert" :style="{'background-image': 'url('+barDataInfo.advert.phone.url+')'}"></div>
  </transition>
  </div>
</template>

<script>
import { getBarAllInfo, isSubscribe, getNewestMsg, getMaxMsg, getBarNotice, addBpDsMsg, getOnlines, favoriteDo, deleteMsg } from '@/api/'
import { XDialog } from 'vux'
import MarqueeTips from 'vue-marquee-tips'
import BpDialog from '../components/bpDialog'
// import InfiniteLoading from 'vue-infinite-loading'
import InfiniteLoading from '../components/InfiniteLoading'
import FooterMain from '../components/Main/Footer'
import Msg from '../components/Main/Msg'
import MsgImg from '../components/Main/MsgImg'
import MsgOnlyImg from '../components/Main/Img'
import BpMsg from '../components/Main/BpMsg'
import DsMsg from '../components/Main/DsMsg'
import BpWindow from '../components/Main/BpWindow'
import DsWindow from '../components/Main/DsWindow'
import Onlines from '../components/Main/Onlines'
import { mapGetters, mapActions } from 'vuex'
import '@/vendor/tween'
import '@/vendor/animation'
import ScrollFix from '@/vendor/ScrollFix'
// type 0 msg type 1 msgImg type 2 Img tpye 3 bp type 4 ds
export default {
  data () {
    return {
      notice: '',
      show: false,
      chatlist: [],
      list: [],
      onlinePeople: [],
      bpWindowVisible: false,
      dsWindowVisible: false,
      userDialogVisible: false,
      shareMaskVisible: false,
      buyDialogVisible: false,
      concernVisible: false,
      onlineVisible: false,
      deleteDialogVisible: false,
      deleteInfo: {},
      height: 0,
      noMore: false,
      barDataInfo: {},
      adVisible: true,
      newsTimer: null,
      noticeTimer: null,
      onlineTimer: null,
      requestParams: {
        ht_id: this.$route.params.id,
        min_id: 0
      },
      requestNewParams: {
        ht_id: this.$route.params.id,
        id: 0
      },
      firstLoading: true,
      scrollFix: null,
      lockHeight: false
    }
  },
  beforeDestroy () {
    clearTimeout(this.newsTimer)
    clearTimeout(this.noticeTimer)
    clearTimeout(this.onlineTimer)
    if (this.scrollFix) {
      this.scrollFix.destory()
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    if (to.name !== 'Charge') {
      this.ChangeBuyDialogInfo({})
    }
    next()
  },
  created () {
    if (Object.keys(this.userInfo).length === 0) {
      this.getUserInfo()
    }
    getBarAllInfo({ht_id: this.$route.params.id}).then((res) => {
      document.title = res.result.ht_msg.name
      // prefixImageUrl
      // 设置是否酒吧的管理员，免费霸屏次数 和是否是酒吧的吧主
      let post = {isManager: false, game_count: 0}
      if (res.result.userinfo.isHMM > 0) {
        post = {
          isManager: true,
          game_count: res.result.userinfo.game_count
        }
      }
      if (res.result.userinfo.isMer > 0) {
        post.isHost = true
      }
      this.$store.commit('user/SET_BAR_MANAGER', post)
      res.result.advert && (res.result.advert.phone.url = this.$options.filters.prefixImageUrl(res.result.advert.phone.url))
      this.barDataInfo = res.result
      var img = new Image()
      img.onload = () => {
        this.show = true
        this.$nextTick(() => {
          this.scrollFix = new ScrollFix(this.$refs.scrollWrapper)
        })
        setTimeout(() => {
          this.adVisible = false
          setTimeout(() => {
            // 如果是充值跳回来的，显示之前勾选的选项
            if (this.buyDialogInfo.hasOwnProperty('postParams')) {
              if (this.buyDialogInfo.postParams.type === 2) {
                this.bpWindowVisible = true
                this.$refs.bpWindow.initSelected(this.buyDialogInfo.postParams)
              } else if (this.buyDialogInfo.postParams.type === 1) {
                this.dsWindowVisible = true
                this.$refs.dsWindow.initSelected(this.buyDialogInfo.postParams)
              }
            }
          }, 1000)
        }, 1000)
      }
      img.onerror = () => {
        this.show = true
      }
      img.src = res.result.advert.phone.url
    })
    isSubscribe().then(() => {
    }).catch(() => {
      this.concernVisible = true
    })
    this.loopGetNotice(0)
    this.loopOnlines(0)
  },
  mounted () {
  },
  watch: {
    height: function (newVal, oldVal) {
      if (this.lockHeight) {
        this.lockHeight = false
        return false
      }
      var diff = newVal - oldVal
      this.$refs.scrollWrapper.scrollTop = diff
    }
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    loopOnlines (time) {
      this.onlineTimer = setTimeout(() => {
        getOnlines({ht_id: this.$route.params.id}).then((res) => {
          Array.isArray(res.result) && (this.onlinePeople = res.result)
        }).finally(() => {
          clearTimeout(this.onlineTimer)
          this.loopOnlines(1000 * 10)
        })
      }, time)
    },
    loopGetNotice (time) {
      this.noticeTimer = setTimeout(() => {
        getBarNotice({ht_id: this.$route.params.id}).then((res) => {
          this.notice = res.result ? res.result.content : ''
        }).finally(() => {
          clearTimeout(this.noticeTimer)
          this.loopGetNotice(1000 * 60 * 5)
        })
      }, time)
    },
    loopGetNewMsg () {
      this.newsTimer = setTimeout(() => {
        getMaxMsg(this.requestNewParams).then((res) => {
          if (Array.isArray(res.result) && res.result.length > 0) {
            this.chatlist = this.chatlist.concat(res.result)
            this.$nextTick(() => {
              // 如果消息里有当前用户发的，滚动到底部
              var flag = false
              for (var i in res.result) {
                if (this.userInfo && (Number(res.result[i].initiator_mc_id) === Number(this.userInfo.id))) {
                  flag = true
                  break
                }
              }
              flag && this.scrollToEnd()
              this.lockHeight = true
              this.height = this.$refs.scrollWrapper.scrollHeight
            })
            res.result.sort((a, b) => b.id - a.id)
            this.requestNewParams.id = res.result[0].id
          }
        }).finally(() => {
          clearTimeout(this.noticeTimer)
          this.loopGetNewMsg()
        })
      }, 1000)
    },
    scrollToEnd () {
      var content = this.$refs.scrollWrapper
      Math.animation(content.scrollTop, content.scrollHeight - content.offsetHeight, function (value) {
        content.scrollTop = value
      }, 'Linear', 400)
    },
    infiniteHandler ($state) {
      /* this.lockHeight = true
      this.height = this.$refs.scrollWrapper ? this.$refs.scrollWrapper.scrollHeight : 0 */
      let params = Object.assign({}, this.requestParams)
      getNewestMsg(params).then((res) => {
        if (!Array.isArray(res.result)) {
          return false
        }
        var resLength = res.result.length
        if (resLength > 0) {
          this.requestParams.min_id = res.result[resLength - 1].id
        }
        res.result.sort((a, b) => a.id - b.id)
        /* res.result.map((v) => {
          v.levelIcon = this.Levels[v.grade_title] ? this.Levels[v.grade_title] : null
        }) */
        this.chatlist = res.result.concat(this.chatlist)
        this.$nextTick(() => {
          this.height = this.$refs.scrollWrapper.scrollHeight
          var chatLength = this.chatlist.length
          this.requestNewParams.id = chatLength > 0 ? this.chatlist[chatLength - 1].id : 0
          if (this.firstLoading) {
            this.loopGetNewMsg()
            this.firstLoading = false
            this.scrollToEnd()
          }
          if (res.result.length < 10) {
            $state.complete()
          } else {
            $state.loaded()
          }
        })
      })
    },
    showCard (info) {
      if (info) {
        info.initiator_headimgurl = info.headimgurl
        info.initiator_nickname = info.nickname
        info.initiator_mc_id = info.id
        this.$store.commit('main/SET_CURRENT_USER_INFO', info)
      }
      this.userDialogVisible = true
    },
    deleteMsg (data) {
      this.deleteDialogVisible = true
      this.deleteInfo = data
    },
    confirmDelete () {
      deleteMsg({msg_id: this.deleteInfo.id}).then((res) => {
        var find = this.chatlist.findIndex((v) => v.id === this.deleteInfo.id)
        if (find !== -1) {
          this.lockHeight = true
          this.chatlist.splice(find, 1)
          this.$nextTick(() => {
            this.height = this.$refs.scrollWrapper.scrollHeight
          })
          this.deleteDialogVisible = false
        }
      })
    },
    like (data) {
      console.log(data)
      console.log(this.currentUserInfo)
      favoriteDo({mc_id: data.initiator_mc_id, msg_id: data.id}).then((res) => {
        data.fabulous_count = ~~(data.fabulous_count) + 1
      })
    },
    share (data) {
      this.shareMaskVisible = true
      var title = ''
      var who = data.sendee_nickname ? data.sendee_nickname : '全场观众'
      if (data.msg_type === '2') {
        title = data.initiator_nickname + '重金' + data.title + data.odr_show_time + '秒，一起来围观互动！'
      } else if (data.msg_type === '1') {
        title = data.initiator_nickname + '送' + data.title + '给' + who + '，一起来玩！'
      }
      let shareParams = {
        title: title,
        desc: data.content,
        link: window.location.href,
        imgUrl: this.$options.filters.prefixImageUrl(data.initiator_headimgurl) // 分享图标
      }
      this.$wechat.onMenuShareTimeline({
        ...shareParams,
        success: function () {},
        cancel: function () {}
      })
      this.$wechat.onMenuShareAppMessage({
        ...shareParams,
        success: function () {},
        cancel: function () {}
      })
    },
    bp () {
      this.onlineVisible = false
      this.userDialogVisible = false
      this.bpWindowVisible = true
    },
    ds () {
      this.onlineVisible = false
      this.userDialogVisible = false
      this.dsWindowVisible = true
    },
    previewImage (pics) {
      this.$wechat.previewImage(pics)
    },
    confirmBuy () {
      if (this.buyDialogInfo.isCharge) {
        // 需要充值跳转充值页
        this.$router.push('/Charge')
      } else {
        // 直接购买
        addBpDsMsg(this.buyDialogInfo.postParams).then((res) => {
          this.$store.commit('user/SET_USER_INFO_BALANCE', res.result.balance)
          this.buyDialogVisible = false
          this.bpWindowVisible = false
          this.dsWindowVisible = false
          if (this.buyDialogInfo.postParams.type === 2) {
            this.$refs.bpWindow.reset()
          } else if (this.buyDialogInfo.postParams.type === 1) {
            this.$refs.dsWindow.reset()
          }
          // game_count - 1
          if (this.barManagerInfo.isManager) {
            var nextCount = Number(this.barManagerInfo.game_count) === 0 ? 0 : Number(this.barManagerInfo.game_count) - 1
            this.$store.commit('user/SET_BAR_MANAGER', {isManager: true, game_count: nextCount})
          }
        })
      }
      /* setTimeout(() => {
        this.buyDialogVisible = false
      }, 3000) */
    },
    screenForAll () {
      this.$store.commit('main/SET_CURRENT_USER_INFO', {})
      this.bpWindowVisible = true
    },
    rewardForAll () {
      this.$store.commit('main/SET_CURRENT_USER_INFO', {})
      this.dsWindowVisible = true
    }
  },
  computed: {
    ...mapGetters('app', {
      buyDialogInfo: 'buyDialogInfo'
    }),
    ...mapGetters('user', {
      userInfo: 'userInfo',
      barManagerInfo: 'barManagerInfo'
    }),
    ...mapGetters('main', {
      currentUserInfo: 'currentUserInfo'
    })
  },
  components: {
    MarqueeTips,
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
.adbg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 9999999;
}
.level-icon-avatar {
  display: block;
  position: absolute;
  left: -0.4rem;
  top: -0.3rem;
  width: 1.6rem;
  height: 1.42rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.container {
  color: #fff;
  overflow: hidden;
  height: 100%;
}
.main {
  height: 100%;
  background: @bgColor;
}
.main-header {
  padding: 0.1rem 0;
  .main-header-left {
    margin-left: 0.32rem;
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
    margin-left: 0.4rem;
    font-size: 0;
    white-space: nowrap;
    padding: 2px 0;
    text-align: right;
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
  overflow: hidden;
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
  margin-bottom: 1rem;
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
  background: #4c446b url('../assets/card-bg.png') no-repeat top;
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
  .level-icon-id + .avatar {
    width: 1.4rem;
    height: 1.4rem;
    border: 0;
    margin: 0.8rem 0 0.7rem;
  }
  .uname {
    margin-bottom: 0.2rem;
  }
  .msg-name {
    color: #161a25;
  }
  .sign {
    color: #9b97a8;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
}
.user-dialog-bottom {
  background-color: #60557d;
  border-radius: 0 0 15px 15px;
  padding: 0.25rem 0;
  img {
    width: 0.42rem;
    height: 0.42rem;
  }
  .u-d {
    * {
      display: block;
    }
    span {
      font-size: 13px;
      color: #fff;
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
.level-icon-id {
  position: absolute;
  width: 3.39rem;
  height: 3rem;
  left: 50%;
  top: 0;
  transform: translate3d(-50%, 0, 0);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  &.level1 {
    background-image: url(../assets/level/level-1.png);
  }
  &.level2 {
    background-image: url(../assets/level/level-2.png);
  }
  &.level3 {
    background-image: url(../assets/level/level-3.png);
  }
  &.level4 {
    background-image: url(../assets/level/level-4.png);
  }
  &.level5 {
    background-image: url(../assets/level/level-5.png);
  }
  &.level6 {
    background-image: url(../assets/level/level-6.png);
  }
  &.level7 {
    background-image: url(../assets/level/level-7.png);
  }
  &.level8 {
    background-image: url(../assets/level/level-8.png);
  }
}
@media screen and (min-width: 320px) and (max-width: 374px) {
  /* .nickname {
    font-size: 13px;
  } */
}
.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
.fade-out-leave-active, .fade-out-enter-active {
  transition: all 1s;
}
</style>
