import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  //拦截器,请求前的一些操作吧
  instance.interceptors.request.use(config =>{
    // console.log(config)
    return config
  },err => {
    // console.log(err)
  })

  //响应拦截器，接受响应后进行操作
  instance.interceptors.response.use(res =>{
    return res.data
  },err => {
    console.log(err)
  })

  //发送真正的网络请求
  return instance(config)
}