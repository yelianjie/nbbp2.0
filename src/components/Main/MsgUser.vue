<template>
  <div class="msg-item-top flex flex-align-center">
    <span class="level level-1">V1</span>
    <img src="../../assets/sex-female-icon.png" class="sex"/>
    <span class="msg-name">萱萱</span>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/main.less';

.msg-item-top {
  * {
    display: block;
    margin-right: 4px;
  }
  .msg-name {
    font-size: @baseFontSize;
  }
  .sex {
    height: 16px;
  }
}

</style>
