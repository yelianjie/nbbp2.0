<template>
  <div class="msg-item-top flex flex-align-center">
    <span class="level level-1" v-if="data.grade_title != '平民'">{{data.grade_title}}</span>
    <span class="sex sex-male"><svg-icon icon-class="male" v-if="data.sex == 1" /><svg-icon icon-class="female" v-if="data.sex == 2" /></span>
    <span class="msg-name f14">{{data.initiator_nickname}}</span>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
</style>
