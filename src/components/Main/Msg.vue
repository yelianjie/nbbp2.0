<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user></msg-user>
      <div class="msg-item-middle onlymsg">
        {{data.content}}
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
      this.$emit('onLike', this.index)
    },
    avatar () {
      this.$emit('onAvatar', this.index)
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

.msg-item-top {
  * {
    display: block;
    margin-right: 4px;
  }
  .msg-name {
    font-size: @baseFontSize;
  }
}
.msg-item-middle.onlymsg {
  display: inline-block;
  min-width: @minMsgWidth;
  max-width: @maxMsgWidth;
}
</style>
