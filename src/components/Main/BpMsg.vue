<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="data" @onAvatar="avatar" @onDelete="deleteMsg"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle bpmsg" :style="{'background': '-webkit-linear-gradient(top, ' + data.bg.split(',')[0] + ',' + data.bg.split(',')[1] + ' 70%' +',' + data.bg.split(',')[1] + ')'}">
        <div class="flex">
          <div class="msg-item-info flex-1 tc">
              <div class="msg-bp-title">{{data.title}}{{data.odr_show_time}}秒
                <span class="arrow arrow-left"></span>
                <span class="arrow arrow-right"></span>
              </div>
            <div class="content" v-html="$options.filters.filterFace(data.content)"></div>
          </div>
          <div class="img">
            <template v-if="data.img">
              <img v-lazy="$options.filters.prefixImageUrl(data.img)" @click="previewImg($options.filters.prefixImageUrl(data.img))"/>
            </template>
            <template v-else>
              <img :src="logo"/>
            </template>
          </div>
        </div>
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
import logo from '@/assets/logo.png'
export default {
  props: ['data', 'index'],
  data () {
    return {
      logo: logo
    }
  },
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
      this.$emit('onShare', this.data)
    },
    bp () {
      this.$emit('onBp')
    },
    ds () {
      this.$emit('onDs')
    },
    previewImg (url) {
      this.$emit('onPreviewImage', {current: url, urls: [url]})
    },
    deleteMsg () {
      this.$emit('onDelete', this.data)
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
    display: inline-block;
    background-color: rgba(0, 0, 0, .15);
  }
  .arrow {
    border: 0.2rem solid transparent;
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
  }
  .arrow-left {
    left: 0;
    border-right: 0.2rem solid rgba(0, 0, 0, 0.15);
    transform: translateX(-100%);
    border-right-color: rgba(0, 0, 0, .15);
  }
  .arrow-right {
    right: 0;
    border-left: 0.2rem solid rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
  }
}
.content {
  text-align: left;
  word-break: break-all;
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
