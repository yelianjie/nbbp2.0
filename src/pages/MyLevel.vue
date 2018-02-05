<template>
  <div class="container min-h bg2 about-container borderbox" style="padding: 0.2rem;">
    <div class="img-level flex flex-pack-center">
      <div class="img-wrap">
        <img src="../assets/logo.png"/>
      </div>
    </div>
    <p class="f16 tc white">鲜花&nbsp;·&nbsp;伯爵</p>
    <div class="flex flex-align-center flex-pack-center">
      <div class="level-box flex flex-pack-center">
        <img src="../assets/logo.png" class="level-icon"/>
      </div>
      <div class="level-progressbar flex-1 flex flex-align-center">
        <svg width="100%" height="0.16rem" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clipPath">
              <rect x="0" y="0" width="50%" height="0.16rem" />
            </clipPath>
            <linearGradient y2="0" x2="1" y1="0" x1="0" id="svg_2">
              <stop stop-color="#19bb82" offset="0"/>
              <stop stop-color="#4793e1" offset="1"/>
            </linearGradient>
          </defs> 
          <rect height="0.16rem" width="100%" y="0" x="0" fill="#121420" stroke-width="1" stroke="#34364f"/>
          <rect id="level-progress" height="0.16rem" width="100%" y="0" x="0" stroke-width="1" stroke="rgab(0,0,0,0)" fill="url(#svg_2)" clip-path="url(#clipPath)" />
        </svg>
      </div>
      <div class="level-box flex flex-pack-center">
        <img src="../assets/logo.png" class="level-icon"/>
      </div>
    </div>
    <p class="tc white f14">距离成为“子爵”还差800经验值</p>
    <div class="level-list bg1" style="padding: 0.3rem 0;margin-top: 0.36rem;border-radius: 5px;">
      <div class="flex flex-h">
        <div class="radient-line line-left flex-1"></div>
        <p class="white tc f16" style="width: 2rem;">牛霸贵族</p>
        <div class="radient-line line-right flex-1"></div>
      </div>
      <div class="level-all" style="font-size: 0;">
        <div class="level-item pr">
          <img src="../assets/logo.png" class="level-item-icon"/>
          <p class="white f15 tc">游侠</p>
          <p class="f13 darker1 tc">80经验值</p>
          <div class="lock-layer"></div>
        </div>
        <div class="level-item pr" @click="levelVisible = true">
          <img src="../assets/logo.png" class="level-item-icon"/>
          <p class="white f15 tc">游侠</p>
          <p class="f13 darker1 tc">80经验值</p>
        </div>
      </div>
    </div>
    <div class="flex flex-align-center" style="margin-top: 0.5rem;">
      <div class="flex-1">
        <p class="darker1 f12">如何获取积分：</p>
        <ul class="darker1 f12">
          <li>充值相应牛角币将获得巨额经验值奖励</li>
          <li>每消费1牛角币将获得10经验值</li>
        </ul>
      </div>
      <div class="level-up-fast">
        <button class="bp-button bp-submit">快速升级</button>
      </div>
    </div>
    <x-dialog v-model="levelVisible" :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
      <div class="level-container flex flex-v flex-pack-center" style="height: 100%;">
        <div class="flex flex-v flex-pack-center flex-align-center">
          <img src="../assets/logo.png" style="width:3.4rem;height:3.4rem;" class="level-big-icon"/>
          <p class="white f20">伯爵</p>
          <div class="powers f13 white">
            <ul>
              <li
      v-for="(item, index) in powsers"
      v-bind:key="item"
      v-bind:data-index="index"
    >{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="close-box flex flex-align-center flex-pack-center">
        <svg-icon icon-class="close" @click.native="levelVisible = false"/>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog } from 'vux'
export default {
  data () {
    return {
      powsers: ['贵族身份头衔；', '昵称加贵族称呼；', '更多特权暂未开发，敬请期待！'],
      levelVisible: false
    }
  },
  methods: {
  },
  components: {
    XDialog
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
.img-level {
  .img-wrap {
    margin: 0.72rem 0;
  }
  img {
    width: 1.4rem;
    height: 1.4rem;
    display: block;
  }
}
.level-box {
  width: 1.2rem;
}
.level-icon {
  width: 0.5rem;
  height: 0.5rem;
}
.level-next-tip {
  position: absolute;
  bottom: 0;
  left: 0;
}
.radient-line {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
  }
  &::before {
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    top: 50%;
    margin-top: -4px;
    background-color: rgba(84, 86, 98, 1);
    border-radius: 50%;
  }
  &.line-left::before {
    right: 0;
  }
  &.line-right::before {
    left: 0;
  }
  &.line-left::after {
    background-image: linear-gradient(to left, rgba(84, 86, 98, 1), rgba(84, 86, 98, 1) 50%, rgba(84, 86, 98, 0));
  }
  &.line-right::after {
    background-image: linear-gradient(to right, rgba(84, 86, 98, 1), rgba(84, 86, 98, 1) 50%, rgba(84, 86, 98, 0));
  }
}
.level-item {
  width: 2.3666rem;
  display: inline-block;
  margin-top: 0.3rem;
  .lock-layer {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1.1rem;
    height: 1.1rem;
    margin-left: -0.55rem;
    background-color: rgba(0,0,0,.5);
    border-radius: 50%;
    z-index: 1;
  }
}
.level-item-icon {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
}
.bp-submit {
  width: 1.4rem;
  height: 0.64rem;
  padding: 0;
  line-height: 0.64rem;
  text-align: center;
  background-color: @mainColor;
  color: #fff;
}
.powers {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
}
.close-box {
  height: 1.1rem;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 3;
  color: #fff;
  .svg-icon {
    width: 0.72rem;
    height: 0.72rem;
  }
}
</style>
