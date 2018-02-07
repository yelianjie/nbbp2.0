<template>
  <div class="bp-dialog-wrap">
    <transition name="bp-mask">
        <div class="bp-mask" v-show="visible"></div>
    </transition>
    <transition name="bp-dialog">
        <div class="bp-dialog" :class="{'bp-dialog-top': position == 'top'}" :style="{'background': bgTitle ? 'transparent' : '#fff'}" v-show="visible">
            <div class="bp-dialog__hd" v-if="!bgTitle">
              <strong class="bp-dialog__title">{{title}}</strong>
            </div>
            <div class="bp-dialog_bg" v-else>
              <img :src="bgSrc"/>
            </div>
            <div class="bp-dialog__bd" :class="{'line': !bgTitle}">
            <slot></slot>
            </div>
            <div class="bp-dialog__ft">
            <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_default" @click.prevent="cancle">{{cancelText}}</a>
            <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_primary" @click.prevent="confirm">{{confirmText}}</a>
            </div>
        </div>
    </transition>
    </div>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'closeDialog'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'middle'
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    bgTitle: {
      type: Boolean,
      default: false
    },
    bgSrc: {
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  computed: {
  },
  methods: {
    cancle () {
      this.$emit('closeDialog', false)
    },
    confirm () {
      this.$emit('onConfirm')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/bpDialog.less';
</style>
