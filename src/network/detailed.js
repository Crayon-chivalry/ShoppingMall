import {request} from './request'

export function getDetailed(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
  //constructor 属性返回对创建此对象的数组函数的引用。
  constructor(itemIfon,columns,services) {
    this.title = itemIfon.title
    this.desc = itemIfon.desc
    this.lowNowPrice= itemIfon.lowNowPrice
    this.newPrice = itemIfon.price
    this.oldPrice = itemIfon.oldPrice
    this.discount = itemIfon.discountDesc
    this.realOrice = itemIfon.lowNowPrice
    this.columns = columns
    this.services = services
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}


export class User {
  constructor(rate) {
    this.content = rate.content
    this.style = rate.style
    this.name = rate.user.uname
    this.avatar = rate.user.avatar
    this.img = rate.images
  }
}