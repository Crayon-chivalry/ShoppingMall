import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      //1.查找之前数组中是否有该商品
      /**
       * find()方法返回第一个满足过滤方法的元素，
      一个都没有满足的就返回undefined，
      遇到一个满足的元素后遍历就停止了
      */
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if(oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('商品数量+1')
      }else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('商品添加成功')
      }
    })
  }
}