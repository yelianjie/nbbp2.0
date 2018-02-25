let $vm
export default {
  install (Vue) {
    Vue.prototype.$mask = (options) => {
      if ($vm) {
        return
      }
      $vm = Vue.extend({
        template: `
          <div class="fullscreen" id="mask" style="z-index:9999999999999;"></div>`,
        data () {
          return {
          }
        },
        mounted () {
        },
        methods: {
          hide () {
            document.body.removeChild(this.$el)
            $vm = null
          }
        },
        beforeDestroy () {
          console.log('de')
        }
      })
      $vm = new $vm()
      document.body.appendChild($vm.$mount().$el)
      Vue.prototype.$mask.hide = () => {
        $vm.hide()
      }
    }
    Vue.mixin({
      beforeRouteLeave: (to, from, next) => {
        if ($vm) {
          console.log($vm)
          $vm.hide()
        }
        next()
      }
    })
  }
}
