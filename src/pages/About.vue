<template>
  <div class="container min-h bg1 about-container borderbox">
    <div class="tc">
      <img src="../assets/logo.png" style="width: 1.6rem;height: 1.6rem;"/>
      <p class="white" style="margin: 20px 0;">牛霸</p>
    </div>
    <div class="flex flex-h" style="margin-bottom: 20px;">
      <div class="radient-line line-left flex-1"></div>
      <p class="white tc f14" style="width: 3.2rem;">互动娱乐领导品牌</p>
      <div class="radient-line line-right flex-1"></div>
    </div>
    <article style="padding: 0.45rem 0.4rem;border-radius: 5px;line-height: 1.5;" class="bg2 darker1 f14">
      牛霸，聚元集团旗下品牌，是一家专为酒吧大屏提供”社交、互动、游戏“等解决方案的娱乐交互型平台。品牌自成立初就本着”成就客户成就自己“的经营理念，励志通过用更具创意的主题画面，更具互动的打赏玩法和更具趣味性的游戏内容，为酒吧带来更嗨的气氛，更酷的玩法和更爆的人气，让您的酒吧燥起来！
    </article>
    <p class="darker1 f14" style="margin-top: 20px;">客服热线：1306589756</p>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    document.title = '关于我们'
    next()
  }
}
</script>

<style lang="less" scoped>
.about-container {
  padding: 0.65rem 0.3rem 0.3rem;
}
.radient-line {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
  }
  &.line-left::after {
    background-image: linear-gradient(to left, rgba(84, 86, 98, 1), rgba(84, 86, 98, 1) 50%, rgba(84, 86, 98, 0));
  }
  &.line-right::after {
    background-image: linear-gradient(to right, rgba(84, 86, 98, 1), rgba(84, 86, 98, 1) 50%, rgba(84, 86, 98, 0));
  }
}
</style>

