<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="barImage"><slot name="item-icon"></slot></div>
    <div v-else class="barImage"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActive:false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
      // console.log(this.$route.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .tab-bar-item img{
    width: 30px;
    height: 27px;
  }
  .active{
    color: red;
  }
  .barImage{
    margin: 2px 0 1px;
  }
</style>