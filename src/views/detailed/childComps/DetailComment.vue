<template>
  <div id="comment" v-if="Object.keys(comment).length !== 0">
    <div class="more">更多>>></div>
    <div class="user">
      <img :src="'http:' + comment.avatar"/>
      {{comment.name}}
    </div>
    <div class="content">{{comment.content}}</div>
    <div class="style">{{comment.style}}</div>
    <div class="comment-img" v-if="comment.img">
      <img v-for="(item,index) in comment.img" :src="'http:' + item" :key="index"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DetailComment',
  props:{
    comment:{
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>


<style scoped>
  #comment{
    margin:15px 5px 10px;
    padding-top: 10px;
    border-top: 1px solid var(--color-tint);
    border-bottom: 1px solid var(--color-tint);
  }
  #comment div{
    margin-bottom: 15px;
  }
  .more{
    font-size: 14px;
    float: right;
  }
  .user{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
  }
  .user img{
    height: 100%;
    float: left;
    margin-right: 10px;
  }
  .content{
    font-size: 14px;
  }
  .style{
    font-size: 14px;
    color: darkgrey;
  }
  /* .comment-img{
    height: 50px;
    background: burlywood;
  } */
  .comment-img img{
    width: 50px;
    height: 50px;
    margin-left: 5px;
  }
</style>