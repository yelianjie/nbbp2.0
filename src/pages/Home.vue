<template>
  <div class="container flex flex-v" style="background-color:#121420;">
    <div class="home-header"><svg-icon icon-class="hot" className="hot-icon"/><span class="h-title f16">热门推荐</span><span class="city-now" @click="showAddress = true">{{cityName}}<svg-icon icon-class="arrow-down" className="arrow-down-icon"/></span></div>
    <div class="flex-1 scroll">
      <inline-loading v-if="loading" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
      <BarsList :barsList="barsList" enter="home"></BarsList>
    </div>
    <x-address style="display:none;" hide-district popup-title="选择城市" v-model="adsValue" title="" @on-hide="closeAddress" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
  </div>  
</template>

<script>
import BarsList from '@/components/Center/BarsList'
import { XAddress } from 'vux'
import { getDistance, filterRegionByName } from '@/utils/utils'
import { getRegionData, getBarsByCity } from '@/api/'
import InlineLoading from '../components/InlineLoading'
export default {
  data () {
    return {
      adsValue: ['330000', '330200'],
      addressData: [],
      showAddress: false,
      barsList: [],
      userAllow: true,
      userPosition: {
        lat: '',
        lng: ''
      },
      loading: true
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '牛霸霸屏'
    next()
  },
  created () {
    this.$wechat.ready(() => {
      this.$wechat.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: (res) => {
          this.getAllRegions(res.latitude, res.longitude)
        },
        fail: () => {
          this.getAllRegions(29.88525897, 121.57900597)
        }
      })
    })
    /* this.loading = true
    this.getAllRegions(29.88525897, 121.57900597) */
  },
  mounted () {
  },
  methods: {
    getAllRegions (latitude, longitude) {
      getRegionData().then((res) => {
        for (var i = 0; i < res.result.length; i++) {
          if (res.result[i].parent !== '100000') {
            break
          } else {
            delete res.result[i].parent
          }
        }
        this.addressData = res.result
        this.getPosition(latitude, longitude)
      })
    },
    closeAddress (flag) {
      if (!flag) {
        return false
      }
      let find = this.addressData.find((v, i) => ~~(v.value) === ~~(this.adsValue[1]))
      this.loading = true
      if (find) {
        getBarsByCity({region_code: find.value}).then((res) => {
          if (Array.isArray(res.result)) {
            if (this.userAllow) {
              // this.wxCoordsToBaidu(res.result)
              res.result.map((v, i) => {
                v.distance = getDistance(v.locationLat, v.locationLng, this.userPosition.lat, this.userPosition.lng)
              })
            } else {
              res.result.map((v, i) => {
                v.distance = '未知'
              })
            }
            res.result.sort((a, b) => a.distance - b.distance)
            this.barsList = res.result
          }
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.loading = false
      }
    },
    getPosition (latitude, longitude) {
      this.$jsonp('http://api.map.baidu.com/geocoder/v2/', {
        location: latitude + ',' + longitude,
        coordtype: 'wgs84ll',
        ret_coordtype: 'bd09ll',
        output: 'json',
        ak: 'gqwAbhpew0rdL9sZei9dL2PQWGqW7beB'
      }).then(json => {
        var detail = json.result.addressComponent
        var data = filterRegionByName(detail.province, detail.city, this.addressData)
        this.adsValue = [data.province_id, data.city_id]
        this.userPosition.lng = json.result.location.lng
        this.userPosition.lat = json.result.location.lat
        this.closeAddress(true)
      })
    },
    wxCoordsToBaidu (data) {
      let coords = ''
      data.forEach((v, i) => {
        coords += v.locationLat + ',' + v.locationLng + ';'
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
      if (find) {
        return find.name
      } else {
        return ''
      }
    }
  },
  components: {
    BarsList,
    XAddress,
    InlineLoading
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
