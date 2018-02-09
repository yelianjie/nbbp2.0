<template>
  <div class="container flex flex-v bg1" id="profile">
    <div class="flex-1 scroll">
      <div style="height:1.5rem;"></div>
      <div id="avatar-select">
        <upload name="avatar-input" @on-clip="afterClip" :is-crop="true">
          <div class="avatar flex flex-v flex-align-center">
            <img :src="form.headimgurl | prefixImageUrl"/>
            <p class="f13">点击更换头像</p>
            <label class="n-label" for="avatar-input"></label>
          </div>
        </upload>
      </div>
      <group label-width="4.5em" label-align="center">
        <x-input title="昵称" v-model="form.nickname" value-text-align="left" data-vv-as="昵称" v-validate.initial="'required'"></x-input>
        <popup-picker title="性别" :data="sexs" v-model="form.sex" value-text-align="left" show-name></popup-picker>
        <datetime title="生日" :min-year="1940" v-model="form.birthday" value-text-align="left" placeholder="选择出生日期"></datetime>
        <popup-picker title="身高" :data="heights" v-model="form.stature" value-text-align="left" placeholder="选择身高"></popup-picker>
        <popup-picker title="体重" :data="weights" v-model="form.weight" value-text-align="left" placeholder="选择体重"></popup-picker>
        <x-address title="城市" hide-district v-model="adsValue" :list="addressData" value-text-align="left"></x-address>
      </group>
      <group label-width="4.5em" label-align="center">
        <x-input class="autograph-input" title="简介" :max="15" v-model="form.autograph" placeholder="一句精致的简介，让别人更懂你" value-text-align="left"></x-input>
      </group>
    </div>
    <div id="profile-submit-btn">
      <x-button :gradients="['#f31374', '#f31374']" @click.native="saveInfo" :show-loading="loading" :disabled="loading">保存</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput, PopupPicker, Datetime, XAddress, XButton } from 'vux'
import Upload from '@/components/Upload'
import { mapActions } from 'vuex'
import { getRegionData } from '@/api/'
import { filterRegionByName, filterRegionById } from '@/utils/utils'
let heights = []
let weights = []
for (var i = 150; i <= 200; i++) {
  heights.push({
    name: i,
    value: i
  })
}
for (var k = 40; k <= 100; k++) {
  weights.push({
    name: k,
    value: k
  })
}
export default {
  components: {
    Group,
    XInput,
    PopupPicker,
    XAddress,
    Datetime,
    Upload,
    XButton
  },
  data () {
    return {
      o: {
        a: 1,
        b: 2
      },
      form: {
        nickname: '',
        sex: [],
        birthday: '',
        stature: [],
        weight: [],
        autograph: '',
        headimgurl: ''
      },
      adsValue: [],
      sexs: [[{
        name: '男',
        value: '1'
      }, {
        name: '女',
        value: '2'
      }]],
      heights: [heights],
      weights: [weights],
      addressData: [],
      loading: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '个人资料编辑'
    next()
  },
  created () {
    let userInfo = Object.assign({}, this.$store.getters['user/userInfo'])
    this.$vux.loading.show({
      text: '正在加载'
    })
    if (Object.keys(userInfo).length === 0) {
      this.getRegions(() => {
        this.getUserInfo().then((res) => {
          res.sex = [res.sex.toString()]
          res.weight = [res.weight.toString()]
          res.stature = [res.stature.toString()]
          let region = filterRegionByName(res.province, res.city, this.addressData)
          this.adsValue = [region.province_id, region.city_id]
          this.form = Object.assign({}, res)
          this.$vux.loading.hide()
        })
      })
    } else {
      this.getRegions(() => {
        userInfo.sex = [userInfo.sex.toString()]
        userInfo.weight = [userInfo.weight.toString()]
        userInfo.stature = [userInfo.stature.toString()]
        let region = filterRegionByName(userInfo.province, userInfo.city, this.addressData)
        this.adsValue = [region.province_id, region.city_id]
        this.form = Object.assign({}, userInfo)
        this.$vux.loading.hide()
      })
    }
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo',
      'saveUserInfo'
    ]),
    getRegions (cb) {
      getRegionData().then((res) => {
        for (var i = 0; i < res.result.length; i++) {
          if (res.result[i].parent !== '100000') {
            break
          } else {
            delete res.result[i].parent
          }
        }
        this.addressData = res.result
        cb && cb()
      })
    },
    afterClip (base64) {
      this.form.headimgurl = base64
    },
    saveInfo () {
      this.$validator.validateAll().then(result => {
        let getErrors = this.vErrors.all()
        if (getErrors.length > 0) {
          this.$vux.toast.show({
            text: getErrors[0]
          })
        } else {
          this.loading = true
          const formData = Object.assign({}, this.form, filterRegionById(this.adsValue[0], this.adsValue[1], this.addressData))
          formData.weight = formData.weight.join()
          formData.sex = formData.sex.join()
          formData.stature = formData.stature.join()
          this.saveUserInfo(formData).then((res) => {
            this.getUserInfo().then((res) => {
              this.$vux.toast.show({
                text: '保存成功'
              })
            })
            this.loading = false
          })
        }
      })
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/global.less';
@bgColor: #181b2a;
#avatar-select {
  height: 1.5rem;
  position: relative;
  background-color: @bgColor;
  .avatar {
    position: absolute;
    top: -0.8rem;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    img {
      border-radius: 50%;
      width: 1.6rem;
      height: 1.6rem;
    }
    p {
      margin: 4px 0;
      color: #61667a;
    }
  }
}
#profile /deep/ .weui-cells {
  margin-top: 0;
  margin-bottom: 0.2rem;
  background-color: @bgColor;
  color: #61667a;
  &:before {
    border: 0;
  }
  &:after {
    border: 0;
  }
  .weui-cell {
    padding: 0.35rem 0.4rem;
    &.weui-cell_access:active {
      background-color: #1a1d30;
    }
    &:before {
      border: 0;
    }
    &:not(:first-child):after {
      content: "";
      .setTopLine(#12151e);
      left: 0.4rem;
      right: 0.4rem;
    }
  }
  .vux-datetime {
    color: #61667a;
  }
  .vux-cell-box:not(:first-child):before {
    border: 0;
  }
  .vux-cell-box:not(:first-child):after {
    content: "";
    .setTopLine(#12151e);
    left: 0.4rem;
    right: 0.4rem;
  }
  .vux-cell-value,
  .weui-input {
    /* color: #2e3241; */
    color: #fff;
  }
  .vux-cell-placeholder {
    color: #2e3241;
  }
  .autograph-input .weui-input::-webkit-input-placeholder {
    color: #2e3241;
    font-size: 17px;
  }
}
#profile-submit-btn {
  width: 90%;
  margin: 0 auto;
  padding: 0.2rem 0;
}
</style>

