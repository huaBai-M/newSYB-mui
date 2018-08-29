$(function(){
	var serData = {
		"build":[
		{
			"src":"../images/ser2_03.png",
			"title":"营销官网"
		},
		{
			"src":"../images/ser2_07.png",
			"title":"手机官网"
		},
		{
			"src":"../images/ser2_14.png",
			"title":"微信公众号"
		},
		{
			"src":"../images/ser2_19.png",
			"title":"微信小程序"
		},
		{
			"src":"../images/ser2_22.png",
			"title":"在线客服"
		}
		],
		"sale":[
		{
			"src":"../images/ser3_03.png",
			"title":"搜索引擎推广"
		},
		{
			"src":"../images/ser3_07.png",
			"title":"搜索引擎优化"
		},
		{
			"src":"../images/ser3_10.png",
			"title":"朋友圈推广"
		},
		{
			"src":"../images/ser3_12.png",
			"title":"精准人群推广"
		},
		{
			"src":"../images/ser3_15.png",
			"title":"短信推广"
		}
		]

	};
	
      var serData3 = [
		{
			"src":"../images/ser4_03.png",
			"title":"中国产品推广联盟"
		},
		{
			"src":"../images/ser4_06.png",
			"title":"软文推广"
		},
		{
			"src":"../images/ser4_09.png",
			"title":"央视广告推广"
		},
		{
			"src":"../images/ser4_12.png",
			"title":"企业信用等级认证"
		}
		];
		 var serData4 = [
		{
			"src":"../images/ser5_03.png",
			"title":"商标注册"
		},
		{
			"src":"../images/ser5_06.png",
			"title":"高新技术企业认定"
		},
		{
			"src":"../images/ser5_09.png",
			"title":"代理记账"
		}
		];
 
       // $('.topS').on('tap','li',function() {
       //     // $(this).addClass('activeB').siblings().removeClass('activeB');
       //     var index = $(this).attr('id');
       //     $('.tabHidden ul').eq(index).addClass('showUl').siblings().removeClass('showUl');
       //     $('.tabHidden .addUl p').html(botData[index]);
       // });

	for(var i = 0; i<$('.botList li').length; i++) {
		    $('.botList li').eq(i).find('.imgTitle img').attr('src',serData.build[i].src);
		    $('.botList li').eq(i).find('.titSmall').html(serData.build[i].title);
	}
	for(var i = 0; i<$('.botList2 li').length; i++) {
		    $('.botList2 li').eq(i).find('.imgTitle img').attr('src',serData.sale[i].src);
		    $('.botList2 li').eq(i).find('.titSmall').html(serData.sale[i].title);
	}  
	for(var i = 0; i<$('.botList3 li').length; i++) {
		    $('.botList3 li').eq(i).find('.imgTitle img').attr('src',serData3[i].src);
		    $('.botList3 li').eq(i).find('.titSmall').html(serData3[i].title);
	}          
    for(var i = 0; i<$('.botList4 li').length; i++) {
		    $('.botList4 li').eq(i).find('.imgTitle img').attr('src',serData4[i].src);
		    $('.botList4 li').eq(i).find('.titSmall').html(serData4[i].title);
	}  
	
})