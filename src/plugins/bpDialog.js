export default {
  install (Vue) {
    Vue.prototype.$bpDialog = (options) => {
      if (document.getElementsByClassName('bp-dialog-wrap').length) {
        return
      }
      let opt = {
        title: '提示',
        content: '',
        stopAuto: true,
        cancelText: '取消',
        cancelCallback: () => {},
        confirmText: '确定',
        confirmCallback: () => {}
      }
      for (let property in options) {
        opt[property] = options[property]
      }
      let BpDialogTpl = Vue.extend({
        template: `
          <div class="bp-dialog-wrap">
            <transition name="bp-mask">
            <div class="bp-mask" style="display:none;"  v-show="visible"></div>
            </transition>
            <transition name="bp-dialog">
            <div class="bp-dialog" style="display: none;" v-show="visible">
              <div class="bp-dialog__hd">
                <strong class="bp-dialog__title">${opt.title}</strong>
              </div>
              <div class="bp-dialog__bd">
                <p style="text-align: center;" v-html="content"></p>
              </div>
              <div class="bp-dialog__ft">
                <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_default" @click.prevent="cancle">${opt.cancelText}</a>
                <a href="javascript:;" class="bp-dialog__btn bp-dialog__btn_primary" @click.prevent="confirm">${opt.confirmText}</a>
              </div>
            </div>
            </transition>
          </div>`,
        data () {
          return {
            content: opt.content,
            visible: false
          }
        },
        methods: {
          confirm () {
            console.log('hhh')
            if (opt.stopAuto) {
              this.hide()
            }
            opt.confirmCallback()
          },
          cancle () {
            this.hide()
            opt.cancelCallback()
          },
          hide () {
            this.visible = false
            setTimeout(() => {
              console.log('11')
              this.$destroy()
            }, 300)
          }
        }
      })
      window.bpDialog = new BpDialogTpl().$mount()
      document.body.appendChild(window.bpDialog.$el)
      window.bpDialog.visible = true
      Vue.prototype.$bpDialog.hide = () => {
        window.bpDialog && window.bpDialog.hide()
      }
    }
  }
}
