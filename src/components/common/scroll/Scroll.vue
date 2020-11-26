<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
        message: "111",
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        //上拉加载
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll',position)
      })

      //监听上拉加载事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      //结束上拉加载行为,然后进行下一次上拉加载的准备
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      //重新计算 BetterScroll
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>


<style scoped>

</style>