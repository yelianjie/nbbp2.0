<template>
  <div class="scroller-bp">
    <checker v-model="themeSelected" type="checkbox" default-item-class="baping-item" selected-item-class="baping-item-selected">
      <template v-for="(v, i) in themes">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="baping-icon flex flex-pack-center">
              <img src="../../assets/logo.png"/>
            </div>
            <div class="baping-info flex flex-v flex-pack-center flex-1">
              <p class="baping-title">{{v.title}}</p>
              <div class="baping-price flex flex-align-center">
                <div class="flex1 baping-price-tip">价格：{{v.price}}元</div>
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
export default {
  data () {
    return {
      themeSelected: [1, 2],
      themes: [{
        id: 1,
        title: '生日霸屏',
        price: '10'
      }, {
        id: 2,
        title: '求约霸屏',
        price: '15'
      }, {
        id: 3,
        title: '示爱霸屏',
        price: '20'
      }]
    }
  },
  mounted () {
    console.log('111')
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
          _this.$vux.confirm.setInputValue(_this.themes[index].price)
        },
        onHide () {
          console.log('prompt hide')
        },
        onCancel () {
          console.log('prompt cancel')
        },
        onConfirm (msg) {
          alert(msg)
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
