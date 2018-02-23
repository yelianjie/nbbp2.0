<template>
  <div class="fullscreen onlines flex flex-v" v-show="visible" v-fixscroll="'#online-scroller'">
    <div class="flex-1 scroll" id="online-scroller" style="padding: 0.4rem 0.4rem 0.95rem;">
      <ul>
        <li v-for="(v, i) in peoples" :key="i" class="online-item" @click="showCard(v)">
          <div class="online-img"><img v-lazy="$options.filters.prefixImageUrl(v.headimgurl)" class="circle"></div>
          <div class="online-text overflow flex f12 flex-pack-center">
            <template v-if="v.sex == 1">
              <span class="sex sex-male" >
                <svg-icon icon-class="male" />
              </span>{{v.nickname}}
            </template>
            <template v-if="v.sex == 2">
              <span class="sex sex-female" >
                <svg-icon icon-class="female"/>
              </span>{{v.nickname}}
            </template>
          </div>
        </li>
      </ul>
    </div>
    <div class="close-box flex flex-align-center flex-pack-center">
      <svg-icon icon-class="close" @click.native="close"/>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'close'
  },
  props: ['visible', 'peoples'],
  methods: {
    close () {
      this.$emit('close', false)
    },
    showCard (data) {
      this.$emit('onShowCard', data)
    }
  }
}
</script>


<style lang="less" scoped>
.onlines {
  z-index: 2;
  background: url(../../assets/online-bg.jpg) no-repeat center;
  background-size: cover;
}
.online-img {
  height: 1.2rem;
  margin: 0.15rem auto;
}
.online-item {
  width: 1.6rem;
  margin-right: 0.1rem;
  display: inline-block;
  margin-bottom: 0.2rem;
  position: relative;
  &:nth-child(4n+4) {
    margin-right: 0;
  }
  .online-img {
    img {
      width: 1.2rem;
      height: 1.2rem;
      display: block;
      margin: auto;
    }
  }
  .online-text {
    text-align: center;
    margin: 0 0.05rem 0.15rem;
    .sex {
      margin-right: 2px;
    }
  }
}
.close-box {
  height: 1.1rem;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  background-image: linear-gradient(to top, rgba(0,0,0,.4), rgba(0,0,0,0));
  .svg-icon {
    width: 0.72rem;
    height: 0.72rem;
  }
}
</style>
