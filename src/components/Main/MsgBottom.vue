<template>
  <div class="msg-bottom">
    <button @click="likea">点赞</button>{{this.like}}
  </div>
</template>

<script>
export default {
  props: ['like'],
  data () {
    return {

    }
  },
  methods: {
    likea () {
      this.$emit('onlikeclick')
    }
  }
}
</script>
