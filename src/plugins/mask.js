export default {
  install (Vue) {
    Vue.prototype.$mask = (options) => {
      if (document.getElementById('mask')) {
        return
      }
      let MaskTpl = Vue.extend({
        template: `
          <div class="fullscreen" id="mask"></div>`,
        data () {
          return {
          }
        },
        mounted () {
        },
        methods: {
        }
      })
      window.maskBp = new MaskTpl().$mount()
      document.body.appendChild(window.maskBp.$el)
      Vue.prototype.$mask.hide = () => {
        document.body.removeChild(document.getElementById('mask'))
      }
    }
  }
}
