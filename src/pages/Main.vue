<template>
  <div>chat
    <template v-for="(v, i) in chatlist">
      <msg :key="i" :data="v" @onlikeclick="likeclick"></msg>
    </template>
  </div>
</template>

<script>
import Msg from '../components/Main/Msg'
export default {
  data () {
    return {
      chatlist: [{
        content: '啦啦啦1',
        likes: 5
      }, {
        content: '啦啦啦2',
        likes: 15
      }]
    }
  },
  methods: {
    likeclick () {
      this.chatlist[0].likes++
    }
  },
  components: {
    Msg
  }
}
</script>
