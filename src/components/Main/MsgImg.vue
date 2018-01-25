<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user></msg-user>
      <div class="msg-item-middle msgimg flex">
        <div class="img"><img src="../../assets/jj.jpg"/></div>
        <div class="content">{{data.content}}</div>
      </div>
      <div class="msg-item-bottom">
        <msg-bottom :like="data.likes" @onLike="like" @onShare="share" @onBp="bp" @onDs="ds"></msg-bottom>
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

.msg-item-middle.msgimg {
  min-width: @minMsgWidth;
  max-width: @maxMsgWidth;
  .img {
    width: 50%;
    img {
      width: 100%;
      max-height: 300px;
      display: block;
    }
  }
  .content {
    padding-left: @msgpadLeft;
    width: 50%;
  }
}
</style>
