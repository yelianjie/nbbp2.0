<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="data" @onAvatar="avatar"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle msgimg flex">
        <div class="img">
          <img v-if="data.img.lastIndexOf('?') != -1" :size="fSize" v-autoSize="data.img.substring(data.img.lastIndexOf('?') + 1) + ',2.04,' + fSize" v-lazy="$options.filters.prefixImageUrl(data.img)" @click="previewImg($options.filters.prefixImageUrl(data.img))"/>
          <img v-else v-lazy="$options.filters.prefixImageUrl(data.img)" @click="previewImg($options.filters.prefixImageUrl(data.img))"/>
        </div>
        <div class="content" v-html="$options.filters.filterFace(data.content)"></div>
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
    previewImg (url) {
      this.$emit('onPreviewImage', {current: url, urls: [url]})
    }
  },
  computed: {
    fSize () {
      return this.$store.getters['app/fontSize']
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
      display: block;
    }
  }
  .content {
    padding-left: @msgpadLeft;
    width: 50%;
  }
}
</style>
