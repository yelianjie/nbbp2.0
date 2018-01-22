<template>
  <div class="msg-bottom-btns flex">
    <template v-if="display == 1">
      <div class="msg-btn msg-btn-big flex flex-align-center">
        <span class="icon-wrap"><img src="../../assets/gift-b-icon.png"/></span>
        <span class="num">1</span>
      </div>
      <div class="msg-btn msg-btn-big flex flex-align-center">
        <span class="icon-wrap"><img src="../../assets/like-b-icon.png"/></span>
        <span class="num">2</span>
      </div>
      <div class="msg-btn msg-btn-big flex flex-align-center">
        <span class="icon-wrap"><img src="../../assets/ba-b-icon.png"/></span>
        <span class="num">3</span>
      </div>
      <div class="msg-btn msg-btn-big msg-share flex flex-1 flex-align-center">
        <img src="../../assets/logo.png"/>
      </div>
    </template>
    <template v-else>
      <div class="msg-btn flex flex-align-center">
        <svg-icon icon-class="gift" />
        <span class="num">1</span>
      </div>
      <div class="msg-btn flex flex-align-center">
        <img src="../../assets/ba-icon.png"/>
        <span class="num">3</span>
      </div>
      <div class="msg-btn flex flex-align-center">
        <svg-icon icon-class="like" />
        <span class="num">2</span>
      </div>
      
    </template>
    <!--<button @click="likea">点赞</button>{{this.like}}-->
  </div>
</template>

<script>
export default {
  props: ['like', 'display'],
  data () {
    return {

    }
  },
  methods: {
    likea () {
      this.$emit('onLike')
    }
  }
}
</script>

<style lang="less" scoped>
.msg-btn {
  margin-left: 0.2rem;
  * {
    display: block;
  }
  img, svg {
    width: 0.24rem;
    height: 0.24rem;
  }
  .icon-wrap {
    width: 0.4rem;
    height: 0.4rem;
    background-color: #fff;
    border-radius: 50%;
  }
  &.msg-btn-big {
    margin-left: 0;
    margin-right: 0.2rem;
    img {
      margin: 0.08rem auto;
    }
  }
  .num {
    font-size: 12px;
    width: 0.3rem;
    text-align: center;
  }
  &.msg-share {
    justify-content: flex-end;
    margin-right: 0;
    img {
      margin: 0;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}
</style>
