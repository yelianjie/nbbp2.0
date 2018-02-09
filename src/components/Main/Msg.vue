<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="{uid: data.initiator_mc_id, levelName: data.grade_title, levelIcon: data.levelIcon, headImg: data.initiator_headimgurl, nickname: data.initiator_nickname, sex: data.sex}" @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle onlymsg" v-html="$options.filters.filterFace(data.content)">
        
      </div>
      <div class="msg-item-bottom">
        <msg-bottom :fabulous="data.fabulous_count" :screen="data.screen_count" :reward="data.reward_count" @onLike="like" @onShare="share" @onBp="bp" @onDs="ds"></msg-bottom>
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
