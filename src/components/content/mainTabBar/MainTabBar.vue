<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/home2.svg"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/itemize.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/itemize2.svg"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/ShoppingCart.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/ShoppingCart2.svg"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img slot="item-icon" src="@/assets/img/tabbar/me.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/me2.svg"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>  
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  data(){
    return{
    }
  },
  components: {
    TabBar,TabBarItem
  }
}
</script>

<style scoped>

</style>