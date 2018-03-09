<template>
  <div class="container">
    <img :src="'./static/help/b-end.jpg'" style="width:100%;"/>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    document.title = '使用帮助'
    next()
  }
}
</script>
