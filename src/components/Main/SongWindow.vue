<template>
  <div class="window-pop" v-fixscroll="'.songs-container, .song-list'">
    <transition name="fade">
      <div class="mask-overlay" v-show="visible" @click="closeWindow"></div>
    </transition>
    <transition name="slide-fade" @after-leave="afterLeave">
      <div class="window" id="song-model" v-show="visible">
        <span class="close-icon" @click="closeWindow"><svg-icon icon-class="close" @click.native="closeWindow"/></span>
        <div class="window-top">
          <p class="window-title f14 flex flex-align-center" v-if="currentUserInfo.hasOwnProperty('initiator_mc_id')">为<img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl"  class="for-who circle"/>{{currentUserInfo.initiator_nickname}}点歌</p>
          <p class="window-title f14 flex flex-align-center" style="line-height:0.64rem;" v-else>为全场观众点歌</p>
        </div>
        <div class="window-middle">
          <div class="song-tab flex f14">
            <a class="flex-1 tc db" :class="{'selected' : tabView == 1}" @click="tabView = 1">我要点歌<span class="song-number f12">({{totalSong}}首)</span></a>
            <a class="flex-1 tc db" :class="{'selected' : tabView == 2}" @click="tabView = 2">本场已点<span class="song-number f12">({{tonightSongs.length}}首)</span></a>
          </div>
        </div>
        <div class="pr" style="height: 7.34rem;">
          <div v-if="dgStatusCode == 306000" v-show="tabView == 1">
            <form action="" @submit.prevent="onSubmit">
              <div class="pr">
                <input type="search" class="f14" name="search_song_input" id="search_song_input" placeholder="请输入歌曲名、原唱歌手" v-model="keyword" autocomplete="off" @input="searchChange" ref="searchSong">
                <svg-icon icon-class="search" class="search-icon" />
              </div>
            </form>
            <div class="songs-container overscroll" style="margin-top: 0.3rem;margin-bottom: 0.3rem;">
              <div class="song-search-result pr flex flex-align-center" v-for="(v, i) in songs" :key="i" @click="songIndex == i ? songIndex = -1 : songIndex = i" :class="{'selected': songIndex == i}">
                <div class="song-search-info flex-1 flex flex-v flex-pack-center">
                  <p class="f15 line1">{{v.name}}</p>
                  <p class="f12 line1" style="color: rgba(255,255,255, 0.5);">原唱：{{v.author}}</p>
                </div>
                <div class="song-search-listened f13" v-if="v.order_num != 0">{{v.order_num}}人点过</div>
                <div class="song-search-select pr flex flex-align-center">
                  <svg-icon icon-class="selected" class="song-select-icon" v-if="songIndex == i"/>
                  <svg-icon icon-class="circle" class="song-select-icon" v-else />
                </div>
              </div>
              <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
                <inline-loading slot="spinner" :color="'#f31374'" :bgColor="'rgba(255, 255, 255, 0.2)'"></inline-loading>
                <span slot="no-results" style="display: none;"></span>
                <span slot="no-more"  style="display: none;"></span>
              </infinite-loading>
              <div v-if="searchTap && this.lastKeyword && songs.length == 0" class="tc f13">找不到与“{{this.lastKeyword}}”相关的歌曲</div>
            </div>
            <div class="bp-input-area flex">
              <input class="bp-input borderbox f14" maxlength="30" @focus="inputFocus" @blur="inputBlur" placeholder="好听的歌一起来分享~"  v-model="content"/>
            </div> 
            <div class="window-bottom f13 flex flex-align-center">
              <div class="account  flex-1">总计：<svg-icon icon-class="coin" className="coin" />{{total}}</div>
              <div class="submit"><button class="bp-button bp-submit" @click="buy">购买</button></div>
            </div>
          </div>
          <div class="song-fixed-height flex flex-v flex-align-center tc f14 no-permission" v-if="tabView == 1">
            <template v-if="dgStatusCode == 306002">
              <p>可点歌时间段</p>
              <span class="time-range">{{setting.open_time}} ~ {{setting.end_time}}</span>
              <p>每场最多可点{{setting.amount}}首，先到先得~</p>
            </template>
            <template v-if="dgStatusCode == 306003">
              <p>本场可点歌曲{{setting.amount}}首已全部售完</p>
              <p>下一场可点歌时间段</p>
              <span class="time-range">{{setting.open_time}} ~ {{setting.end_time}}</span>
            </template>
          </div>
          <div class="song-fixed-height pr" :class="{'manager-height': barManagerInfo.isManager}" v-show="tabView == 2">
            <div class="song-list overscroll">
              <div class="song-item flex flex-align-center" :class="{'selected': v.is_finish == 1}" v-for="(v, i) in tonightSongs" :key="i" @click="confirmSong(i)">
                <div class="song-item-img pr flex flex-align-center">
                  <img :src="$options.filters.prefixImageUrl(v.headimgurl)" class="sender-avatar db"/>
                  <img :src="$options.filters.prefixImageUrl(v.toimgurl)" class="receiver-avatar db" v-if="v.to_id != 0"/>
                </div>
                <div class="song-item-info flex-1 flex flex-v flex-pack-center">
                  <p class="f15 line1">{{v.name}} <span v-if="v.price == 0" class="f12" style='color:#f31374'>免费</span></p>
                  <p class="f12 line1" style="color: rgba(255,255,255, 0.5);">原唱：{{v.author}}</p>
                </div>
                <div class="song-item-right flex flex-v flex-pack-center">
                  <template v-if="!hasRight">
                    <p class="f13 line1">{{v.order_num}}人点过</p>
                    <p class="f13">{{v.pay_time.substring(11)}}</p>
                  </template>
                  <template v-else>
                    <div class="song-search-select pr flex flex-align-center">
                      <svg-icon icon-class="selected" class="song-select-icon" v-if="v.is_finish == 1"/>
                      <svg-icon icon-class="circle" class="song-select-icon" v-else />
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="manager-btn-group f15 flex" v-if="hasRight">
              <a class="flex-1" @click.prevent="routeTo('/SongOrders', {id: $route.params.id})">历史点歌详情</a>
              <div style="width: 0.8rem;"></div>
              <a class="flex-1" @click.prevent="routeTo('/BapingSong', {type: 'BapingSong', id: $route.params.id})">点歌霸屏管理</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <bp-dialog :title="'确认支付'" v-model="buyDialogVisible" @onConfirm="confirmBuy" :cancelAutoClose="buyDialogInfo.cancelAutoClose" :onCancel="buyDialogInfo.onCancel" :cancelText="buyDialogInfo.cancelText" :cancelColor="buyDialogInfo.cancelColor" :confirmText="buyDialogInfo.confirmText">
    <div class="">
      <div style="font-size: 26px;margin-bottom: 8px;">{{buyDialogInfo.price}}<svg-icon icon-class="coin" style="width:0.32rem;fill: #fdc635;margin-left:2px;vertical-align: bottom;"/></div>
      <template v-if="userInfo.is_recharge || (!userInfo.is_recharge && barManagerInfo.isManager)">
      <p style="color: #88878f;"><svg-icon icon-class="tip" style="margin-top:-2px;margin-right:2px;" />当前余额可用：<svg-icon icon-class="coin"  style="margin-top:-2px;margin-right:2px;"/>{{userInfo.balance}}</p>
      <p class="f12" v-if="barManagerInfo.isManager" style="color:#b187e4;margin-top:6px;">今日剩余免费霸屏、打赏{{barManagerInfo.game_count}}次</p>
      <p class="f13" v-if="buyDialogInfo.isCharge" style="color:#8bc5ec;margin-top:6px;">余额不足，请充值</p>
      </template>
      <template v-else>
        <p class="f13">选择购买充值即可成为牛霸会员贵族</p>
        <p class="f13">全平台永久享受贵族特权</p>
      </template>
    </div>
  </bp-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import InlineLoading from '@/components/InlineLoading'
