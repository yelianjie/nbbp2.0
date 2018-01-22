<template>
  <div id="bp-window">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade">
      <div class="bp-model" v-show="visible"></div>
    </transition>  
  </div>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'closeWindow'
  },
  props: ['visible'],
  methods: {
    closeWindow () {
      this.$emit('closeWindow', false)
    }
  }

}
</script>


<style lang="less" scoped>
.bp-model {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 300px;
  z-index: 2;
  background-color: red;
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
