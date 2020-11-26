<template>
  <div class="cart-total">
    <div class="check" @click="checkBnt">
      <check-button :class="{selectAll:isSelectAll}"/>
      <div class="all-bnt">全选</div>
    </div>
    <div class="price-total">
      合计:¥{{totalPrice}}
    </div>
    <div class="bnt" @click="settlement">
      去结算({{checkLength}})
    </div>
  </div>
</template>


<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
  name: 'CartTotal',
  components: {
    CheckButton,
  },
  computed: {
    //总价格
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    //购物车选择数量
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    //全选状态
    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  methods: {
    checkBnt() {
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    settlement() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品')
      }
    }
  }
}
</script>


<style scoped>
.cart-total{
  display: flex;
  height: 35px;
  background-color: rgb(241, 239, 239);
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  font-size: 14px;
}
.check{
  display: flex;
  /* 垂直对齐方式 */
  align-items: center;
  /* 水平对齐方式 */
  justify-content: center;
  width: 60px;
  margin-left: 5px;
}
.all-bnt{
  margin-left: 3px;
}
.price-total{
  margin-left: 15px;
  line-height: 35px;
  flex: 1;
}
.bnt{
  width: 30%;
  background: orange;
  color: #fff;
  text-align: center;
  line-height: 35px;
}
.selectAll{
  background-color: var(--color-tint);
}

</style>