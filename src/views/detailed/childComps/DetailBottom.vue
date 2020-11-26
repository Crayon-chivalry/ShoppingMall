<template>
  <div class="detail-bottom">
    <div class="left-nav">
      <div>
        <img src="@/assets/img/detail/kf.svg"/>
        <span>客服</span>
      </div>
      <div>
        <img src="@/assets/img/detail/sc.svg"/>
        <span>收藏</span>
      </div>
      <div>
        <img src="@/assets/img/detail/dp.svg"/>
        <span>店铺</span>
      </div>
    </div>
    <div class="right-nav">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>


<script>
export default {
  name:"DetailBottom",
  methods: {
    addToCart() {
      this.$emit("addCart")
    }
  }
}
</script>


<style scoped>
  .detail-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background: #fff;
    display: flex;
  }
  .left-nav {
    width: 55%;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding-top: 2px;
  }
  .left-nav div{
    flex: 1;
  }
  .left-nav span{
    display: block;
    margin-top: 1px;
  }
  .left-nav img{
    width: 25px;
    height: 25px;
  }
  .right-nav{
    flex: 1;
    display: flex;
  }
  .right-nav div{
    font-size: 14px;
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
  .cart{
    background: rgba(245, 241, 2, 0.89);
  }
  .buy{
    background: var(--color-high-text);
    color: #fff;
  }
</style>