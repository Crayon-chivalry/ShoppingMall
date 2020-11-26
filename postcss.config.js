module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // UI设计稿的宽度
      viewportHeight: 667,
      unitPrecision: 5, // 转换后的精度，即小数点位数
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      // 指定不转换为视窗单位的类名，css设计不够好，转换了后出现bug
      selectorBlackList: ['tab-bar','nav-bar','tab-control','content'], 
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
    }
  }
};