// import twemoji from '@/vendor/twemoji.npm'
// import { BASE_API } from '../../../config/prod.env'
import { iOSversion, emojiReg, debounce } from '@/utils/utils'
import { searchSong, canDianGe, tonightOdrList, getMerchantSetting, isFinish, addSongOrder, getRestScreenAmount } from '@/api/'
import BpDialog from '../bpDialog'
export default {
  /* model: {
    prop: 'visible',
    event: 'closeWindow'
  }, */
  data () {
    return {
      buyDialogVisible: false,
      inputTimer: null,
      content: '',
      visible: false,
      songs: [],
      tonightSongs: [],
      keyword: '',
      lastKeyword: '',
      searchTap: false,
      songIndex: -1,
      songConfirmIndex: [],
      hasRight: false,
      dgStatusCode: 306000,
      setting: {},
      totalSong: 0,
      infiniteLoading: null,
      form: {
        page: 1,
        pageSize: 10
      },
      tabView: 1 // 1我要点歌 2本场已点 3不在点歌时间段内（我要点歌）
    }
  },
  created () {
    this.searchChange = debounce(this.searchKeyword, 300)
  },
  mounted () {
    let id = this.$route.params.id
    var p1 = canDianGe({ht_id: id})
    var p2 = tonightOdrList({ht_id: id})
    var p3 = searchSong({ht_id: id, key: this.keyword, ...this.form})
    var p4 = getMerchantSetting({ht_id: id})
    Promise.all([p1, p2, p3, p4]).then(results => {
      this.form.page++
      this.dgStatusCode = results[0].result
      // this.hasRight = results[0].result
      this.tonightSongs = results[1].result.list
      this.hasRight = results[1].result.is_manager
      this.songs = results[2].result.data
      console.log(results[2])
      this.totalSong = results[2].result.total
      this.setting = results[3].result
      this.$nextTick(() => {
        this.$emit('onMounted')
        this.tabView = this.$store.state.app.initSelectSongWindow.tabView ? this.$store.state.app.initSelectSongWindow.tabView : 1
        this.$store.commit('app/SET_FIELD', {field: 'initSelectSongWindow', value: {}})
        this.visible = true
      })
    })
  },
  methods: {
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    routeTo (path, query) {
      this.$store.commit('app/SET_FIELD', {field: 'initSelectSongWindow', value: {tabView: this.tabView, show: true}})
      this.$router.push({
        path: path,
        query: query
      })
    },
    afterLeave () {
      this.$emit('onClose')
    },
    inputBlur () {
      if (this.inputTimer) {
        clearInterval(this.inputTimer)
        this.inputTimer = null
      }
    },
    inputFocus () {
      let oc = iOSversion()
      if (oc <= 10) {
        this.inputTimer = setInterval(() => {
          document.body.scrollTop = document.body.scrollHeight
        }, 500)
      }
    },
    closeWindow () {
      this.visible = false
    },
    confirmSong (index) {
      this.tonightSongs[index].is_finish = Number(this.tonightSongs[index].is_finish) === 0 ? 1 : 0
      isFinish(Object.assign(this.tonightSongs[index], {ht_id: this.$route.params.id})).then(res => {
        console.log(res)
      })
    },
    searchKeyword () {
      this.searchTap = false
      this.lastKeyword = this.keyword
      this.songIndex = -1
      this.songs = []
      this.form.page = 1
      this.searchSong(true)
    },
    infiniteHandler ($state) {
      if (!this.infiniteLoading) {
        this.infiniteLoading = $state
      }
      this.searchSong().then((res) => {
        if (res.length < this.form.pageSize) {
          $state.complete()
        } else {
          $state.loaded()
        }
      })
    },
    searchSong (resetInfinite) {
      return new Promise((resolve, reject) => {
        return searchSong({ht_id: this.$route.params.id, key: this.keyword, ...this.form}).then((res) => {
          if (resetInfinite && this.infiniteLoading) {
            this.infiniteLoading.reset()
          }
          this.songs = [...this.songs, ...res.result.data]
          this.form.page++
          this.searchTap = true
          resolve(res.result.data)
        })
      })
    },
    onSubmit () {
      this.$refs.searchSong.blur()
      return false
      /* if (!this.keyword) {
        return false
      }
      this.lastKeyword = this.keyword
      this.songIndex = -1
      searchSong({ht_id: this.$route.params.id, key: this.keyword}).then((res) => {
        this.songs = res.result
        this.searchTap = true
      }) */
    },
    buy () {
      if (this.songIndex === -1) {
        this.$vux.toast.show({
          text: '请选择歌曲'
        })
        return false
      }
      let isCharge = Number(this.total) > Number(this.userInfo.balance)
      var content = this.content
      if (emojiReg.test(content)) {
        content = content.replace(emojiReg, '')
      }
      if (content.length > 30) {
        this.$vux.toast.show({
          text: '文字不能超过30个',
          width: '12em'
        })
        return false
      }
      /* var content = twemoji.parse(
        this.content,
        function (icon, options, variant) {
          // return BASE_API + '/dist/emoji-apple-svg/' + icon + '.svg'
          return ''
        }
      ) */
      // Number(this.setting.price)
      let postParams = {
        ht_id: this.$route.params.id,
        price: this.barManagerInfo.isManager && Number(this.barManagerInfo.game_count) > 0 ? 0 : Number(this.setting.price),
        content: content === '' ? '好听的歌一起来分享~' : content,
        song_id: this.currentSelectItem().song_id,
        to_id: this.currentUserInfo.initiator_mc_id ? this.currentUserInfo.initiator_mc_id : 0,
        img: ''
      }
      postParams = {postParams: postParams, extraInfo: {title: this.currentSelectItem().name}, price: this.total, confirmText: isCharge ? '充值购买' : '确定', isCharge: isCharge}
      if (!this.userInfo.is_recharge && ~~(this.barManagerInfo.game_count) === 0) {
        // 充过值显示取消 没冲过显示立即支付
        var extraParams = {
          cancelText: '立即支付',
          onCancel: (cb) => {
            this.dgWxPay()
          },
          cancelAutoClose: false
        }
        postParams = Object.assign({}, postParams, extraParams)
      }
      this.ChangeBuyDialogInfo(postParams)
      this.$store.commit('app/SET_PAY_TYPE', 1)
      this.buyDialogVisible = true
    },
    dgWxPay () {
      // 直接微信支付买歌
      var _self = this
      this.$store.commit('app/SET_PAY_TYPE', 2)
      let params = Object.assign({}, this.buyDialogInfo.postParams)
      params.pay_type = this.payType
      addSongOrder(params).then((res) => {
        window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
          switch (res.err_msg) {
            case 'get_brand_wcpay_request:cancel':
              // alert('用户取消支付！')
              break
            case 'get_brand_wcpay_request:fail':
              _self.$vux.toast.show({
                text: '支付失败！（' + res.err_desc + '）',
                width: '10em'
              })
              break
            case 'get_brand_wcpay_request:ok':
              // 支付成功关闭
              _self.buyDialogVisible = false
              _self.closeWindow()
              break
            default:
              alert(JSON.stringify(res))
              break
          }
        })
      })
    },
    confirmBuy () {
      if (this.buyDialogInfo.isCharge) {
        // 需要充值跳转充值页
        // 在当前页购买
        /* localStorage.setItem('buyDialogInfo', JSON.stringify(this.buyDialogInfo))
        localStorage.setItem('currentUserInfo', JSON.stringify(this.currentUserInfo))
        localStorage.setItem('payBack', '1')
        this.$router.push('/Charge') */
        this.buyDialogVisible = false
        this.$parent.chargeShow()
        this.$store.commit('app/SET_FIELD', {field: 'order_no', value: ''})
        this.$store.commit('app/SET_PAY_TYPE', 3)
        this.$store.commit('app/SET_FIELD', {field: 'buyComponetName', value: 'asyncComponent'})
        this.$store.commit('app/SET_FIELD', {field: 'sourceType', value: 4})
        // window.location.href = window.location.origin + window.location.pathname + '#/Charge'
      } else {
        // 直接购买
        // 判断是红包还是购买霸屏打赏
        if (this.confirmDisable) {
          return false
        }
        this.confirmDisable = true
        // 牛角买歌
        let params = Object.assign({}, this.buyDialogInfo.postParams)
        params.pay_type = this.payType
        addSongOrder({...params, order_no: this.$store.state.app.order_no}).then(res => {
          this.$store.commit('user/SET_USER_INFO_BALANCE', res.result.balance)
          this.buyDialogVisible = false
          this.$parent.chargeVisible = false
          this.closeWindow()
          if (this.$parent.chargeFlag) {
            // 确定是要充值过程的 显示提示充值后的dialog
            this.$parent.buySuccessDialogVisible = true
            this.$parent.chargeFlag = false
          }
          this.$store.commit('app/SET_FIELD', {field: 'order_no', value: ''})
          if (this.barManagerInfo.isManager) {
            // 获取剩余次数
            getRestScreenAmount({ht_id: this.$route.params.id}).then((res) => {
              console.log(res)
              var nextCount = Number(res.result)
              this.$store.commit('user/SET_BAR_MANAGER', {isManager: true, game_count: nextCount, max_bp_time: this.barManagerInfo.max_bp_time})
            })
          }
        }).finally(() => {
          this.confirmDisable = false
        })
      }
    },
    currentSelectItem () {
      if (this.songs && this.songs[this.songIndex]) {
        return this.songs[this.songIndex]
      }
    }
  },
  components: {
    BpDialog,
    InfiniteLoading,
    InlineLoading
  },
  computed: {
    total () {
      // Number(this.setting.price)
      console.log(this.barManagerInfo)
      if (this.barManagerInfo.isManager && Number(this.barManagerInfo.game_count) > 0) {
        return 0
      } else {
        const songPrice = this.songIndex !== -1 ? Number(this.setting.price) : 0
        return Number(songPrice)
      }
    },
    timesDsText () {
      const texts = ['一', '二', '三']
      return texts[this.dsTimes - 1] + '连送礼'
    },
    ...mapGetters('app', {
      currentUserInfo: 'currentUserInfo',
      buyDialogInfo: 'buyDialogInfo',
      payType: 'payType'
    }),
    ...mapGetters('user', {
      userInfo: 'userInfo',
      barManagerInfo: 'barManagerInfo'
    })
  }

}
</script>


