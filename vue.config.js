// module.exports = {
//   //公共路径
//   publicPath: './',
//   //输出文件目录
//   outputDir: 'dist',
//   //静态资源存放的文件夹
//   assetsDir: 'assets',
// }

const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
         config.resolve.alias.set('@', resolve('src'))
         //没有效果
        .set('assets', resolve('src/assets'))
        //set第一个参数：设置的别名，第二个参数：设置的路径　　　
    },


    //公共路径
    publicPath: './',
    //输出文件目录
    outputDir: 'dist',
    //静态资源存放的文件夹
    assetsDir: 'assets',
}