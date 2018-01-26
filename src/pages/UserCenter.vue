<template>
  <div class="container" style="background-color:#121420;">
    <div class="user-top">
      <div class="user-box1 flex flex-align-center">
        <div class="flex-1 avatar flex flex-align-center"><img src="../assets/logo.png"/></div>
        <div class="edit-user flex flex-align-center">
          <span class=""><router-link :to="{path: '/Profile'}">编辑资料</router-link></span>
          <span class=""><svg-icon icon-class="share"/></span>
        </div>
      </div>
      <div class="user-box2">
        <p class="white">鲜花</p>
        <div class="flex u2 flex-align-center">
          <span class="level level-1">V1</span>
          <span class="f12 point">234积分</span>
        </div>
        <div class="rpxline" style="background-color: #333743;"></div>
        <p class="sign f14 flex"><span style="white-space: nowrap;">签名：</span><span>最开心的事就是你很好最开心</span></p>
        <div class="flex white tag1">
          <span class="sex sex-male flex flex-align-center"><svg-icon icon-class="male" /></span>
          <span class="tag tagcity">宁波</span>
        </div>
        <div class="count-current flex">
          <div class="ucount"><span class="f20 number">9</span><span class="f14 text">点赞</span></div>
          <div class="ucount"><span class="f20 number">20</span><span class="f14 text">霸屏</span></div>
          <div class="ucount"><span class="f20 number">55</span><span class="f14 text">礼物</span></div>
        </div>
      </div>
    </div>
    <div class="user-middle">
      <div class="user-wallet flex">
        <div class="w1 flex-1 tc" @click="$router.push({path: '/Charge'})">
          <h3 class="white"><countup :start-val="0" :end-val="300" :duration="2" class="demo1"></countup></h3>
          <h5>我的余额/牛角</h5>
        </div>
        <div class="w2 flex-1 tc" @click="$router.push({path: '/Income'})">
          <h3><countup :start-val="0" :end-val="30" :duration="2" class="demo2"></countup></h3>
          <h5>我的收益/员</h5>
        </div>
      </div>
      <group>
        <cell title="推荐给好友" color="#e8401b" :is-link="true" icon-name="heart"></cell>
        <cell title="关于我们" color="#5bf475" :is-link="true" icon-name="about"></cell>
        <cell title="商户加盟" color="#317fe3" :is-link="true" icon-name="cooperate"></cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Countup } from 'vux'
import Group from '../components/User/Group'
import Cell from '../components/User/Cell'
export default {
  components: {
    Countup,
    Group,
    Cell
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
@iconBg: #21313a;
@darkerColor: #61667a;
@bgColor: #181b2a;
@marginBottom: 0.2rem;
.user-top {
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.2rem;
  background-color: @bgColor;
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
.user-middle {
  background-color: @bgColor;
  .group ul li {
    display: block;
  }
  .group-link {
    padding: 0.35rem 0;
    margin: 0 0.4rem;
    color: #fff;
    position: relative;
    &::before {
      content: "";
      .setTopLine(#12151e);
    }
    span {
      display: block;
      width: 0.56rem;
      height: 0.56rem;
      line-height: 0.56rem;
      text-align: center;
      background-color: #2e313a;
      border-radius: 50%; 
      margin-right: 10px;
    }
    .arrow-right {
      width: 0.4rem;
      height: 0.4rem;
      fill: #5d5e63;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
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
</style>
