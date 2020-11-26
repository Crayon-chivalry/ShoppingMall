<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
        :key="index"
        :class="{active:currentIndex === index}" 
        @click="activeClick(index)">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>


<style scoped>
  .tab-control{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tab-control div{
    flex: 1;
  }
  .tab-control div span{
    padding: 5px;
  }
  .active{
    color:var(--color-tint);
  }
  .active span{
    border-bottom:3px solid var(--color-tint)
  }
</style>