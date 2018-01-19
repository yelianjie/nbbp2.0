<template>
  <div class="scroller-bp">
    <checker v-model="giftSelected" type="checkbox" default-item-class="baping-item" selected-item-class="baping-item-selected">
      <template v-for="(v, i) in gifts">
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
              <check-icon :value="giftSelected.some((vv,ii) => vv == i)" type="plain"></check-icon>
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
      giftSelected: [1, 2],
      gifts: [{
        id: 1,
        title: '兰博基尼',
        price: '10'
      }, {
        id: 2,
        title: '蓝色妖姬',
        price: '15'
      }, {
        id: 3,
        title: 'YSL',
        price: '20'
      }]
    }
  },
  methods: {
    onClick (itemValue, itemDisabled) {
      console.log(itemValue)
      console.log(this.giftSelected)
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
          _this.$vux.confirm.setInputValue(_this.gifts[index].price)
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
