<template>
  <div class="container bg1">
    <div class="user-top bg2">
      <div class="user-box1 flex flex-align-center">
        <div class="flex-1 avatar flex flex-pack-center pr">
          <template v-if="userInfo.grade_title && userInfo.grade_title != '平民'">
            <span class="level-icon-id" :style="{'background-image': 'url('+Levels[userInfo.grade_title]+')'}"></span>
            <router-link :to="{path: '/Profile'}"><img :src="userInfo.headimgurl | prefixImageUrl" :class="{'hasLevel': userInfo.grade_title != '平民'}"/></router-link>
          </template>
          <template v-else>
            <router-link :to="{path: '/Profile'}"><img :src="userInfo.headimgurl | prefixImageUrl" :class="{'hasLevel': userInfo.grade_title != '平民'}"/></router-link>
          </template>
        </div>
        <!-- <div class="edit-user flex flex-align-center">
          <span class=""><router-link :to="{path: '/Profile'}">编辑资料</router-link></span>
          <span class=""><svg-icon icon-class="share"/></span>
        </div> -->
      </div>
      <div class="user-box2">
        <p class="white tc" style="margin: 0.2rem auto;">{{userInfo.nickname}}</p>
        <!-- <div class="flex u2 flex-align-center">
          <span class="level level-1">{{userInfo.grade_title}}</span>
          <span class="f12 point">{{userInfo.mc_integral}}积分</span>
        </div> -->
        
        <div class="flex white tag1 flex flex-align-center flex-pack-center">
          <span class="sex sex-male flex flex-align-center"><svg-icon icon-class="male" v-if="userInfo.sex == 1"/><svg-icon icon-class="female" v-if="userInfo.sex == 2"/></span>
          <span class="tag tagcity">{{userInfo.city}}</span>
          <span class="level level-1" v-if="userInfo.grade_title && userInfo.grade_title != '平民'">{{userInfo.grade_title}}</span>
        </div>
        <p class="sign f14 tc"><span style="white-space: nowrap;">签名：</span><span>{{userInfo.autograph}}</span></p>
        <div class="count-current flex">
          <div class="ucount flex-1 tc"><span class="f20 number">{{userInfo.fabulous_count}}</span><span class="f14 text">点赞</span></div>
          <div class="ucount flex-1 tc"><span class="f20 number">{{userInfo.screen_count}}</span><span class="f14 text">霸屏</span></div>
          <div class="ucount flex-1 tc"><span class="f20 number">{{userInfo.reward_count}}</span><span class="f14 text">礼物</span></div>
        </div>
      </div>
    </div>
    <div class="user-middle">
      <div class="user-wallet flex bg2">
        <div class="w1 flex-1 tc" @click="$router.push({path: '/Charge'})">
          <h3 class="white"><countup v-if="userInfo.balance" :start-val="0.000" :end-val="Number(userInfo.balance)" :duration="2" class="demo1" :decimals="3"></countup></h3>
          <h5>我的余额/牛角</h5>
        </div>
        <div class="w2 flex-1 tc" @click="$router.push({path: '/Income'})">
          <h3><countup v-if="userInfo.profit_balance" :start-val="0.000" :end-val="Number(userInfo.profit_balance)" :duration="2" class="demo2" :decimals="3"></countup></h3>
          <h5>我的收益/员</h5>
        </div>
      </div>
      <group class="bg2">
        <cell title="推荐给好友" color="#e8401b" :is-link="true" icon-name="heart" @click.native.prevent="shareMaskVisible = true"></cell>
        <cell title="关于我们" color="#5bf475" :is-link="true" icon-name="about" :link-path="{path: '/About'}"></cell>
        <cell title="商户加盟" color="#317fe3" :is-link="true" icon-name="cooperate" :link-path="{path: '/'}"></cell>
      </group>
      <!-- v-if="userInfo.isAgent > 0" v-if="userInfo.isMM > 0"  -->
      <group class="bg2" style="margin-top: 0.2rem;" v-if="userInfo.isAgent > 0">
        <cell title="代理管理" color="#635ac3" :is-link="true" icon-name="agent" :link-path="{path: '/AgentCenter'}"></cell>
      </group>
      <group class="bg2" style="margin-top: 0.2rem;" v-if="userInfo.isMM > 0">
        <cell title="商户管理" color="#635ac3" :is-link="true" icon-name="agent" :link-path="{path: '/MyBars'}"></cell>
      </group>
    </div>
    <x-dialog v-model="shareMaskVisible" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
    <div class="fullscreen"  @click="shareMaskVisible = false">
      <img src="../assets/share.png" style="max-width: 100%;float:right;width: 4.2rem;margin: 0.2rem 0.2rem 0 0;"/>
    </div>
  </x-dialog>
  </div>
