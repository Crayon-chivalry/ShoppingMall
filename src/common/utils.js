//防抖函数
export function debounce(func,delay) {
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout (() => {
      //apply方法重用
      func.apply(this,args)
    },delay)
  }
}