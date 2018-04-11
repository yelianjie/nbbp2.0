<template>
  <div class="msg-item-user-avatar pr">
    <template v-if="data.grade_title && data.grade_title != '平民'">
      <span class="level-icon-avatar" :style="{'background-image': 'url(' + $options.filters.filterLevel(data.grade_title, 'avatarIcon') + ')'}" @click="avatar()"></span>
      <img :src="$options.filters.prefixImageUrl(data.initiator_headimgurl)"/>
    </template>
    <template v-else>
      <img :src="$options.filters.prefixImageUrl(data.initiator_headimgurl)" @click="avatar()"/>
    </template>
    <div class="delete-msg f12 fff-bp" @click="deleteMsg" v-if="isShow && data.msg_type != 3">删除</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['data'],
  methods: {
    avatar () {
      this.$store.commit('main/SET_CURRENT_USER_INFO', this.data)
      this.$emit('onAvatar')
    },
    deleteMsg () {
      this.$emit('onDelete')
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters('user', {
      userInfo: 'userInfo',
      barManagerInfo: 'barManagerInfo'
    }),
    isShow () {
      if (this.userInfo && (this.barManagerInfo.isManager > 0 || this.barManagerInfo.isHost > 0 || this.userInfo.id === this.data.initiator_mc_id)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
</style>
