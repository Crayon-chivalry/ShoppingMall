<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>


<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem,
    }
  }
</script>


<style scoped>
  .goods-list{
    display: flex;
    /**让弹性盒元素在必要的时候拆行 */
    flex-wrap: wrap;
    /**项目位于各行之前、之间、之后都留有空白的容器内。 */
    justify-content: space-around;
  }
</style>