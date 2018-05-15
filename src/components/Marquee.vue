<template>
  <div class="marquee">{{content}}</div>
</template>

<script>
import 'jquery.marquee'
export default {
  props: ['content'],
  mounted () {
    console.log('123')
  }
}
</script>

