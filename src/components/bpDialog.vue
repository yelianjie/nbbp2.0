<template>
  <div class="bp-dialog-wrap">
    <transition name="bp-mask">
        <div class="bp-mask" style="display:none;"  v-show="visible"></div>
    </transition>
    <transition name="bp-dialog">
        <div class="bp-dialog" style="display: none;" v-show="visible">
            <div class="bp-dialog__hd">
            <strong class="bp-dialog__title">${opt.title}</strong>
            </div>
            <div class="bp-dialog__bd">
            <p style="text-align: center;" v-html="content"></p>
            </div>
            <div class="bp-dialog__ft">
            <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_default" @click.prevent="cancle">${opt.cancelText}</a>
            <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_primary" @click.prevent="confirm">${opt.confirmText}</a>
            </div>
        </div>
    </transition>
    </div>
</template>

<script>
export default {
  props: ['visible']
}
</script>

<style lang="less" scoped>
</style>
