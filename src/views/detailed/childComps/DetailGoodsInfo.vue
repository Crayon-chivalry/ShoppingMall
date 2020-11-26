<template>
  <div id="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list"
            :key="index" :src="'http:' + item" @load="imgLoad"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DetailGoodsInfo',
  props:{
    detailInfo:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
      timer: null
    }
  },
  methods:{
    imgLoad() {
      //判断,所有图片都加载完后进行一次回调
        // this.$emit('imageLoad')
        //仿照防抖函数，自己写的，但是理解不太深
        // 如果图片在50毫秒内加载成功，判断timer为true,会阻止函数的执行，
        // 所以不会调用事件，如果图片没有在规定时间加载，则会调用事件来刷新(乱)
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$emit("imageLoad")
        },50)
    }
  },
  watch: {
    detailInfo() {
      //获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>


<style scoped>
  .desc{
    margin-top: 5px;
    box-shadow: 0px 1px 1px rgba(240, 234, 234, 0.8);
    font-size: 14px;
    padding-bottom: 5px;
  }
  .info-key{
    width: 50%;
    margin: 20px auto;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
  .info-list img{
    width: 100%;
  }
</style>