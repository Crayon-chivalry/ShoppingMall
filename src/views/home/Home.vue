<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick" 
                   ref="tabControl1"
                   class="tab-control"
                   v-show="isTabFixed"/>

    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgeLoad="swiperImgeLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick" 
                   ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <!-- native原生监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>


<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import Scroll from '@/components/common/scroll/Scroll'

  //请求home数据
  import {getHomeMultdata,getHomeGoods} from '@/network/home'
  import {debounce} from '@/common/utils'
  import {itemListenerMixin,backTop} from '@/common/mixin.js'

  export default {
    name:'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    //混入
    mixins: [itemListenerMixin,backTop],
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultdata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
    },
    //活跃的
    activated() {
      // 进来时设置为原来保存的savaY信息
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    //离开
    deactivated() {
      //离开时保存一个位置信息
      this.saveY = this.$refs.scroll.scroll.y

      //取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件
       */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      // 判断BackTop隐藏和显示
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      //上拉加载
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImgeLoad() {
        //获取tabOffsetTop的offsetTop
        //$el用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 网络请求
       */
      getHomeMultdata() {
        getHomeMultdata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
       })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //结束上拉加载行为,准备好下一次
          this.$refs.scroll.finishPullUp()
        })
      },
    }
  }
</script>


<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    /* z-index: 9; */
  }
  .tab-control{
    position: relative;
    top: -1px;
    z-index: 9;
  }
  .content{
    /* height: calc(100% - 93px); */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /* height: calc(100% - 93px);
    overflow: hidden; */
  }
</style>