<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user></msg-user>
      <div class="msg-item-middle onlyimg flex">
        <div class="img"><img src="../../assets/jj.jpg"/></div>
      </div>
      <div class="msg-item-bottom">
        <msg-bottom :like="data.likes" @onLike="like" @onShare="share"></msg-bottom>
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
      this.$emit('onLike', this.index)
    },
    avatar () {
      this.$emit('onAvatar', this.index)
    },
    share () {
      this.$emit('onShare')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';

.msg-item-middle.onlyimg {
  min-width: @minMsgWidth;
  max-width: @minMsgWidth;
  .img {
    width: 100%;
    img {
      width: 100%;
      max-height: 300px;
      display: block;
    }
  }
}
</style>
