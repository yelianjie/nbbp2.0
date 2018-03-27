<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="data" @onAvatar="avatar" @onDelete="deleteMsg"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle pr hbMsg flex flex-align-center" @click="hbClick">
        <img src="../../assets/hb-rmb.png" class="rmb-icon"/>
        <div class="hbmsg-main f14 fff-bp">
          <p class="hb_msg_content">有钱任性，大家快抢吧！！</p>
          <p>领取红包</p>
        </div>
      </div>
      <div class="msg-item-bottom">
        <msg-bottom :data="data" @onLike="like" @onShare="share" @onBp="bp" @onDs="ds"></msg-bottom>
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
      this.$emit('onAvatar')
    },
    share () {
      this.$emit('onShare')
    },
    bp () {
      this.$emit('onBp')
    },
    ds () {
      this.$emit('onDs')
    },
    deleteMsg () {
      this.$emit('onDelete', this.data)
    },
    hbClick () {
      this.$emit('onHBClick', this.data)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.hbMsg {
  width: 4.88rem;
  padding: 0.3rem 0.15rem;
  background-image: linear-gradient(top, #ff5644, #f5394b);
  &.out:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    content: "";
  }
}
.rmb-icon {
  width: 0.9rem;
  height: 0.9rem;
}
.hbmsg-main {
  margin-left: 0.15rem;
}
.hb_msg_content {
  margin-bottom: 0.1rem;
}
</style>
