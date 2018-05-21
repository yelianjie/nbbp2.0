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
            <a class="flex-1 tc db" :class="{'selected' : tabView == 1}" @click="tabView = 1">我要点歌<span class="song-number f12">(347首)</span></a>
            <a class="flex-1 tc db" :class="{'selected' : tabView == 2}" @click="tabView = 2">本场已点<span class="song-number f12">(347首)</span></a>
          </div>
        </div>
        <template v-if="tabView == 1">
          <div v-if="true">
            <form action="" @submit.prevent="onSubmit">
              <div class="pr">
                <input type="search" class="f14" name="search_song_input" id="search_song_input" placeholder="请输入歌曲名、原唱歌手" v-model="search">
                <svg-icon icon-class="search" class="search-icon" />
              </div>
            </form>
            <div class="songs-container overscroll" style="margin-top: 0.3rem;margin-bottom: 0.2rem;">
              <div class="song-search-result pr flex flex-align-center" v-for="(v, i) in songs" :key="i" @click="songIndex == i ? songIndex = -1 : songIndex = i" :class="{'selected': songIndex == i}">
                <div class="song-search-info flex-1 flex flex-v flex-pack-center">
                  <p class="f15 line1">{{v.value}}</p>
                  <p class="f13 line1">{{v.inlineDesc}}</p>
                </div>
                <div class="song-search-listened f13">40人点过</div>
                <div class="song-search-select pr flex flex-align-center">
                  <svg-icon icon-class="selected" class="song-select-icon" v-if="songIndex == i"/>
                </div>
              </div>
            </div>
            <div class="bp-input-area flex">
              <input class="bp-input borderbox f14" maxlength="15" @focus="inputFocus" @blur="inputBlur" placeholder="请输入点歌上墙语，30字以内"  v-model="content"/>
            </div> 
            <div class="window-bottom f13 flex flex-align-center">
              <div class="account  flex-1">总计：<svg-icon icon-class="coin" className="coin" />{{total}}</div>
              <div class="submit"><button class="bp-button bp-submit" @click="buy">购买</button></div>
            </div>
          </div>
          <div class="song-fixed-height flex flex-v flex-align-center tc f14 no-permission" v-else>
            <template v-if="false">
              <p>可点歌时间段</p>
              <span class="time-range">22:00 ~ 2:00</span>
              <p>每场最多可点34首，先到先得~</p>
            </template>
            <template v-else>
              <p>本场可点歌曲34首已全部售完</p>
              <p>下一场可点歌时间段</p>
              <span class="time-range">22:00 ~ 2:00</span>
            </template>
          </div>
        </template>
        <template v-if="tabView == 2">
          <div class="song-fixed-height pr" :class="{'manager-height': barManagerInfo.isManager}">
            <div class="song-list overscroll">
              <div class="song-item flex flex-align-center" :class="{'selected': songConfirmIndex.indexOf(i) != -1}" v-for="(v, i) in songs" :key="i" @click="confirmSong(i)">
                <div class="song-item-img pr flex flex-align-center">
                  <img src="http://thirdwx.qlogo.cn/mmopen/gwhELYibibFdQyGHrGudaxKGxF7JrrxyGblUcHr0uybeD24umWNsohxCCiaFrKgy6TXFIoZvxViaQuPEJQU7TmYNFg/132" class="sender-avatar db"/>
                  <img src="http://thirdwx.qlogo.cn/mmopen/gwhELYibibFdQyGHrGudaxKGxF7JrrxyGblUcHr0uybeD24umWNsohxCCiaFrKgy6TXFIoZvxViaQuPEJQU7TmYNFg/132" class="receiver-avatar db"/>
                </div>
                <div class="song-item-info flex-1 flex flex-v flex-pack-center">
                  <p class="f15 line1">{{v.value}}</p>
                  <p class="f13 line1">{{v.inlineDesc}}</p>
                </div>
                <div class="song-item-right flex flex-v flex-pack-center">
                  <template v-if="!barManagerInfo.isManager">
                    <p class="f13 line1">16人点过</p>
                    <p class="f13">20:31:17</p>
                  </template>
                  <template v-else>
                    <div class="song-search-select pr flex flex-align-center">
                      <svg-icon icon-class="selected" class="song-select-icon" v-if="songConfirmIndex.indexOf(i) != -1"/>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="manager-btn-group f15 flex" v-if="barManagerInfo.isManager">
              <router-link to="/" class="flex-1">历史点歌详情</router-link>
              <div style="width: 0.8rem;"></div>
              <router-link to="/" class="flex-1">点歌霸屏管理</router-link>
            </div>
          </div>
        </template>
      </div>
    </transition>  
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { mapGetters, mapActions } from 'vuex'
// import twemoji from '@/vendor/twemoji.npm'
// import { BASE_API } from '../../../config/prod.env'
import { iOSversion, emojiReg } from '@/utils/utils'
export default {
  /* model: {
    prop: 'visible',
    event: 'closeWindow'
  }, */
  data () {
    return {
      inputTimer: null,
      scroll: null,
      rowGiftIndex: -1,
      dsGiftIndex: -1,
      content: '',
      visible: false,
      songs: [
        {key: '1', value: '晴天', inlineDesc: '周杰伦'},
        {key: '2', value: '告白气球', inlineDesc: '周杰伦'},
        {key: '3', value: '倔强', inlineDesc: '五月天'},
        {key: '4', value: '爱上未来的你', inlineDesc: '潘玮柏'},
        {key: '5', value: '第三类接触', inlineDesc: '周杰伦'},
        {key: '6', value: '黑夜问白天', inlineDesc: '林俊杰'},
        {key: '7', value: '丹宁执着', inlineDesc: '林俊杰'}
      ],
      search: '',
      songIndex: -1,
      songConfirmIndex: [],
      tabView: 1 // 1我要点歌 2本场已点 3不在点歌时间段内（我要点歌）
    }
  },
  props: ['gifts'],
  mounted () {
    this.$nextTick(() => {
      this.$emit('onMounted')
      this.visible = true
    })
  },
  methods: {
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
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
    takeTimes (rowIndex, index) {
      if (this.dsGiftIndex === index && this.rowGiftIndex === rowIndex) {
        if (this.dsTimes + 1 > 3) {
          this.dsTimes = 1
        } else {
          this.dsTimes++
        }
      } else {
        this.dsTimes = 1
      }
      this.rowGiftIndex = rowIndex
      this.dsGiftIndex = index
    },
    confirmSong (index) {
      var find = this.songConfirmIndex.indexOf(index)
      if (find !== -1) {
        this.songConfirmIndex.splice(find, 1)
      } else {
        this.songConfirmIndex.push(index)
      }
    },
    onSubmit () {
      alert(this.search)
    },
    buy () {
      if (this.dsGiftIndex === -1) {
        this.$vux.toast.show({
          text: '请选择礼物'
        })
        return false
      }
      let isCharge = Number(this.total) > Number(this.userInfo.balance)
      var content = this.content
      if (emojiReg.test(content)) {
        content = content.replace(emojiReg, '')
      }
      if (content.length > 15) {
        this.$vux.toast.show({
          text: '文字不能超过15个',
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
      let postParams = {
        ht_id: this.$route.params.id,
        type: 1,
        count: this.dsTimes,
        content: content,
        gift_id: this.currentSelectItem().id,
        reward_uid: this.currentUserInfo.initiator_mc_id ? this.currentUserInfo.initiator_mc_id : 0,
        img: ''
      }
      postParams = {postParams: postParams, extraInfo: {title: this.currentSelectItem().title}, price: this.total, confirmText: isCharge ? '充值购买' : '确定', isCharge: isCharge}
      if (!this.userInfo.is_recharge && ~~(this.barManagerInfo.game_count) === 0) {
        // 充过值显示取消 没冲过显示立即支付
        var extraParams = {
          cancelText: '立即支付',
          onCancel: (cb) => {
            this.$emit('onWxPay', cb)
          },
          cancelAutoClose: false
        }
        postParams = Object.assign({}, postParams, extraParams)
      }
      this.ChangeBuyDialogInfo(postParams)
      this.$emit('onBuy')
    },
    reset () {
      // this.dsGiftIndex = -1
      this.content = ''
    },
    initSelected (info) {
      this.dsGiftIndex = this.gifts.findIndex((v) => ~~(v.id) === ~~(info.gift_id))
      this.dsTimes = info.count
      this.content = info.content
    },
    currentSelectItem () {
      if (this.gifts && this.gifts[this.rowGiftIndex][this.dsGiftIndex]) {
        return this.gifts[this.rowGiftIndex][this.dsGiftIndex]
      }
    }
  },
  components: {
  },
  computed: {
    total () {
      if (this.barManagerInfo.isManager && Number(this.barManagerInfo.game_count) > 0) {
        return 0
      } else {
        const giftPrice = this.dsGiftIndex !== -1 ? Number(this.currentSelectItem().price) : 0
        return Number(giftPrice * this.dsTimes).toFixed(2)
      }
    },
    timesDsText () {
      const texts = ['一', '二', '三']
      return texts[this.dsTimes - 1] + '连送礼'
    },
    ...mapGetters('app', {
      currentUserInfo: 'currentUserInfo'
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
    &:not(:last-child):after {
      content: '';
      .setBottomLine(rgba(255, 255, 255, 0.3));
    }
    &.selected {
      /* border-color: @mainColor; */
      .song-search-select:after {
        background-color: #fff;
        border: 0;
      }
    }
    &.selected:after {
      border-color: @mainColor;
    }
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
.song-select-icon {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  fill: @mainColor;
}
.song-search-select {
  width: 0.4rem;
}
.song-search-select:after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  border: 1px solid #675f6e;
  transform: translate(-50%, -50%);
  content: "";
  z-index: -1;
}
.song-fixed-height {
  height: 7.04rem;
  margin-bottom: 0.2rem;
  &.manager-height {
    height: 5.84rem;
    margin-bottom: 1.4rem;
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
  &.selected {
    .song-search-select:after {
      background-color: #fff;
      border: 0;
    }
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
