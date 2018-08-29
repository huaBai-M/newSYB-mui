$(function(){

  // 头部公共部分及导航栏
	$('header').html('<a class="iconfont icon-icon_menu mui-pull-left mui-action-menu" href="#offCanvasSide"></a>'
		      +'<h1 class="mui-title"><img src="../images/logo.png" alt="logo"></h1>'
		      +'<a href="user.html" class="head-right"><img src="../images/user.png" alt="user"/><i></i></a>');
	$('.menuSLeft').html('<div class="topSc">'
                     +'<a id="offCanvasHide" class="mui-icon mui-icon-closeempty closeS"></a>'
                     +'<img src="../images/logo.png" alt="">'
		           +'</div>'
		           +'<ul>'
		             +'<li>'
                       +'<a href="index.html"><span class="iconfont icon-tongji-duibi"></span>数据中心</a>'
                     +'</li>'
                      +'<li>'
                       +'<a href="service.html"><span class="iconfont icon-icon_service"></span>服务中心</a>'
                     +'</li>'
                      +'<li>'
                       +'<a href="message.html"><span class="mui-icon mui-icon-chat"></span>消息中心</a>'
                     +'</li>'
                      +'<li>'
                       +'<a href="user.html"><span class="iconfont icon-yonghu"></span>用户中心</a>'
                     +'</li>'
		           +'</ul>');

 // 解决a标签 跳转问题
  mui('body').on('tap','a',function(){document.location.href=this.href;});

})