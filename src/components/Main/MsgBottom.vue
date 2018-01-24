<template>
  <div class="msg-bottom-btns flex">
    <template v-if="display == 1">
      <div class="msg-btn msg-btn-big flex flex-align-center" @click="ds">
        <span class="icon-wrap"><img src="../../assets/gift-b-icon.png"/></span>
        <span class="num f12">1</span>
      </div>
      <div class="msg-btn msg-btn-big flex flex-align-center" @click="liked">
        <span class="icon-wrap"><img src="../../assets/like-b-icon.png"/></span>
        <span class="num f12">2</span>
      </div>
      <div class="msg-btn msg-btn-big flex flex-align-center" @click="bp">
        <span class="icon-wrap"><img src="../../assets/ba-b-icon.png"/></span>
        <span class="num f12">3</span>
      </div>
      <div class="msg-btn msg-btn-big msg-share flex flex-1 flex-align-center">
        <svg-icon icon-class="share" @click.native="share"/>
      </div>
    </template>
    <template v-else>
      <div class="msg-btn flex flex-align-center" @click="ds">
        <svg-icon icon-class="gift" @click.native="ds"/>
        <span class="num f12">1</span>
      </div>
      <div class="msg-btn flex flex-align-center" @click="bp">
        <img src="../../assets/ba-icon.png"/>
        <span class="num f12">3</span>
      </div>
      <div class="msg-btn flex flex-align-center" @click="liked">
        <svg-icon icon-class="like" @click.native="like"/>
        <span class="num f12">2</span>
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
    liked () {
      this.$emit('onLike')
    },
    share () {
      this.$emit('onShare')
    },
    ds () {
      this.$emit('onDs')
    },
    bp () {
      this.$emit('onBp')
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
    padding-top: 0.15rem;
    img {
      margin: 0.08rem auto;
    }
  }
  .num {
    width: 0.3rem;
    text-align: center;
  }
  &.msg-share {
    justify-content: flex-end;
    margin-right: 0;
    .svg-icon {
      margin: 0;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}
</style>
