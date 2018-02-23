<template>
  <div class="msg-item-user-avatar pr">
    <template v-if="data.grade_title && data.grade_title != '平民'">
      <span class="level-icon-avatar" :style="{'background-image': 'url(' + $options.filters.filterLevel(data.grade_title, 'avatarIcon') + ')'}" @click="avatar()"></span>
      <img :src="$options.filters.prefixImageUrl(data.initiator_headimgurl)"/>
    </template>
    <template v-else>
      <img :src="$options.filters.prefixImageUrl(data.initiator_headimgurl)" @click="avatar()"/>
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
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
</style>
