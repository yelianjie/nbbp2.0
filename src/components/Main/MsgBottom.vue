<template>
  <div class="msg-bottom-btns flex">
    <template v-if="display == 1">
      <div class="msg-btn msg-btn-big flex flex-align-center" @click="ds">
        <span class="icon-wrap pr"><img src="../../assets/gift-b-icon.png"/></span>
        <span class="num f12">{{data.reward_count}}</span>
      </div>
      <div class="msg-btn msg-btn-big flex flex-align-center" @click="bp">
        <span class="icon-wrap pr"><img src="../../assets/ba-b-icon.png"/></span>
        <span class="num f12">{{data.screen_count}}</span>
      </div>
      <div class="msg-btn msg-btn-big flex flex-align-center" @click="liked">
        <span class="icon-wrap pr"><img src="../../assets/like-b-icon.png"/></span>
        <span class="num f12">{{data.fabulous_count}}</span>
      </div>
      <div class="msg-btn msg-btn-big msg-share flex flex-1 flex-align-center">
        <span class="msg-share-wrap" style="padding-left:10px;"  @click="share" ><svg-icon icon-class="share"/></span>
        
      </div>
    </template>
    <template v-else>
      <div class="msg-btn flex flex-align-center" @click="ds">
        <svg-icon icon-class="gift"/>
        <span class="num f12">{{data.reward_count}}</span>
      </div>
      <div class="msg-btn flex flex-align-center" @click="bp">
        <svg-icon icon-class="ba"/>
        <span class="num f12">{{data.screen_count}}</span>
      </div>
      <div class="msg-btn flex flex-align-center" @click="liked">
        <svg-icon icon-class="like"/>
        <span class="num f12">{{data.fabulous_count}}</span>
      </div>
      
    </template>
    
    <!--<button @click="likea">点赞</button>{{this.like}}-->
  </div>
</template>

<script>
export default {
  props: ['data', 'display'],
  data () {
    return {

    }
  },
  methods: {
    touch () {
      alert('touch')
    },
    liked () {
      this.$emit('onLike')
    },
    share () {
      this.$emit('onShare')
    },
    ds () {
      this.setUserInfo()
      this.$emit('onDs')
    },
    bp () {
      this.setUserInfo()
      this.$emit('onBp')
    },
    setUserInfo () {
      this.$store.commit('app/SET_CURRENT_USER_INFO', this.data)
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
    width: 0.26rem;
    height: 0.26rem;
  }
  .icon-wrap {
    width: 0.42rem;
    height: 0.42rem;
    background-color: #fff;
    border-radius: 50%;
  }
  &.msg-btn-big {
    margin-left: 0;
    margin-right: 0.2rem;
    padding-top: 0.15rem;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
  .num {
    margin-left: 3px;
    text-align: center;
  }
  &.msg-share {
    justify-content: flex-end;
    margin-right: 0;
    .svg-icon {
      margin: 0;
      width: 0.48rem;
      height: 0.48rem;
    }
  }
}
</style>
