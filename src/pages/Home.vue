<template>
  <div class="container flex flex-v" style="background-color:#121420;">
    <div class="home-header"><svg-icon icon-class="hot" className="hot-icon"/><span class="h-title f16">热门推荐</span><span class="city-now" @click="showAddress = true">{{cityName}}<svg-icon icon-class="arrow-down" className="arrow-down-icon"/></span></div>
    <div class="flex-1 scroll">
      <BarsList :barsList="barsList" enter="home"></BarsList>
    </div>
    <x-address style="display:none;" hide-district popup-title="选择城市" v-model="adsValue" title="" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
  </div>  
</template>

<script>
import BarsList from '@/components/Center/BarsList'
import { XAddress, ChinaAddressV4Data } from 'vux'
import { getDistance } from '@/utils/utils'
export default {
  data () {
    return {
      adsValue: ['330000', '330200'],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      barsList: []
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏'
    next()
  },
  mounted () {
    this.$vux.loading.show({
      text: 'Loading'
    })
    setTimeout(() => {
      let arr = [{
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号',
        lat: '114.21892734521',
        lng: '29.575429778924'
      }, {
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号',
        lat: '114.21692734521',
        lng: '29.575429778924'
      }, {
        name: '牛霸酒吧',
        address: '鄞州区首南街道500号',
        lat: '114.21992734521',
        lng: '29.575429778924'
      }]
      this.wxCoordsToBaidu(arr)
      this.$vux.loading.hide()
    }, 1000)
  },
  methods: {
    wxCoordsToBaidu (data) {
      let coords = ''
      data.forEach((v, i) => {
        coords += v.lat + ',' + v.lng + ';'
      })
      coords = coords.substring(0, coords.length - 1)
      this.$jsonp('http://api.map.baidu.com/geoconv/v1/', {
        coords: coords,
        from: 1,
        to: 5,
        ak: 'gqwAbhpew0rdL9sZei9dL2PQWGqW7beB'
      }).then(json => {
        console.log(json)
        if (!json.result) {
          return
        }
        var distances = []
        json.result.forEach((v, i) => {
          distances.push(getDistance(v.y, v.x, 30.575429778924, 114.31992734521))
        })
        data.map((v, i) => {
          v.distance = distances[i]
        })
        this.barsList = data
      // 返回数据 json， 返回的数据就是json格式
      }).catch(err => {
        console.log(err)
      })
    }
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
  font-size: 0;
  .h-title {
    vertical-align: middle;
  }
  .city-now {
    position: absolute;
    left: 0.3rem;
    top: 0;
    font-size: 14px;
  }
  .hot-icon {
    width: 24px;
    height: 24px;
    fill: #fd2a3d;
    margin-right: 4px;
    vertical-align: middle;
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
