<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="@/assets/img/common/back.svg"/>
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in list" 
            :key="index"
            @click="titleClick(index)"
            :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>


<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailedNav',
  data() {
    return {
      list:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
      this.$emit("titleClick",index)
    },
    //返回
    backClick() {
      this.$router.back()
    }
  }
}
</script>


<style scoped>
  .left{
    margin-top: 8px;
  }
  .center{
    display: flex;
    font-size: 13px;
  }
  .center div {
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>