<template>
  <div class="container fff">
    <button @click="click">点哦</button>
    <collapse>
     <div class="collapse-wrap"
       v-show="isActive">
       123141
      <slot></slot>
    </div> 
  </collapse>
  </div>
</template>

<script>
import Collapse from '@/components/Collapse'
export default {
  components: {
    Collapse
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    click () {
      this.isActive = true
    }
  }
}
</script>

