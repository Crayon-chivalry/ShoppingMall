<template>
  <!-- Object.keys获取到对象的所有键名 -->
  <!-- 页面渲染的速度，快于异步数据请求的速度，所以就会报错,需要进行判读 -->
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">
      <h3>{{goods.title}}</h3>
    </div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length-1" 
            :key="index"
            :class="{activeHeight: goods.services.length-1 <= 3}">
        <img :src="baseIcon(goods.services[index-1].icon)"/>
        {{goods.services[index-1].name}}
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goods:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    //用来解决打包后图片路径是否添加http
    baseIcon() {
      return function(item) {
        if(item !== undefined) {
          return "http:" + item
        }else {
          return item
        }
      }
    }
  }
}
</script>


<style scoped>
  .title{
    margin: 10px 5px;
    font-size: 16px;
  }
  .price{
    margin: 0 5px;
  }
  .price span{
    margin-left: 3px;
  }
  .newPrice{
    font-size: 23px;
    color: var(--color-high-text);
    font-weight: bold;
  }
  .oldPrice{
    /* css字体加横线 */
    text-decoration: line-through;
    font-size: 13px;
  }
  .discount {
    background-color: var(--color-high-text);
    color: #ffffff;
    padding: 2px 4px;
    font-size: 14px;
    border-radius: 10px;
  }
  .columns{
    height: 34px;
    line-height: 34px;
    display: flex;
    font-size: 13px;
    margin:5px 0;
    color: darkgray;
    box-shadow: 0px 1px 1px  rgba(240, 234, 234, 0.3);
  }
  .columns span{
    flex: 1;
  }
  .services{
    display: flex;
    font-size: 13px;
    font-weight: bold;
    height: 54px;
    box-shadow: 0px 3px 1px rgba(240, 234, 234, 0.5);
    /* overflow: hidden; */
    flex-wrap: wrap;
  }
  .services span{
    width: 33%;
  }
  .services img{
    width: 14px;
    height: 14px;
  }
  .activeHeight{
    line-height: 54px;
    flex: 1;
  }
</style>