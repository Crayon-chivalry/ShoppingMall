<template>
  <div id="detailed">
    <detailed-nav class="detailed-nav" @titleClick="titleClick" ref="nav"/>

    <scroll class="content" 
            :pull-up-load="true" 
            ref="scroll"
            @scroll="themeScroll">
      <detailed-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-params ref="params" :params="params" class="params"/>
      <detail-comment ref="comment" :comment="comment"/>
      <goods-list ref="list" :goods="recommend"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom @addCart="addCart"/>
  </div>
</template>


<script>
import DetailedNav from './childComps/DetailedNav'
import DetailedSwiper from './childComps/DetailedSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShop from './childComps/DetailShop'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'
import GoodsList from '@/components/content/goods/GoodsList'
import DetailBottom from './childComps/DetailBottom'

import Scroll from '@/components/common/scroll/Scroll'

import {getDetailed,Goods,Shop,User,getRecommend} from '@/network/detailed'
import {debounce} from '@/common/utils'
import {itemListenerMixin,backTop} from '@/common/mixin.js'

export default {
  name:'Detailed',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      params: {},
      comment: {},
      recommend:[],
      themeTopYs: [],
      getThemeTopY: null,
      navIndex: 0,
    }
  },
  components: {
    DetailedNav,
    DetailedSwiper,
    DetailBaseInfo,
    DetailShop,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottom
  },
  //混入
  mixins: [itemListenerMixin,backTop],
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid

    //根据iid请求详细页数据
    getDetailed(this.iid).then(res =>{
      //获取轮播图图片数据
      const data = res.result
      this.topImages = data.itemInfo.topImages
      console.log(res)

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //获取店铺信息
      this.shop = new Shop(data.shopInfo)

      //保存商品的详细页数据
      this.detailInfo = data.detailInfo

      //商品参数尺码数据
      this.params = data.itemParams

      //用户信息和评论数据
      if(data.rate.list) this.comment = new User(data.rate.list[0])

      //获取推荐商品数据
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    })
  },
  mounted(){
    //防抖函数
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.list.$el.offsetTop-44)
      this.themeTopYs.push(Number.MAX_VALUE)
    },100)
  },
  //destroyed销毁
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
    themeScroll(position) {
      for(let i = 0; i <= this.themeTopYs.length-1; i++){
        if(this.navIndex !== i && -position.y >= this.themeTopYs[i] && -position.y < this.themeTopYs[i+1]){
          this.navIndex = i
          this.$refs.nav.currentIndex  = i
        }
      }

      //backTop的显示和隐藏
      this.isShowBackTop = (-position.y) > 1000
    },
    addCart() {
      //1.获取购物车需要的数据
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;

      //2.将商品添加到购物车
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res => {
        console.log(this.$toast)
        this.$toast.show(res,2000)
      })
    }
  }
}
</script>


<style scoped>
  #detailed{
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .detailed-nav{
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
  /* .params{
    margin-top: 10px;
  } */
</style>