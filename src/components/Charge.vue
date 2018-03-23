<template>
  <div class="charge-price-list fff-bp" :class="{'mainCharge': !selectItem}">
    <inline-loading v-if="loading" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
    <div class="charge-price-item" v-for="(v, i) in exps" :key="i" :class="{'selected': bpValueIndex == i}" v-else @click="select(i)">
      <div class="value f14"><svg-icon icon-class="coin" className="coin-color" /><span class="ml2 ver-mid">{{v.money}}</span><div class="f12 jingyan"><span class="jy-value">+{{v.experience}}经验值</span></div><span class="selected-icon"><svg-icon icon-class="selected"/></span></div>
      <div class="value-price f14">¥{{v.money}}</div>
    </div>
  </div>
</template>

<script>
import InlineLoading from './InlineLoading'
export default {
  props: {
    exps: {
      type: Array,
      default: () => {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectItem: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      bpValueIndex: -1
    }
  },
  methods: {
    select (i) {
      if (this.selectItem) {
        this.bpValueIndex = this.bpValueIndex === i ? -1 : i
        this.$emit('onSelect', this.bpValueIndex)
      } else {
        this.$emit('onSelect', i)
      }
    }
  },
  components: {
    InlineLoading
  }
}
</script>

<style lang="less" scoped>
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.3);
.mainCharge.fff-bp {
  color: #333;
}
.charge-price-item {
  display: inline-block;
  width: 1.5rem;
  margin-right: 0.9rem;
  margin-bottom: 0.4rem;
  &:nth-child(3n+3) {
    margin-right: 0;
  }
  .value {
    line-height: 0.72rem;
    text-align: center;
    border: 1px solid @borderColor;
    border-radius: 10px;
    position: relative;
    .mainCharge & {
      color: #333;
      border: 1px solid rgba(51, 51, 51, 0.3);
    }
  }
  .jingyan {
    height: 0.36rem;
    background-color: #3f414e;
    position: relative;
    border-radius: 0 0 10px 10px;
    .mainCharge & {
      background-color: #f5f5f5;
    }
  }
  .jy-value {
    transform: translate3d(-50%, -50%, 0) scale(1);
    color: #82858e;
    position: absolute;
    left: 50%;
    top: 50%;
    line-height: 1;
    white-space: nowrap;
  }
  &.selected {
    .value {
      border: 1px solid @mainColor;
    }
    .selected-icon {
      display: block;
    }
    .jingyan {
      background-color: @mainColor;
    }
    .jy-value {
      color: #fff;
    }
  }
  .value-price {
    vertical-align: middle;
    text-align: center;
    margin-top: 4px;
  }
}
.coin-color {
  color: #f8c21a;
}
@media screen and (min-width: 320px) and (max-width: 374px) {
  .charge-price-item .jy-value {
    transform: translate3d(-50%, -50%, 0) scale(0.8);
  }
}
@media screen and (min-width: 375px) and (max-width: 413px) {
  .charge-price-item .jy-value {
    transform: translate3d(-50%, -50%, 0) scale(0.85);
  }
}
.selected-icon {
    color: @mainColor;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(50%, -50%, 0);
    display: none;
    width: 0.3rem;
    height: 0.3rem;
    .svg-icon {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 2;
      display: block;
    }
    &:after {
      content: "";
      position: absolute;
      left: 15%;
      top: 15%;
      width: 70%;
      height: 70%;
      border-radius: 50%;
      z-index: 1;
      background-color: #fff;
    }
  }
@media screen and (min-width: 768px){
  .charge-price-item:nth-child(3n+3) {
    margin-right: 0.9rem;
  }
}
</style>
