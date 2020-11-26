<template>
  <div class="item-Info">
    <div class="check">
      <check-button :class="{active:itemInfo.checked}" @click.native="checkBtn"/>
    </div>
    <div class="title-image">
      <img :src="'http:' + itemInfo.image"/>
    </div>
    <div class="info">
      <div class="title">{{itemInfo.title}}</div>
      <div class="desc">{{itemInfo.desc}}</div>
      <div class="info-pruce">
        <span class="price">¥{{itemInfo.price}}</span>
        <span class="count">x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components:{
    CheckButton,
  },
  methods: {
    checkBtn() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>


<style scoped>
  .item-Info{
    height: 15%;
    display: flex;
    padding: 5px;
    border-bottom: #aaa solid 1px;
  }
  .check{
    display: flex;
    /* 垂直对齐方式 */
    align-items: center;
    /* 水平对齐方式 */
    justify-content: center;
    width: 20px;
    margin-right: 5px;
  }
  .title-image{
    width: 25%;
    height: 100%;
  }
  .title-image img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .active{
    background: var(--color-tint);
  }
  .info{
    width: 60%;
    margin: 0 auto;
    position: relative;
  }
  .title,.desc{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .desc{
    font-size: 14px;
  }
  .info-pruce{
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  .price{
    font-size: 20px;
    color: orange;
    font-weight: bold;
  }
  .count{
    font-size: 18px;
    float: right;
  }
</style>