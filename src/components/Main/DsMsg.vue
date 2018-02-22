<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="data" @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle dsmsg">
        <p class="send-for">送{{data.title}}给{{toWho}}</p>
        <div class="ds-box flex">
          <div class="ds-box-gift flex-align-center">
            <img v-lazy="$options.filters.prefixImageUrl(data.pro_img)" class="circle"/>
          </div>
          <div class="ds-box-arrow flex flex-align-center flex-pack-center flex-1">
            <svg-icon icon-class="arrow-ds"/>
          </div>
          <div class="ds-box-to flex flex-align-center">
            <img v-lazy="$options.filters.prefixImageUrl(data.sendee_headimgurl)" class="circle" v-if="data.sendee_mc_id != 0"/>
            <img v-else src="../../assets/all.png" class="circle"/>
          </div>
        </div>
        <div class="content">{{data.content}}</div>
        <div class="msg-item-bottom">
          <msg-bottom :data="data" @onLike="like" @onShare="share" @onBp="bp" @onDs="ds" :display="1"></msg-bottom>
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
  },
  computed: {
    toWho () {
      return Number(this.data.sendee_mc_id) ? this.data.sendee_nickname : '全场观众'
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';

.msg-item-middle.dsmsg {
  min-width: @minMsgWidth;
  max-width: @maxMsgWidth;
  position: relative;
  overflow: hidden;
  &:after {
    content: "送礼";
    position: absolute;
    right: 0;
    top: 0;
    line-height: 0.6rem;
    width: 1.7rem;
    height: 0.6rem;
    text-align: center;
    background-color: #f21574;
    transform: translateX(28%) translateY(15%) rotateZ(45deg);
  }
  img {
    display: block;
  }
  .ds-box {
    padding: 0.3rem;
    margin: @msgpadTop 0;
    background-color: @dsBg;
  }
  .ds-box-arrow {
    .svg-icon {
      width: 0.6rem;
      height: 0.6rem;
      display: block;
    }
  }
  .ds-box-gift {
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .ds-box-to {
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .content {
    margin-bottom: @msgpadTop;
  }
}
</style>
