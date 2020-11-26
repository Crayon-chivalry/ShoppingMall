<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return []
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    //监听图片加载
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('./detailed/'+this.goodsItem.iid)
    }
  }
}
</script>


<style scoped>
  .goods-list-item{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-item div{
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .goods-list-item div p{
    overflow: hidden;
    /**规定当文本溢出包含元素时发生的事情 */
    text-overflow: ellipsis;
    /**设置如何处理元素内的空白 */
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .collect{
    position: relative;
  }
  .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>