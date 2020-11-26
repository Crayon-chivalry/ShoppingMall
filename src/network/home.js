//引入封装好的axios网络请求
import {request} from "./request"

//首页所有的请求
export function getHomeMultdata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}