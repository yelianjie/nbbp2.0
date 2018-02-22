<template>
  <div class="infinite-loading-container tc">
    <slot name="spinner" v-if="!this.nomore"></slot>
    <slot name="no-more" v-if="this.nomore"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { debounce } from '@/utils/utils'
export default {
  data () {
    return {
      loading: false,
      nomore: false
    }
  },
  beforeDestroy () {
    this.$el.parentNode.removeEventListener('scroll', this.scroll)
  },
  created () {
    this.scroll = debounce(this.onScroll, 100)
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
    })
  },
  methods: {
    onScroll () {
      if (this.loading || this.nomore) {
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
