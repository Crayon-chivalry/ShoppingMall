<template>
  <div id="recommend">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>



<style scoped>
  #recommend{
    display:flex;
    text-align: center;
    font-size: 13px;
    padding:15px 0 20px;
    border-bottom: 8px solid #eee;
  }
  #recommend div{
    flex: 1;
    margin: 10px;
  }
  #recommend div img{
    width: 100%;
  }
</style>