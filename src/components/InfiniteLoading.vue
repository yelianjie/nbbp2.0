<template>
  <div class="infinite-loading-container tc">
    <slot name="spinner" v-if="!this.nomore"></slot>
    <slot name="no-more" v-if="this.nomore"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { debounce, isiOS } from '@/utils/utils'
export default {
  data () {
    return {
      loading: false,
      nomore: false,
      isTouch: false,
      timer: null
    }
  },
  beforeDestroy () {
    this.$el.parentNode.removeEventListener('scroll', this.scroll)
    if (isiOS) {
      this.$el.parentNode.removeEventListener('touchmove', this.touchMove)
      this.$el.parentNode.removeEventListener('touchend', this.touchEnd)
    }
  },
  created () {
    this.scroll = debounce(this.onScroll, 200)
    if (isiOS) {
      this.touchMove = (e) => {
        this.isTouch = true
      }
      this.touchEnd = (e) => {
        this.isTouch = false
      }
    }
    this.stateChanger = {
      loaded: (h) => {
        this.loading = false
      },
      complete: () => {
        this.loading = false
        this.nomore = true
      }
    }
    this.loading = true
    this.$emit('infinite', this.stateChanger)
  },
  mounted () {
    this.$nextTick(() => {
      this.$el.parentNode.addEventListener('scroll', this.scroll)
      if (isiOS) {
        this.$el.parentNode.addEventListener('touchmove', this.touchMove)
        this.$el.parentNode.addEventListener('touchend', this.touchEnd)
      }
    })
  },
  methods: {
    onScroll () {
      if (this.loading || this.nomore || this.isTouch) {
        return false
      }
      if (this.$el.parentNode.scrollTop < 60) {
        this.loading = true
        this.$emit('infinite', this.stateChanger)
      }
    }
  }
}
</script>
