<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartIndex}})</div></nav-bar>
    <cart-list :cart-list="cartList"/>
    <cart-total/>
  </div>
</template>


<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartTotal from './childComps/CartTotal'

import {mapGetters} from 'vuex'

  export default {
    name:'Cart',
    components:{
      NavBar,
      CartList,
      CartTotal
    },
    computed: {
      //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
      ...mapGetters([
        'cartIndex',
        'cartList'
      ])
    }
  }
</script>


<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>