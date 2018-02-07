<template>
  <div class="scroller-bg">
    <checker v-model="select" type="radio" default-item-class="bg-item" selected-item-class="bg-item-selected">
      <template v-for="(v, i) in list">
        <checker-item :value="i" :key="i" @on-item-click="onClick">
          <div class="flex flex-align-center">
            <div class="bg-icon flex flex-1">
              <img src="../../assets/logo.png"/>
            </div>
            <div class="bg-check">
              <check-icon :value="select == i" type="plain"></check-icon>
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
  props: ['selected', 'list'],
  data () {
    return {
      select: this.selected
    }
  },
  methods: {
    onClick (itemValue, itemDisabled) {
      console.log(itemValue)
    }
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon
  }
}
</script>

<style scoped>

</style>