<style lang="less" scoped>
@import '../../styles/window.less';
@import (reference) '../../styles/global.less';
@mainColor: #f31374;
@borderColor: rgba(255, 255, 255, 0.15);
/*vendor swiper*/

#song-model {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 300px;
  z-index: 3;
  border-radius: 15px 15px 0 0;
  background: -webkit-radial-gradient(circle closest-corner, #621653, #170127);
  background: radial-gradient(circle closest-corner at 50% 30%, #621653, #170127);
}
.bp-input {
  width: 100%;
  height: 0.7rem;
  line-height: 0.5rem;
  padding: 0.1rem;
  background-color: transparent;
  border: 1px solid @borderColor;
  outline: none;
  border-radius: 6px;
  color: #fff;
  display: block;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 15px;
    
  }
}
.song-tab {
  padding: 0.2rem 0;
  a {
    position: relative;
    padding: 0.1rem 0;
    color: rgba(255, 255, 255, 0.2);
    &.selected {
      color: #FFF;
    }
  }
  a:first-child::after {
   content: "";
   .setRightLine();
  }
}
#search_song_input {
  padding: 0.15rem 0.15rem 0.15rem 0.7rem;
  height: 0.7rem;
  line-height: 0.4rem;
  outline: none;
  border: 1px solid @borderColor;
  background-color: rgba(0, 0, 0, 0.14);
  width: 100%;
  border-radius: 6px;
  color: #fff;
  -webkit-appearance: none;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
}
.search-icon {
  position: absolute;
  left: 0.15rem;
  top: 50%;
  width: 0.4rem;
  height: 0.4rem;
  transform: translateY(-50%);
  fill: #675f6e;
}
.songs-container {
  height: 4.5rem;
  .song-search-result {
    padding: 0.15rem 0.25rem;
    border: 1px solid transparent;
    border-radius: 6px;
    /* &:not(:last-child):after {
      content: '';
      .setBottomLine(rgba(255, 255, 255, 0.3));
    } */
    &.selected {
      border-color: @mainColor;
      /* .song-search-select:after {
        background-color: #fff;
        border: 0;
      } */
    }
    /* &.selected:after {
      border-color: @mainColor;
    } */
  }
  .song-search-singer,
  .song-search-listened {
    color: #675f6e;
  }
  .song-search-listened {
    margin-left: 0.15rem;
    margin-right: 0.15rem;
  }
}
.selected .song-select-icon {
  fill: @mainColor;
}
.song-select-icon {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
}
.song-search-select {
  width: 0.4rem;
}
/* .selected .song-search-select:after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  content: "";
  z-index: -1;
  background-color: #fff;
} */
.song-fixed-height {
  height: 7.14rem;
  margin-bottom: 0.2rem;
  &.manager-height {
    height: 5.94rem;
    margin-bottom: 1.4rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
.song-list {
  height: 100%;
}
.song-item {
  margin: 0 0.2rem;
  padding: 0.2rem 0;
  position: relative;
  &:not(:last-child):after {
    content: '';
    .setBottomLine(rgba(255, 255, 255, 0.3));
  }
}
.song-item-img {
  width: 0.94rem;
  margin-right: 0.15rem;
  .sender-avatar {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    border: 1px solid @mainColor;
  }
  .receiver-avatar {
    width: 0.34rem;
    height: 0.34rem;
    position: absolute;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 1px solid #e67807;
  }
}
.song-item-right {
  margin-left: 0.15rem;
}
.time-range {
  padding: 5px 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  margin: 0.15rem 0;
}
.no-permission {
  color: rgba(255, 255, 255, 0.5);
  padding-top: 1.4rem;
  box-sizing: border-box;
}
.manager-btn-group {
  position: absolute;
  left: 0;
  bottom: -1.2rem;
  width: 100%;
  a {
    padding: 0.15rem 0;
    color: #fff;
    display: block;
    border: 1px solid #fff;
    border-radius: 8px;
    text-align: center;
    &:last-child {
      color: @mainColor;
      border-color: @mainColor;
    }
  }
}
</style>
