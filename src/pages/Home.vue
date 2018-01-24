<template>
  <div class="container flex flex-v" style="background-color:#121420;">
    <div class="home-header"><svg-icon icon-class="hot" className="hot-icon"/>热门推荐<span class="city-now" @click="showAddress = true">{{cityName}}<svg-icon icon-class="arrow-down" className="arrow-down-icon"/></span></div>
    <div class="flex-1 scroll">
      <BarsList :barsList="barsList" enter="home"></BarsList>
    </div>
    <x-address style="display:none;" hide-district popup-title="选择城市" v-model="adsValue" title="" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
  </div>  
</template>

<script>
import BarsList from '@/components/Center/BarsList'
import { XAddress, ChinaAddressV4Data } from 'vux'
export default {
  data () {
    return {
      adsValue: ['330000', '330200'],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      barsList: []
    }
  },
  mounted () {
    this.$vux.loading.show({
      text: 'Loading'
    })
    setTimeout(() => {
      this.barsList = [{
        distance: '5000',
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号'
      }, {
        distance: '5000',
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号'
      }, {
        distance: '6000',
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号'
      }]
      this.$vux.loading.hide()
    }, 1000)
  },
  methods: {
  },
  computed: {
    cityName () {
      let find = this.addressData.find((v, i) => v.value === this.adsValue[1])
      return find.name
    }
  },
  components: {
    BarsList,
    XAddress
  }
}
</script>

<style lang="less" scoped>
.home-header {
  line-height: 0.8rem;
  height: 0.8rem;
  text-align: center;
  color: #fff;
  position: relative;
  .city-now {
    position: absolute;
    left: 0.3rem;
    top: 0;
    font-size: 14px;
  }
  .hot-icon {
    width: 16px;
    height: 16px;
    fill: #fd2a3d;
    margin-right: 4px;
  }
  .arrow-down-icon {
    margin-left: 4px;
  }
}
.container {
  /deep/ .weui-loadmore__tips {
    color: #fff;
  }
}
</style>
