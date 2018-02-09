<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="{uid: data.initiator_mc_id, levelIcon: data.levelIcon, headImg: data.initiator_headimgurl}" @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user></msg-user>
      <div class="msg-item-middle bpmsg" v-bind:class="{'theme-propose': true}">
        <div class="flex">
          <div class="msg-item-info flex flex-1 flex-v flex-align-center">
            <div class="msg-bp-title">求婚霸屏60秒</div>
            <div class="content">{{data.content}}</div>
          </div>
          <div class="img"><img src="../../assets/jj.jpg"/></div>
        </div>
        <div class="msg-item-bottom">
          <msg-bottom :fabulous="data.fabulous_count" :screen="data.screen_count" :reward="data.reward_count" @onLike="like" @onShare="share" @onBp="bp" @onDs="ds" :display="1"></msg-bottom>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import MsgBottom from './MsgBottom'
import MsgUser from './MsgUser'
import UserAvatar from './UserAvatar'
export default {
  props: ['data', 'index'],
  components: {
    MsgBottom,
    MsgUser,
    UserAvatar
  },
  methods: {
    like () {
      this.$emit('onLike', this.data)
    },
    avatar () {
      this.$emit('onAvatar', this.data)
    },
    share () {
      this.$emit('onShare')
    },
    bp () {
      this.$emit('onBp')
    },
    ds () {
      this.$emit('onDs')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';

.msg-item-middle.bpmsg {
  min-width: @minMsgWidth;
  max-width: @maxMsgWidth;
  .img {
    width: 1.6rem;
    height: 1.6rem;
    margin-left: @msgpadTop;
    img {
      width: 1.6rem;
      height: 1.6rem;
      display: block;
    }
  }
  .msg-bp-title {
    padding: 0 6px;
    line-height: 0.4rem;
    margin-bottom: @msgpadTop;
    position: relative;
    &:before, &:after {
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      content: "";
    }
    &:before {
      left: 0;
      transform: translateX(-100%);
      border-top: 0.2rem solid transparent;
      border-right: 0.2rem solid #dd4b3c;
      border-bottom: 0.2rem solid transparent;
    }
    &:after {
      right: 0;
      transform: translateX(100%);
      border-top: 0.2rem solid transparent;
      border-left: 0.2rem solid #dd4b3c;
      border-bottom: 0.2rem solid transparent;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 374px) {
  .msg-bp-title {
    font-size: 14px;
  }
  .msg-item-middle.bpmsg {
    max-width: 4.88rem;
  }
}
</style>
