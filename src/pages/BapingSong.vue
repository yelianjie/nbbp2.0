<template>
  <div class="container min-h">
    <div style="height:0;"></div>
    <search
    @on-submit="getResult"
    v-model="value"
    position="absolute"
    auto-scroll-to-top 
    @on-focus="onFocus"
    @on-blur="onBlur"
    @on-cancel="onCancel"
    placeholder="搜索添加上架歌曲"
    ref="search">
    <div id="results" :style="{'min-height': resultHeight + 'px'}">
      <!-- <p class="search-tip f13">提示：只能搜索到关注牛霸霸屏公众号的用户</p>
      <p class="search-tip f13">您今天还能再新添加{{countObj.tcount}}个管理员</p>
      <inline-loading v-if="loading1" :color="'#2481d2'" :bgColor="'rgba(0, 0, 0, 0.2)'"></inline-loading>
      <Manager v-for="(v, i) in searchResults" from="searchResults" :key="i" :index="i" :result="v" @on-add="onAdd" @on-delete="onDelete" @on-black="onAddBlack" :type="1"></Manager> -->
    </div>
    </search>
    <div id="song-set">
      <group label-width="14em" label-align="left">
       <group-title slot="title">点歌设置</group-title>
       <x-input title="可点歌时间段内最多可点歌数量" text-align="right" type="number" v-model="form.price" :show-clear="false" @on-change="validisInteger" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">首</span>
      </x-input>
       <x-input title="每首歌单价" text-align="right" type="number" v-model="form.price" :show-clear="false" @on-change="validisInteger" pattern="[0-9]*">
        <span slot="right" style="margin-left:6px;">元</span>
      </x-input>
      <x-switch title="开启点歌功能" v-model="powerOn"></x-switch>
     </group>
     <!-- <template v-if="powerOn">
      <checklist class="power-list" title="管理员权限" label-position="left" :options="powerList" v-model="powerCheck" :check-disabled="false" :disabled="is_merchant == 1"></checklist>
      <checklist class="super-power-list" label-position="left" :options="superPowerList" v-model="superPowerCheck" :check-disabled="false" :disabled="hasSuperManager || is_merchant == 1"></checklist>
      </template> -->
    </div>
    </div>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, XSwitch, Checklist, XButton, Search } from 'vux'
export default {
  components: {
    Search,
    GroupTitle,
    Group,
    Cell,
    XInput,
    XSwitch,
    Checklist,
    XButton
  },
  data () {
    return {
      resultHeight: 0,
      searchResults: [],
      focus: false,
      value: '',
      form: {
        price: 100
      },
      powerOn: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '霸屏点歌设置'
    next()
  },
  mounted () {
    this.resultHeight = window.innerHeight - 44
  },
  methods: {
    validisInteger (value) {
      return value
    },
    onFocus () {
      this.focus = true
      this.$noscroll()
    },
    onBlur () {
      this.$noscroll.cancel()
      this.focus = false
    },
    onCancel () {
      this.value = ''
      this.searchResults = []
    },
    getResult (val) {
      console.log(val)
    }
  }
}
</script>

