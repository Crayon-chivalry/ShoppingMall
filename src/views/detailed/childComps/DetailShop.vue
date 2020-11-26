<template>
  <div id="shop" v-if="Object.keys(shop).length !== 0">
    <div class="shop-title">
      <img :src="'http:' + shop.logo"/>
      {{shop.name}}
    </div>
    <div class="shop-info">
      <div class="info-left">
        <span>
          <div>{{shop.sells}}</div>
          <div>总销量</div>
        </span>
        <span>
          <div>{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </span>
      </div>
      <div class="info-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td  class="better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="score-bnt">
      <div>进店逛逛</div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'DetailShop',
    props:{
      shop:{
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>



<style scoped>
  #shop{
    margin: 15px 10px;
  }
  .shop-title{
    height: 60px;
    line-height: 60px;
    font-weight: 700;
    font-size: 18px;
  }
  .shop-title img{
    width: 75px;
    height: 60px;
    float: left;
    padding-right: 10px;
  }
  .shop-info{
    display: flex;
    margin-top: 10px;
    height: 81px;
    font-size: 14px;
  }
  .info-left,.info-right{
    flex: 1;
  }
  .info-left{
    display: flex;
    height: 41px;
    margin-top: 20px;
  }
  .info-left span{
    flex: 1;
    text-align:center;
  }
  .info-right ul{
    padding: 0;
    margin: 0;
  }
  .info-right table{
    width: 90%;
    font-size: 14px;
  }
  .info-right table tr{
    height: 25px;
    line-height: 25px;
  }
  .score{
    color: green;
  }
  .score-better{
    color: red;
  }
  .better{
    background: green;
    color: #ffffff;
  }
  .better-more{
    background: red;
  }
  .score-bnt{
    margin-top: 10px;
    height: 60px;
    box-shadow: 0px 2px 1px rgba(240, 234, 234, 0.6);
  }
  .score-bnt div{
    width: 140px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    background: rgb(230, 225, 225);
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
  }
</style>