<template>
  <div class="container min-h">
    <group>
      <h2>公告内容</h2>
      <x-textarea :max="30" v-model="content" placeholder="请在这里输入酒吧首页展示的公告内容"></x-textarea>
    </group>
    <div class="bottom_abs">
      <x-button :gradients="['#1D62F0', '#1D62F0']" @click.native="saveNotice" :show-loading="loading">保存</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XTextarea, XButton } from 'vux'
import { getBarNotice, saveBarNotice } from '@/api/'
export default {
  components: {
    Group,
    XTextarea,
    XButton
  },
  data () {
    return {
      content: '',
      loading: false
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '公告设置'
    next()
  },
  created () {
    getBarNotice({ht_id: this.$route.params.id}).then((res) => {
      this.content = res.result.content
    })
  },
  methods: {
    saveNotice () {
      if (this.content === '') {
        this.$vux.toast.show({
          text: '公告内容不能为空'
        })
        return
      }
      this.loading = true
      saveBarNotice({ht_id: this.$route.params.id, content: this.content}).then((res) => {
        this.$vux.toast.show({
          text: '保存成功'
        })
      }).finally(() => {
        // this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
h2 {
  padding: 10px 15px;
  font-size: 18px;
}
.container {
  /deep/ .weui-cells {
    margin-top: 0;
  }
}

</style>
