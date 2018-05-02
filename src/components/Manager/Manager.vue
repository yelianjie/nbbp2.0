<template>
  <div class="flex flex-h flex-align-center result-item pr" @click="onRoute(result.mc_id, index)">
    <div class="u-img">
      <img v-lazy="$options.filters.prefixImageUrl(result.headimgurl)" class="circle">
    </div>
    <div class="u-nickname overflow flex-1">
      <p>{{result.nickname}}</p>
      <p class="f12" style="color:#989898;">{{result.create_time}}</p>
    </div>
    <div class="u-op">
      <template v-if="from === 'searchResults'">
        <x-button mini :gradients="['#e51c23', '#e51c23']" :show-loading="loading1" @click.native="addBlack(result.id, index)" v-if="result.black_flag == null">拉黑</x-button>
        <x-button mini :gradients="['#b3b3b3', '#b3b3b3']" v-else>已拉黑</x-button>
        <x-button mini :gradients="['#1D62F0', '#1D62F0']" :show-loading="loading1" @click.native="addManager(result.id, index)" v-if="result.manage_flag === null">添加</x-button>
        <x-button mini :gradients="['#b3b3b3', '#b3b3b3']" v-else>已添加</x-button>
        <!-- <x-button mini type="warn" :show-loading="loading2" @click.native="deleteManager(result.id, index)" v-if="result.flag">删除</x-button> -->
      </template>
      <template v-else>
        <template v-if="type == 1">
          <x-button mini type="warn" :show-loading="loading2" @click.native="releaseBlack(result.mc_id, index)">移除</x-button>
        </template>
        <template v-else>
          <!-- <x-button mini type="warn" :show-loading="loading2" @click.native="deleteManager(result.mc_id, index)">删除</x-button> -->
          <x-icon type="ios-arrow-right" size="25"></x-icon>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  props: ['result', 'from', 'index', 'type'],
  data () {
    return {
      loading1: false,
      loading2: false
    }
  },
  components: {
    XButton
  },
  methods: {
    addManager (id) {
      // this.loading1 = true
      this.$emit('on-add', {
        id: id,
        index: this.index,
        cb: () => {
          // this.loading1 = false
        }
      })
    },
    deleteManager (id) {
      this.$emit('on-delete', {
        id: id,
        index: this.index,
        cb: () => {
          this.loading2 = false
        }
      })
    },
    addBlack (id) {
      this.$emit('on-black', {
        id: id,
        index: this.index,
        cb: () => {
          // this.loading2 = false
        }
      })
    },
    releaseBlack (id) {
      this.$emit('on-release', {
        id: id,
        index: this.index,
        cb: () => {
          // this.loading2 = false
        }
      })
    },
    onRoute (id) {
      if (this.type === 1) {
        return false
      }
      this.$emit('on-item-click', {
        id: id,
        index: this.index
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../styles/global.less';
.result-item /deep/ {
  .weui-btn + .weui-btn {
    margin: 0;
  }
  .vux-x-icon {
    fill: #989898;
  }
}

.result-item {
  padding: 10px 15px;
  &:before {
    .setTopLine(#e6e0e0);
    content: "";
  }
}
.u-img  {
  display: table;
  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
}
.u-nickname {
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
}
</style>
