<template>
  <div class="msg-item-user-avatar pr">
    <span class="level-icon-avatar"></span>
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
