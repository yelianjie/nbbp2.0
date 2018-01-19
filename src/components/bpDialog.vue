<template>
  <div class="bp-dialog-wrap">
      <div class="bp-mask" style="display:none;"></div>
    
      <div class="bp-dialog" style="display: block;">
        <div class="bp-dialog__hd">
          <strong class="bp-dialog__title">操作提示</strong>
        </div>
      <div class="bp-dialog__bd">
        <p style="text-align: center;">确定咩？</p>
      </div>
      <div class="bp-dialog__ft">
        <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_default">取消</a>
        <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_primary">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible']
}
</script>

<style lang="less" scoped>
.setTopLine() {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #D5D5D6;
  color: #D5D5D6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.setLeftLine() {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid #D5D5D6;
  color: #D5D5D6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}
.bp-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
}

.bp-mask_transparent{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.bp-dialog {
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color :#fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
}
.bp-dialog__hd {
    padding: 1.3em 1.6em .5em;
    &.with-no-content {
      padding: 1.7em 1.6em;
    }
}
.bp-dialog__title {
    font-weight: 400;
    font-size: 18px;
}
.bp-dialog__bd {
    padding: 0 1.6em .8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999;
    &:first-child{
        padding:2.7em 20px 1.7em;
        color:#353535;
    }
}
.bp-dialog__ft {
    position: relative;
    line-height: 48px;
    font-size: 18px;
    display: flex;
    &:after {
        content: " ";
        .setTopLine();
    }
}
.bp-dialog__btn {
    display: block;
    flex: 1;
    color: #353535;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    &:active {
        background-color: #EEEEEE;
    }

    position: relative;
    &:after {
        content: " ";
        .setLeftLine();
    }
    &:first-child {
        &:after {
            display: none;
        }
    }
}
.bp-dialog__btn_default {
    color: #353535;
}
.bp-dialog__btn_primary {
    color: #FF9900;
}
@media screen and (min-width: 1024px) {
    .bp-dialog {
        width: 35%;
    }
}
</style>
