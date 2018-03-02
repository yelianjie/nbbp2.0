<template>
  <div class="container min-h bg2 about-container borderbox" style="padding: 0.2rem;">
    <div class="img-level">
      <div class="img-wrap flex flex-pack-center pr">
        <template v-if="userInfo.grade_title && userInfo.grade_title != '平民'" >
          <span class="level-icon-id" :style="{'background-image': 'url('+$options.filters.filterLevel(userInfo.grade_title, 'avatarIcon', true)+')'}"></span>
          <img :src="userInfo.headimgurl | prefixImageUrl" class="circle"/>
        </template>
        <template v-else>
          <img :src="userInfo.headimgurl | prefixImageUrl" class="circle" style="width: 1.7rem;height:1.7rem;"/>
        </template>
      </div>
    </div>
    <p class="f16 tc white">{{userInfo.nickname}}<template v-if="userInfo.grade_title != '平民'">&nbsp;·&nbsp;{{userInfo.grade_title}}</template></p>
    <div class="flex flex-align-center flex-pack-center">
      <div class="level-box flex flex-pack-center">
        <template v-if="userInfo.grade_title && userInfo.grade_title != '平民'">
          <img :src="$options.filters.filterLevel(userInfo.grade_title, 'icon')" class="level-icon"/>
        </template>
        <template v-else>
          <span class="level level-1">{{userInfo.grade_title}}</span>
        </template>
      </div>
      <div class="level-progressbar flex-1 flex flex-align-center" style="height: 0.12rem;">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clipPath">
              <rect x="0" y="0" :width="calRest" height="100%" />
            </clipPath>
            <linearGradient y2="0" x2="1" y1="0" x1="0" id="svg_2">
              <stop :stop-color="$options.filters.filterLevel(userInfo.grade_title, 'expColor')" offset="0"/>
              <stop :stop-color="$options.filters.filterLevel(userInfo.next_grade_title, 'expColor')" offset="1"/>
            </linearGradient>
          </defs> 
          <rect height="100%" width="100%" y="0" x="0" fill="#121420" stroke-width="1" stroke="#34364f"/>
          <rect id="level-progress" height="100%" width="100%" y="0" x="0" stroke-width="1" stroke="rgab(0,0,0,0)" fill="url(#svg_2)" clip-path="url(#clipPath)" />
        </svg>
      </div>
      <div class="level-box flex flex-pack-center" v-if="userInfo.next_grade_id">
        <img :src="$options.filters.filterLevel(userInfo.next_grade_title, 'icon')" class="level-icon"/>
      </div>
    </div>
    <p class="tc white f14">距离成为“{{userInfo.next_grade_title}}”还差{{userInfo.experience_less}}经验值</p>
    <div class="level-list bg1" style="padding: 0.3rem 0;margin-top: 0.36rem;border-radius: 5px;">
      <div class="flex flex-h">
        <div class="radient-line line-left flex-1"></div>
        <p class="white tc f16" style="width: 2rem;">牛霸贵族</p>
        <div class="radient-line line-right flex-1"></div>
      </div>
      <div class="level-all" style="font-size: 0;">
        <div class="level-item pr" @click="showLevel(v)" v-for="(v, i) in grades" :key="i" v-if="v.experience != 0">
          <img :src="$options.filters.filterLevel(v.grade_title, 'icon')" class="level-item-icon"/>
          <p class="white f15 tc">{{v.grade_title}}</p>
          <p class="f13 darker1 tc">{{v.experience}}经验值</p>
          <div class="lock-layer" v-if="Number(userInfo.total_mc_experience) < Number(v.experience)" @click="showLevel(v)"><svg-icon icon-class="lock"/></div>
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
        <button class="bp-button bp-submit" @click="$router.push('/Charge')">快速升级</button>
      </div>
    </div>
    <div v-transfer-dom>
    <x-dialog v-model="levelVisible" :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
      <div class="level-container flex flex-v flex-pack-center" style="height: 100%;">
        <div class="flex flex-v flex-pack-center flex-align-center">
          <img :src="curLevel.icon" style="width:5.5rem;height:5.7rem;margin-top:-2.4rem;" class="level-big-icon"/>
          <p class="white f20" style="margin-top:-1.2rem;">{{curLevel.value}}</p>
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
  </div>
</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from 'vux'
import { getLevelInfo } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      powsers: ['贵族身份头衔；', '昵称加贵族称呼；', '更多特权暂未开发，敬请期待！'],
      curLevel: {},
      levelVisible: false,
      userInfo: {},
      grades: []
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '贵族特权'
    next()
  },
  created () {
    getLevelInfo().then((res) => {
      this.userInfo = res.result.user
      this.grades = res.result.grade
    })
  },
  methods: {
    showLevel (data) {
      this.curLevel.icon = this.$options.filters.filterLevel(data.grade_title, 'bigIcon', true)
      this.curLevel.value = data.grade_title
      this.levelVisible = true
    }
  },
  computed: {
    calRest () {
      if (this.userInfo.hasOwnProperty('mc_level_id')) {
        var find = this.grades.find(v => v.id === this.userInfo.next_grade_id)
        if (find) {
          return ~~((find.experience - this.userInfo.experience_less) / find.experience * 100)
        } else {
          return 0
        }
      }
    }
  },
  components: {
    XDialog
  },
  watch: {
    levelVisible (newVal, oldVal) {
      if (newVal) {
        setTimeout(() => {
          this.$el.classList.add('blur')
        }, 300)
      } else {
        this.$el.classList.remove('blur')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
.container.blur {
  filter: blur(3px);
}
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
  width: 0.8rem;
  height: 0.71rem;
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
    height: 6px;
    width: 6px;
    top: 50%;
    margin-top: -3px;
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
    width: 2rem;
    height: 1.77rem;
    margin-left: -1rem;
    background-color: rgba(18, 20, 32, 0.8);
    border-radius: 50%;
    z-index: 1;
    color: #fff;
    .svg-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.5rem;
      height: 0.5rem;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
.level-item-icon {
  width: 2rem;
  height: 1.77rem;
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
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  li {
    text-align: left;
    position: relative;
    padding-left: 10px;
    &::before {
      position: absolute;
      width: 4px;
      height: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      content: "";
      left: 0;
      top: 50%;
      margin-top: -2px;
    }
  }
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
.level-icon-id {
  position: absolute;
  width: 3.39rem;
  height: 3rem;
  left: 50%;
  top: -0.78rem;
  transform: translate3d(-50%, 0, 0);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}
</style>
