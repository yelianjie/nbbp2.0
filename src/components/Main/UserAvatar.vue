<template>
  <div class="msg-item-user-avatar pr">
    <template v-if="data.grade_title && data.grade_title != '平民'">
      <span class="level-icon-avatar" :style="{'backgournd-image': 'url(' + $options.filters.filterLevel(data.grade_title, 'avatarIcon') + ')'}" @click="avatar()"></span>
      <img :src="data.initiator_headimgurl | prefixImageUrl"/>
    </template>
    <template v-else>
      <img :src="data.initiator_headimgurl | prefixImageUrl" @click="avatar()"/>
    </template>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    avatar () {
      var data = {uid: this.data.initiator_mc_id, autograph: this.data.autograph, city: this.data.city, levelName: this.data.grade_title, headImg: this.data.initiator_headimgurl, nickname: this.data.initiator_nickname, sex: this.data.sex}
      this.$store.commit('main/SET_CURRENT_USER_INFO', data)
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
