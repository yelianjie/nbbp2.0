<template>
  <div class="msg-item flex">
    <div class="msg-item-left">
      <user-avatar :data="data" @onAvatar="avatar" @onDelete="deleteMsg"></user-avatar>
    </div>
    <div class="msg-item-right flex-1">
      <msg-user :data="data"></msg-user>
      <div class="msg-item-middle pr hbMsg flex flex-align-center" :class="{'out': data.hb.is_lq > 0 || data.hb.status > 1}" @click="hbClick">
        <img src="../../assets/hb-rmb.png" class="rmb-icon" v-if="data.hb.pay_type == 0"/>
        <img src="../../assets/hb-coin.png" class="rmb-icon" v-else/>
        <div class="hbmsg-main f14 fff-bp">
          <p class="hb_msg_content line1">{{data.content}}</p>
          <template v-if="data.hb.status == 0 && data.hb.show_time > 0 && data.hb.is_lq == 0 && data.hb.type != 3 && !data.hb.user.nickname">
            <p>开抢倒计时：{{data.hb.show_time}}秒</p>
          </template>
          <template v-else>
            <template v-if="data.hb.type == 3 && data.hb.user.nickname">
              <p>领取红包</p>
            </template>
            <template v-else>
              <template v-if="data.hb.is_lq == 0 && data.hb.status == 1">
                <p>领取红包</p>
              </template>
              <template v-if="data.hb.is_lq > 0 && (data.hb.status == 1 || data.hb.status == 2)">
                <p>您已领取红包</p>
              </template>
              <template v-if="data.hb.is_lq == 0 && data.hb.status == 2">
                <p>红包已领完</p>
              </template>
              <template v-if="data.hb.status == 3">
                <p>红包已过期</p>
              </template>
            </template>
          </template>
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
import { isDjsOver } from '@/api/'
export default {
  data () {
    return {
      hbTimer: null
    }
  },
  props: ['data', 'index'],
  components: {
    MsgBottom,
    MsgUser,
    UserAvatar
  },
  mounted () {
    this.$nextTick(() => {
      // 非专属倒计时红包要计时
      if (~~(this.data.hb.status) === 0 && ~~(this.data.hb.type) !== 3 && !this.data.hb.user.nickname) {
        this.hbTimer = setInterval(() => {
          if (this.data.hb.show_time - 1 > 0) {
            this.data.hb.show_time -= 1
          } else {
            this.data.hb.show_time = 0
            this.data.hb.status = 1
            clearInterval(this.hbTimer)
            isDjsOver({ht_id: this.$route.params.id, hb_id: this.data.hb.id}).then((res) => {})
          }
        }, 1000)
      }
    })
  },
  watch: {
    data (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
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
