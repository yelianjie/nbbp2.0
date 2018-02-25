<template>
  <div class="tc" style="padding: 10px 0;">
    <div class="loading" :style="{'border': '0.08rem solid '+bgColor, 'border-top-color': color }"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    bgColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.2)'
    }
  }
}
</script>


<style lang="less" scoped>
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.loading {
  margin: 0 auto;
  border-radius: 50%;
  width: 0.48rem;
  height: 0.48rem;
  animation: spin 1s infinite linear;
}
</style>
