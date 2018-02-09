export default {
  install (Vue) {
    Vue.prototype.$noscroll = (options) => {
      document.documentElement.classList.add('noscroll')
      Vue.prototype.$noscroll.cancel = () => {
        document.documentElement.classList.remove('noscroll')
      }
    }
  }
}
