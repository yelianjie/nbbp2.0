<template>
  <div class="scroller-bp">
    <checker v-model="timeSelected" type="checkbox" default-item-class="baping-item" selected-item-class="baping-item-selected">
      <template v-for="(v, i) in times">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="baping-info flex flex-v flex-pack-center flex-1">
              <p class="baping-title">{{v.time}}</p>
              <div class="baping-price flex flex-align-center">
                <div class="flex1 baping-price-tip">价格：{{v.default_price}}元</div>
                <div><a class="baping-edit" @click.prevent.stop="edit(i)">编辑</a></div>
              </div>
            </div>
            <div class="baping-check">
              <check-icon :value="timeSelected.some((vv,ii) => vv == i)" type="plain"></check-icon>
            </div>
          </div>
        </checker-item>
      </template>
    </checker>
  </div>
</template>

<script>
import { Checker, CheckerItem, CheckIcon } from 'vux'
import { getBpDatas } from '@/api/'
export default {
  data () {
    return {
      timeSelected: [],
      times: []
    }
  },
  created () {
    getBpDatas({ht_id: this.$route.params.id, type: 3}).then((res) => {
      let selecteds = []
      res.result.forEach((v, i) => {
        if (Number(v.selected) === 1) {
          selecteds.push(i)
        }
      })
      this.timeSelected = selecteds
      this.times = res.result
    })
  },
  mounted () {

  },
  methods: {
    onClick (itemValue, itemDisabled) {
      console.log(itemValue)
      console.log(this.timeSelected)
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
          _this.$vux.confirm.setInputValue(_this.times[index].default_price)
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
