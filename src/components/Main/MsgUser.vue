<template>
  <div class="msg-item-top flex flex-align-center">
    <span class="level level-1">V1</span>
    <span class="sex sex-male"><svg-icon icon-class="male" /></span>
    <span class="msg-name">萱萱</span>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/main.less';

.msg-item-top {
  span {
    display: block;
    margin-right: 4px;
  }
  .msg-name {
    font-size: @baseFontSize;
  }
  .sex {
    padding: 2px 4px;
    border-radius: 3px;
    .svg-icon {
      height: 12px;
      width: 12px;
      display: block;
    }
  }
  .sex-male {
    background-color: #3a72d8;
  }
  .sex-female {
    background-color: #ff3976;
  }
}

</style>
