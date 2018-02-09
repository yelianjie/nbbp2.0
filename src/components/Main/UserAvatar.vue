<template>
  <div class="msg-item-user-avatar pr">
    <template v-if="data.levelIcon">
      <span class="level-icon-avatar" :style="{'backgournd-image': 'url(' + data.levelIcon + ')'}" @click="avatar()"></span>
      <img :src="data.headImg | prefixImageUrl"/>
    </template>
    <template v-else>
      <img :src="data.headImg | prefixImageUrl" @click="avatar()"/>
    </template>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    avatar () {
      this.$store.commit('main/SET_CURRENT_USER_INFO', this.data)
      this.$emit('onAvatar')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
</style>
