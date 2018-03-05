<template>
  <div class="msg-item-top flex flex-align-center">
    <span class="level" :class="'level-' + data.mc_level_id" v-if="data.grade_title">{{data.grade_title}}</span>
    <span class="sex sex-male" v-if="data.sex == 1"><svg-icon icon-class="male"/></span>
    <span class="sex sex-female" v-if="data.sex == 2"><svg-icon icon-class="female"/></span>
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
