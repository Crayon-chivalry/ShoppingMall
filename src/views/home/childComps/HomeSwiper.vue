<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>


<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,SwiperItem
    },
    methods: {
      //轮播图图片加载完成事件
      imageLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImgeLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>


<style scoped>

</style>