<template>
  <div class="container flex flex-v" style="height: 100%;">
    <div id="song-set" class="flex-1 overscroll">
      <div style="background-color:#fff;padding: 20px 10px;margin: 10px 10px 0;color:#2481d2;border-radius: 5px;box-shadow: 1px 4px 10px rgba(0,0,0,0.03);" class="tc" @click="$router.push(`/SongManage?id=${$route.query.id}`)">歌曲管理</div>
      <!-- <group label-align="left">
        <cell title="歌曲管理" is-link :link="{path: '/SongManage', query: {id: $route.query.id}}"></cell>
      </group> -->
      <group label-width="14em" label-align="left">
        <group-title slot="title">点歌设置</group-title>
        <x-switch title="开启点歌功能" v-model="form.is_open" :value-map="['2', '1']" @on-change="switchChange"></x-switch>
        <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">开启后在设置的点歌时间段内用户可以购买点歌霸屏</p>
      </group>
      <template v-if="form.is_open == 1">
      <group label-width="10em" label-align="left">
       <group-title slot="title">价格设置</group-title>
       <x-input title="每首歌单价" text-align="right" type="number" v-model="form.price" :show-clear="false" pattern="[0-9]*" placeholder="请输入" @on-blur="validisPrice">
        <span slot="right" style="margin-left:6px;">元</span>
      </x-input>
     </group>
     <group label-width="10em" label-align="left">
       <group-title slot="title">设置可点歌时间段</group-title>
       <cell title="开始时间" :value="form.open_time" is-link @click.native="showDate">
         <span v-if="form.open_time" class="pr"><span style="position: absolute;left: -36px;top: -2px;">每日</span>{{form.open_time}}</span>
         <span v-else>请选择</span>
       </cell>
       <!-- <datetime title="开始时间" format="HH:mm" v-model="form.open_time" value-text-align="right" placeholder="选择"></datetime> -->
       <x-input title="几小时后结束" text-align="right" type="number" v-model="form.open_hour" :show-clear="false" pattern="[0-9]*" placeholder="请输入" @on-blur="validisTime">
        <span slot="right" style="margin-left:6px;">小时</span>
      </x-input>
      <x-input title="可点歌数量" text-align="right" type="number" v-model="form.amount" :show-clear="false" pattern="[0-9]*" placeholder="请输入" @on-blur="validisSong">
        <span slot="right" style="margin-left:6px;">首</span>
      </x-input>
      <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">请根据实际情况设置该数量以避免点歌订单过多而无法安排的情况</p>
     </group>
     <group label-align="left" style="margin-bottom: 0.77em;">
       <group-title slot="title">其他设置</group-title>
       <x-switch title="不可重复点歌" v-model="form.is_shelves" :value-map="['2', '1']"></x-switch>
       <p class="f12" style="padding:0 15px;margin: -2px 0 10px;color: #aaaaaa;">打开后，每场点歌不可重复购买同一首歌</p>
       <p class="f12" style="padding:0 15px;margin: -8px 0 10px;color: #aaaaaa;">下一场点歌开始时，自动下架的歌曲会自动恢复上架</p>
     </group>
     </template>
    </div>
    <div v-if="form.is_open == '1'" style="background-color:#fff;padding: 4px 0;box-shadow: 2px 0 10px 1px rgba(0,0,0,0.2);">
      <x-button :gradients="['#2481d2', '#2481d2']" @click.native="saveSetting(true)" style="width: 90%;margin: auto;">保存</x-button>
    </div>
    <!-- <footer class="footer flex" v-if="form.is_open == '1'">
      <div class="flex-1 flex-v tc flex-pack-center flex-align-center">
        <a @click.prevent="saveSetting(true)" class="enter-bar">保存</a>
      </div>
     </footer> -->
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, XButton, Datetime, XDialog, TransferDomDirective as TransferDom } from 'vux'
import { isInteger } from '@/utils/utils'
import { getMerchantSetting, merchantSetting } from '@/api/'
export default {
  directives: {
    TransferDom
  },
  components: {
    GroupTitle,
    Group,
    Cell,
    XInput,
    XSwitch,
    XButton,
    Datetime,
    XDialog
  },
  data () {
    return {
      resultHeight: 0,
      focus: false,
      value: '',
      form: {
        ht_id: this.$route.query.id,
        amount: '',
        open_hour: '',
        price: '',
        open_time: '',
        is_shelves: '2',
        is_open: '2'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '点歌霸屏'
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  created () {
    getMerchantSetting({ht_id: this.$route.query.id}).then((res) => {
      if (res.result) {
        res.result.price = res.result.price ? Number(res.result.price) : ''
        res.result.amount = res.result.amount !== '0' ? Number(res.result.amount) : ''
        res.result.open_hour = res.result.open_hour !== '0' ? Number(res.result.open_hour) : ''
        res.result.open_time = res.result.open_time ? res.result.open_time : ''
        this.form = Object.assign(this.form, res.result)
      }
    })
  },
  mounted () {
  },
  methods: {
    showDate () {
      let _self = this
      document.body.classList.add('third-center')
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'HH:mm',
        value: this.form.open_time,
        onConfirm (val) {
          _self.form.open_time = val
        },
        onHide () {
          setTimeout(() => {
            document.body.classList.remove('third-center')
          }, 350)
        }
      })
    },
    switchChange (val) {
      if (val === '2') {
        this.saveSetting()
      }
    },
    saveSetting (mes) {
      if (mes) {
        if (!this.form.price) {
          this.$vux.toast.show({
            text: '请输入价格',
            width: '12em'
          })
          return false
        }
        if (!this.form.open_time) {
          this.$vux.toast.show({
            text: '请选择开始时间',
            width: '12em'
          })
          return false
        }
        if (!this.form.open_hour) {
          this.$vux.toast.show({
            text: '请输入点歌持续时间',
            width: '12em'
          })
          return false
        }
        if (!this.form.amount) {
          this.$vux.toast.show({
            text: '请输入可点歌数量',
            width: '12em'
          })
          return false
        }
      }
      merchantSetting(this.form).then((res) => {
        if (mes) {
          this.$vux.toast.show('设置成功')
        }
      })
    },
    validisPrice (value) {
      if (!isInteger(value)) {
        this.form.price = 1
      } else if (value > 9999) {
        this.form.price = 9999
        console.log(this.form.price)
      }
    },
    validisTime (value) {
      if (!isInteger(value)) {
        this.form.open_hour = 1
      } else if (value > 24) {
        this.form.open_hour = 24
      }
    },
    validisSong (value) {
      if (!isInteger(value)) {
        this.form.amount = 1
      } else if (value > 999) {
        this.form.amount = 999
      }
    }
  }
}
</script>

<style lang="less" scoped>
#song-set {
  &.focus {
    padding-top: 54px;
  }
  /deep/ .weui-cells:first-child {
    margin-top: 0;
  }
}
.container {
  /deep/ .weui-cells.vux-search_show .weui-cell:last-child {
    margin-bottom: 0;
  } 
}

footer .enter-bar {
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background-color: #2481d2;
}
#song-form {
  border-radius: 3px;
  background-color: #fff;
  padding: 15px 0 0 0;
}

.song-form-group {
  text-align: left;
  margin-bottom: 4px;
  padding: 0 15px;
  label {
    padding: 8px 0;
    display: block;
  }
  /deep/ .vux-x-input {
    border: 1px solid #D9D9D9;
    padding: 6px 15px;
    border-radius: 5px;
    &:before {
      border: 0px;
    }
  }
}
.song-item {
  display: block;
}
.song-search-item {
  padding: 10px 15px;
  border-top: 1px solid #f2f2f2;
}
</style>


