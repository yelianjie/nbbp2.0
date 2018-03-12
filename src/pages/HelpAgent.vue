<template>
  <div class="container">
    <h3 class="title">使用帮助</h3>
    <div class="help-content fff">
      <div class="help-title" @click="click(0)">代理注册后如何使用牛霸系统？<svg-icon :class="{'move': isActive[0]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[0]">
          <p>1、定位找到使用牛霸系统的目标商户：</p>
          <p class="suojin">酒吧（餐吧、静吧、演艺吧）。</p>
          <p class="suojin">餐厅、庆典、婚礼、年会、寺庙等需要大屏互动的场合。</p>
          <div class="line"></div>
          <p>2、推荐商户免费注册使用牛霸系统。</p>
          <p>重要：商户注册时，推荐人填写您的推荐码-- <span class="red">{{code}}</span></p>
          <p><img :src="'./static/help/a1.png'"/></p>
          <p>餐厅、庆典、婚礼、年会、寺庙等需要大屏互动的场合。</p>
          <p>点击查看<router-link class="link" :to="{path: '/BusinessJoin?type=1'}">牛霸系统介绍及注册页</router-link></p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <h3 class="title">常见问题</h3>
    <div class="help-content fff">
      <div class="help-title" @click="click(1)">代理的分成收益如何计算？<svg-icon :class="{'move': isActive[1]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[1]">
          <p>成为商户代理后，你可以在后台按设置各个角色的分成比例：</p>
          <p><img :src="'./static/help/a2.png'"/></p>
          <p>以酒吧市场为例：</p>
          <p>如果您推荐酒吧B注册使用牛霸霸屏，若该酒吧某消费者使用牛霸霸屏软件消费100元，</p>
          <p>按照您的代理分成比例25%计算，您将获得收益：</p>
          <p class="red">100X25%=25元</p>
          <p>按该酒吧用户每天在牛霸平台上的消费额为1000元计算，您作为代理一年的收益为：</p>
          <p class="red">1000X30X12X25%=9万元</p>
          <p>若您一共代理12家酒吧，每月发展1家，您作为代理一年的收益为：</p>
          <p class="red">90000X12=108万元</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <div class="help-content fff">
      <div class="help-title" @click="click(2)">如何提现？<svg-icon :class="{'move': isActive[2]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[2]">
          <p>当消费者消费后，您作为代理的分成金额自动进入您的代理账户，您可以随时手动发起提现到微信钱包。</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
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
      isActive: [0, 0, 0, 0, 0, 0],
      code: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '帮助设置'
    var agentNeed = JSON.parse(localStorage.getItem('agentNeed'))
    next(vm => {
      vm.code = agentNeed.code
    })
  },
  methods: {
    click (index) {
      this.isActive[index] = this.isActive[index] === 0 ? 1 : 0
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/help.less';
</style>
