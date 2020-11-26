<template>
  <div class="cart-list">
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item"/>
    </scroll>
  </div>
</template>


<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  props: {
    cartList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>


<style scoped>
  .cart-list {
    height: 100vh;
    overflow: hidden;
  }
  .content{
    height: calc(100% - 44px - 49px - 35px);
  }
</style>