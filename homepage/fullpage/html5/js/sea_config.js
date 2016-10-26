seajs.config({
 base: "./js/",
  // 别名配置
  alias: {
    'jquery': 'jquery-1.8.3.min',
    'jquery-fullpage': 'jquery.fullpage.sea'
  },

  // 调试模式
  debug: true,

  // 文件编码
  charset: 'utf-8' 
});

// 加载入口模块
seajs.use("sea_app",function(a){
    a.show();
});