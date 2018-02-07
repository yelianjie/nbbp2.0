<template>
  <div class="scroller-bp">
    <checker v-model="themeSelected" type="checkbox" default-item-class="baping-item" selected-item-class="baping-item-selected">
      <template v-for="(v, i) in themes">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="baping-icon flex flex-pack-center">
              <img :src="v.icon | prefixImageUrl"/>
            </div>
            <div class="baping-info flex flex-v flex-pack-center flex-1">
              <p class="baping-title">{{v.title}}</p>
              <div class="baping-price flex flex-align-center">
                <div class="flex1 baping-price-tip">价格：{{v.default_price}}元</div>
                <div><a class="baping-edit" @click.prevent.stop="edit(i)">编辑</a></div>
              </div>
            </div>
            <div class="baping-check">
              <check-icon :value="themeSelected.some((vv,ii) => vv == i)" type="plain"></check-icon>
            </div>
          </div>
        </checker-item>
      </template>
    </checker>
  </div>
</template>

<script>
import { Checker, CheckerItem, CheckIcon } from 'vux'
import { getBpDatas, updateBpSelectInfo } from '@/api/'
export default {
  props: ['list'],
  data () {
    return {
      themeSelected: [],
      orginSelected: [],
      themes: []
    }
  },
  created () {
    getBpDatas({ht_id: this.$route.params.id, type: 2}).then((res) => {
      let selecteds = []
      res.result.forEach((v, i) => {
        if (Number(v.selected) === 1) {
          selecteds.push(i)
        }
      })
      this.themeSelected = selecteds
      this.orginSelected = selecteds
      this.themes = res.result
      console.log(this.themeSelected, this.orginSelected)
    })
  },
  mounted () {

  },
  methods: {
    onClick (itemValue, itemDisabled) {
      console.log(itemValue)
      console.log(this.themeSelected)
    },
    change (event) {
      console.log(event)
    },
    edit (index) {
      let _this = this
      this.$vux.confirm.prompt('价格', {
        title: '请输入价格',
        onShow () {
          console.log('promt show')
          _this.$vux.confirm.setInputValue(_this.themes[index].default_price)
        },
        onHide () {
          console.log('prompt hide')
        },
        onCancel () {
          console.log('prompt cancel')
        },
        onConfirm (msg) {
          // alert(msg)
          let data = {
            price: msg,
            id: _this.$route.params.id,
            selected: 1
          }
          console.log(_this.orginSelected)
          let filter = _this.orginSelected.filter((v) => {
            return _this.themeSelected.indexOf(v) === -1
          })
          console.log(filter, data, updateBpSelectInfo)
        }
      })
    }
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon
  }
}
</script>

<style lang="less" scoped>

</style>
