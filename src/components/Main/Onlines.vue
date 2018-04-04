<template>
  <div class="fullscreen onlines flex flex-v" v-show="visible" v-fixscroll="'#online-scroller'">
    <div class="flex-1 scroll" id="online-scroller" style="padding: 0.4rem 0.4rem 0.95rem;">
      <ul>
        <li v-for="(v, i) in peoples" :key="i" class="online-item" @click="onAvatarClick(v)" :class="{'hbselect': selectCustom[v.id]}">
          <div class="online-img"><img v-lazy="$options.filters.prefixImageUrl(v.headimgurl)" class="circle"></div>
          <div class="online-text overflow flex f12 flex-align-center">
            <template v-if="v.sex == 1">
              <span class="sex sex-male" >
                <svg-icon icon-class="male" />
              </span>{{v.nickname}}
            </template>
            <template v-if="v.sex == 2">
              <span class="sex sex-female" >
                <svg-icon icon-class="female"/>
              </span>{{v.nickname}}
            </template>
            <template v-if="v.sex == 0">
              <span class="tc" style="line-height: 16px;">{{v.nickname}}</span>
            </template>
          </div>
        </li>
      </ul>
    </div>
    <div class="close-box flex flex-align-center flex-pack-center">
      <template v-if="payBus == 1">
      <svg-icon icon-class="close" @click.native="close"/>
      </template>
      <template v-if="payBus == 2">
        <div class="chose-group flex">
          <button class="chose-group-btn cancel-btn fff-bp f15 pr" @click="close">取消</button>
          <button class="flex-1 chose-group-btn confirm-btn fff-bp f15" :disabled="Object.keys(selectCustom).length == 0" @click="confirmCustom">确定({{Object.keys(selectCustom).length}}人)</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'close'
  },
  data () {
    return {
      selectCustom: {}
    }
  },
  props: ['visible', 'peoples', 'payBus', 'hbLimit'],
  methods: {
    close () {
      this.$emit('onHBChoseCustom', this.selectCustom)
      this.$emit('close', false)
    },
    onAvatarClick (data) {
      if (this.payBus === 1) {
        // 显示dialog信息
        this.$emit('onShowCard', data)
      } else if (this.payBus === 2) {
        // 发红包时勾选状态
        if (this.selectCustom[data.id]) {
          this.$delete(this.selectCustom, data.id)
        } else {
          this.$set(this.selectCustom, data.id, data.id)
        }
      }
    },
    confirmCustom () {
      var selectLength = Object.keys(this.selectCustom).length
      if (selectLength > ~~(this.hbLimit)) {
        this.$vux.toast.show({
          text: '勾选人数大于红包个数',
          width: '15em'
        })
        return false
      } else if (selectLength < ~~(this.hbLimit)) {
        this.$vux.toast.show({
          text: '勾选人数小于红包个数',
          width: '15em'
        })
        return false
      } else {
        this.close()
      }
    },
    resetHBInfo () {
      this.selectCustom = {}
    }
  }
}
</script>


<style lang="less" scoped>
@import (reference) '../../styles/global.less';
.onlines {
  z-index: 500;
  background: url(../../assets/online-bg.jpg) no-repeat center;
  background-size: cover;
}
.online-img {
  height: 1.2rem;
  margin: 0.15rem auto;
}
.online-item {
  width: 1.6rem;
  margin-right: 0.1rem;
  display: inline-block;
  margin-bottom: 0.2rem;
  position: relative;
  &.hbselect {
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 1px solid #f31374;
      border-radius: 5px;
      content: "";
    }
  }
  &:nth-child(4n+4) {
    margin-right: 0;
  }
  .online-img {
    img {
      width: 1.2rem;
      height: 1.2rem;
      display: block;
      margin: auto;
    }
  }
  .online-text {
    text-align: center;
    margin: 0 0.05rem 0.15rem;
    line-height: 1;
    .sex {
      margin-right: 2px;
    }
  }
}
.close-box {
  height: 1.1rem;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  background-image: linear-gradient(to top, rgba(0,0,0,.4), rgba(0,0,0,0));
  .svg-icon {
    width: 0.72rem;
    height: 0.72rem;
  }
}
.chose-group {
  position: absolute;
  left: 0.4rem;
  right: 0.4rem;
  top: 0;
  height: 0.9rem;
}
.chose-group-btn {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  height: 0.9rem;
  line-height: 0.9rem;
  &.cancel-btn {
    width: 30%;
    border-radius: 25px 0 0 25px;
    &:after {
      content: "";
      .setRightLine(rgba(255, 255, 255, 1));
    }
  }
  &.confirm-btn {
    border-radius: 0 25px 25px 0;
    color: #38ec63;
  }
}
</style>
