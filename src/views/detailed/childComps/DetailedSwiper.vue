<template>
  <swiper class="detailed-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="'http:' + item"/>
    </swiper-item>
  </swiper>
</template>


<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper'

  export default {
    name: 'DetailedSwiper',
    props:{
      topImages:{
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {

      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>


<style scoped>
  .detailed-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>