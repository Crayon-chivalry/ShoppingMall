<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>


<script>
export default {
  name:'Toast',
  data() {
    return{
      message: '11111',
      isShow: false
    }
  },
  methods: {
    show(message,times=2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      },times)
    }
  }
}
</script>



<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 10px 15px;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    z-index: 999;
  }
</style>