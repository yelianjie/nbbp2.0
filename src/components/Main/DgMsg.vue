<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="data" @onAvatar="avatar" @onDelete="deleteMsg"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle dgmsg" :style="{'background': '-webkit-linear-gradient(top, #e43cd0, #8a0ee2 70%, #8a0ee2)'}">
        <div class="flex">
          <div class="msg-item-info flex-1">
            <div class="dg-top flex flex-align-center">
              <div class="flex-1 line1">给<template v-if="data.sendee_headimgurl">
                <img :src="$options.filters.prefixImageUrl(data.sendee_headimgurl)" class="circle"/>{{data.sendee_nickname}}
                </template><template v-else>全场观众</template>点歌：
                </div><svg-icon icon-class="share" @click.native="share"/>
            </div>
            <div class="song-name flex flex-align-center flex-pack-center">
              <img src="../../assets/music-b-icon.png" style="height: 0.4rem;margin: 0 2px;" class="db"/>
              <div class="line1">{{data.title}}</div>
            </div>
            <div class="content" v-html="$options.filters.filterFace(data.content)"></div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
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
    MsgUser,
    UserAvatar
  },
  methods: {
    avatar () {
      this.$emit('onAvatar')
    },
    share () {
      this.$emit('onShare', this.data)
    },
    deleteMsg () {
      this.$emit('onDelete', this.data)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.msg-item-middle.dgmsg {
  min-width: @minMsgWidth;
  max-width: @maxMsgWidth;
}
.dg-top  {
  svg {
    float: right;
    width: 0.4rem;
    height: 0.4rem;
    display: block;
  }
  img {
    vertical-align: middle;
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 5px;
  }
}
.song-name {
  padding: 0.15rem;
  margin: 0.1rem 0 0.2rem;
  background-color: rgba(0, 0, 0, 0.14);
}
</style>
