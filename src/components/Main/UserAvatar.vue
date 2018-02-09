<template>
  <div class="msg-item-user-avatar pr">
    <span class="level-icon-avatar" v-if="data.levelIcon" :style="{'backgournd-image': 'url(' + data.levelIcon + ')'}"></span>
    <img :src="data.headImg | prefixImageUrl" @click="avatar"/>
  </div>
</template>

<script>
export default {
  props: ['data'],
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