</template>

<script>
import { Countup, XDialog } from 'vux'
import Group from '../components/User/Group'
import Cell from '../components/User/Cell'
import { mapActions, mapGetters } from 'vuex'
import Levels from '@/assets/level/level-show'
export default {
  data () {
    return {
      Levels: Levels,
      shareMaskVisible: false
    }
  },
  components: {
    Countup,
    Group,
    Cell,
    XDialog
  },
  beforeRouteEnter (to, from, next) {
    document.title = '个人中心'
    next()
  },
  created () {
    this.$vux.loading.show({
      text: '正在加载'
    })
    this.getUserInfo().then((res) => {
      this.$vux.loading.hide()
    }).catch(() => {
      this.$vux.loading.hide()
    })
    /* if (Object.keys(this.$store.getters['user/userInfo']).length === 0) {
      this.$vux.loading.show({
        text: '正在加载'
      })
      this.getUserInfo().then((res) => {
        this.$vux.loading.hide()
      }).catch(() => {
        this.$vux.loading.hide()
      })
    } */
  },
  computed: {
    ...mapGetters('user', [
      'userInfo'
    ])
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ])
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
@iconBg: #21313a;
@darkerColor: #61667a;
@marginBottom: 0.2rem;
.user-top {
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.2rem;
  .user-box1 {
    margin-bottom: @marginBottom;
  }
  .avatar {
    img {
      display: block;
      width: 1.7rem;
      height: 1.7rem;
      border: 0.1rem solid @iconBg;
      border-radius: 50%;
      &.hasLevel {
        margin-top: 0.72rem;
        border: 0;
        width: 1.4rem;
        height: 1.4rem;
        margin-bottom: 0.2rem;
      }
    }
  }
  .edit-user {
    span {
      padding: 0.15rem 0.25rem;
      background-color: @iconBg;
      border-radius: 2px;
      a {
        color: #fff;
        font-size: 14px;
      }
      &:last-child {
        color: #fdd907;
        margin-left: 10px;
        .svg-icon {
          width: 0.36rem;
          height: 0.36rem;
        }
      }
    }
  }
  .user-box2 {
    .u2 {
      margin: 0.15rem 0;
    }
    .point {
      color:@darkerColor;
      margin-left: 4px;
    }
  }
  .sign {
    color: @darkerColor;
    margin: 0.2rem 0;
  }
  .tag1 span {
    margin-right: 4px;
  }
  .count-current {
    margin-top: 0.24rem;
    .ucount {
      margin-right: 20px;
    }
    .number {
      color: #fff;
      margin-right: 6px;
    }
    .text {
      color: @darkerColor;
    }
  }
}
.user-wallet {
  padding: 0.2rem 0.4rem;
  .w1 {
    position: relative;
    &:after {
      content: '';
      .setRightLine(#12151e);
    }
  }
  h5 {
    color: @darkerColor;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 2px;
  }
  .w2 h3 {
    color: @mainColor;   
  }
}
.level-icon-id {
  position: absolute;
  left: 50%;
  top: 0;
  width: 3.2rem;
  height: 2.83rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: translate3d(-50%, 0 ,0);
}
</style>
