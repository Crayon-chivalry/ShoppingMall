import {debounce} from './utils'
import BackTop from '@/components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 图片加载完成事件监听
    const refresh = debounce(this.$refs.scroll.refresh,50)
    //对监听的事件进行保存
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTop = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components:{
    BackTop
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}