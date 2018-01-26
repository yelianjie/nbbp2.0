<template>
  <li><div class="flex group-cell f14 flex-align-center" :class="{'link': isLink}"><span :style="{'color': color}"><svg-icon :icon-class="iconName" className="left-icon" /></span><div class="flex-1 f15">{{title}}</div><svg-icon v-if="isLink" icon-class="arrow-right" className="arrow-right"/><div class="slot-content"><slot></slot></div></div></li>
</template>

<script>
export default {
  props: ['color', 'title', 'iconName', 'isLink']
}
</script>

<style lang="less" scoped>
@import (reference) '../../styles/global.less';
li {
  display: block;
}
.group-cell {
  padding: 0.35rem 0;
  margin: 0 0.4rem;
  color: #fff;
  position: relative;
  .left-icon {
    width: 0.3rem;
    height: 0.3rem;
  }
  &::before {
    content: "";
    .setTopLine(#12151e);
  }
  >span {
    display: block;
    width: 0.56rem;
    height: 0.56rem;
    line-height: 0.56rem;
    text-align: center;
    background-color: #2e313a;
    border-radius: 50%; 
    margin-right: 10px;
  }
  .arrow-right {
    width: 0.4rem;
    height: 0.4rem;
    fill: #5d5e63;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &.link .slot-content {
    margin-right: 0.4rem;
  }
}
</style>
