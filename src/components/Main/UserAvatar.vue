<template>
  <div class="msg-item-user-avatar">
    <img src="../../assets/logo.png" @click="avatar"/>
  </div>
</template>

<script>
export default {
  methods: {
    avatar () {
      this.$emit('onAvatar')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
</style>
