<template>
  <div class="container tc">
    <img src="../assets/chou.png" id="lottery-img"/>
    <p class="tip fff-bp" v-if="lotteryState == 0">当前无抽奖活动</p>
    <p class="tip fff-bp" v-if="lotteryState == 1">抽奖活动火热进行中...</p>
    <x-button id="lottery-btn" v-if="!isJoin" :gradients="['#ffdb69', '#ffdb69']" @click.native="join" :disabled="joinLoading" :show-loading="joinLoading">立即参与抽奖</x-button>
    <x-button id="lottery-btn" v-else :gradients="['#ffdb69', '#ffdb69']" :disabled="true">你已参加</x-button>
  </div>
</template>

<script>
import { XButton } from 'vux'
import { canJoin, lotteryJoin } from '@/api/'
export default {
  data () {
    return {
      lotteryState: 0,
      isJoin: false,
      joinLoading: false,
      joinTimer: null
    }
  },
  created () {
    this.loopCanJoin(0)
  },
  methods: {
    loopCanJoin (time) {
      if (!this.$route.query.id) {
        clearTimeout(this.joinTimer)
        this.joinTimer = null
        return false
      }
      this.joinTimer = setTimeout(() => {
        canJoin({ht_id: this.$route.query.id}).then((res) => {
          console.log(res)
          if (res.result === '活动已结束') {
            this.lotteryState = 0
          } else if (res.result === '允许报名') {
            this.lotteryState = 1
          } else if (res.result === '您已报过名') {
            this.lotteryState = 1
            this.isJoin = true
          }
        }).finally(() => {
          if (!this.deleteTimer) {
            return false
          }
          clearTimeout(this.deleteTimer)
          this.loopCanJoin(2000)
        })
      }, time)
    },
    join () {
      this.joinLoading = true
      lotteryJoin({ht_id: this.$route.query.id}).then((res) => {
      }).finally(() => {
        this.joinLoading = false
      })
    }
  },
  components: {
    XButton
  }
}
</script>

<style lang="less" scoped>
.container {
  background: linear-gradient(to bottom, #3d2b4a 70%, #5a3150);
}
#lottery-img {
  width: 100%;
  margin-top: 10px;
}
.tip {
  display: inline-block;
  padding: 2px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  margin-top: 0.6rem;
}
#lottery-btn {
  width: 4.76rem;
  border-radius: 20px;
  margin-top: 2.8rem;
  color: #fc3c37!important;
}
</style>
