<template>
  <div class="msg-item">
    <div class="msg">{{data.content}}</div>
    <msg-bottom :like="data.likes" @onlikeclick="likeclick"></msg-bottom>
  </div>
</template>

<script>
import MsgBottom from './MsgBottom'
export default {
  props: ['data'],
  components: {
    MsgBottom
  },
  methods: {
    likeclick () {
      this.$emit('onlikeclick')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
