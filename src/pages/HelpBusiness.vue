<template>
  <div class="container">
    <h3 class="title">使用帮助</h3>
    <div class="help-content fff">
      <div class="help-title" @click="$router.push({path: '/HelpBusinessSet'})">商户注册后如何使用牛霸系统？<svg-icon icon-class="arrow-right" class="right" ></svg-icon></div>
    </div>
    <h3 class="title">常见问题</h3>
    <div class="help-content fff">
      <div class="help-title" @click="click(0)">大屏幕霸屏内容显示不完整，如何解决？<svg-icon :class="{'move': isActive[0]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[0]">
          <p>在电脑的控制面板里尝试调整电脑的分辨率。</p>
          <p>若仍然无法解决，请下载客户端代替浏览器，在客户端里自定义调整屏幕显示尺寸。</p>
          <p>客户端下载地址：</p>
          <p style="font-weight: bold;word-break: break-all;">http://oss-niuba.oss-cn-hangzhou.aliyuncs.com/nbbp.exe</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <div class="help-content fff">
      <div class="help-title" @click="click(1)">大屏幕黑屏，显示内容消失，如何解决？<svg-icon :class="{'move': isActive[1]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[1]">
          <p>可能是电脑休/睡眠造成的。</p>
          <p>在电脑端，控制面板关闭电脑休眠。即将电脑的休眠项设置成“永不”。</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <div class="help-content fff">
      <div class="help-title" @click="click(2)">如何保证大屏幕端只显示霸屏内容而不显示其它操作？<svg-icon :class="{'move': isActive[2]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[2]">
          <p>1、在电脑桌面空白处单击鼠标右键，选择 屏幕分辨率或显示器设置。</p>
          <p>2、将多个显示器设置为 “扩展这些显示”。</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <div class="help-content fff">
      <div class="help-title" @click="click(3)">商户注册成功后应该设置哪些信息？<svg-icon :class="{'move': isActive[3]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[3]">
          <p>在商户管理里设置展示给用户的信息，如商户名称、公告信息、虚拟物品价格等。</p>
          <p>关注公众号“牛霸霸屏”，点击底栏菜单“商户管理”进入。</p>
          <p><img :src="'./static/help/b1.png'"/></p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <div class="help-content fff">
      <div class="help-title" @click="click(4)">如何提现？<svg-icon :class="{'move': isActive[4]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[4]">
          <p>消费者消费后，您作为代理的分成金额自动进入您的代理账户，您可以随时手动发起提现到微信钱包。</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <div class="help-content fff">
      <div class="help-title" @click="click(5)">牛霸霸屏系统可用在哪些场合？<svg-icon :class="{'move': isActive[5]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[5]">
          <p>酒吧（餐吧、静吧、演艺吧）。</p>
          <p>餐厅、庆典、婚礼、年会、寺庙等需要大屏互动的场合。</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
    <h3 class="title">工具帮助</h3>
    <div class="help-content fff">
      <div class="help-title" @click="click(6)">桌贴<svg-icon :class="{'move': isActive[6]}" icon-class="arrow-right"></svg-icon></div>
      <collapse>
        <div class="help-main collapse-wrap"
          v-show="isActive[6]">
          <canvas id="qrcode-zhuotie" style="display:none;"></canvas>
          <img v-if="zhuotieUrl" :src="zhuotieUrl" @click="previewImage(zhuotieUrl)" />
          <p>长按图片保存，或者点击图片放大查看。</p>
          <slot></slot>
        </div> 
      </collapse>
    </div>
  </div>
</template>

<script>
import Collapse from '@/components/Collapse'
import QRious from 'qrious'
export default {
  components: {
    Collapse
  },
  data () {
    return {
      isActive: [0, 0, 0, 0, 0, 0, 0],
      zhuotieUrl: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '帮助设置'
    next()
  },
  mounted () {
    this.$nextTick(() => {
      var info = JSON.parse(localStorage.getItem('businessNeed'))
      var zhuotieImg = new Image()
      zhuotieImg.src = './static/help/zhuotie.png'
      zhuotieImg.onload = () => {
        this.qr = new QRious({
          element: document.getElementById('qrcode-zhuotie'),
          value: window.location.origin + window.location.pathname + '#/Main/' + info.id,
          size: 400,
          padding: 20
        })
        var dataUrl = this.qr.toDataURL('image/png')
        var qrcodeImg = new Image()
        qrcodeImg.onload = () => {
          var canvas = document.createElement('canvas')
          canvas.width = zhuotieImg.width
          canvas.height = zhuotieImg.height
          var ctx = canvas.getContext('2d')
          ctx.drawImage(zhuotieImg, 0, 0)
          ctx.save()
          ctx.fillStyle = 'rgba(0,0,0,.2)'
          ctx.fillRect(325, 285, 230, 230)
          ctx.restore()
          ctx.globalCompositeOperation = 'source-over'
          ctx.drawImage(qrcodeImg, 0, 0, 400, 400, 340, 300, 200, 200)
          this.zhuotieUrl = canvas.toDataURL('image/png')
        }
        qrcodeImg.src = dataUrl
      }
    })
  },
  methods: {
    previewImage (url) {
      var pics = {current: url, urls: [url]}
      this.$wechat.previewImage(pics)
    },
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
