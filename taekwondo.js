
$(document).ready(function(){

	$(".header").html("\
		<div class=\"menu\">\
			<ul class=\"nav\">\
				<li ><a href=\"index.html\">首页</a></li>\
				<li class=\"s1\"><a href=\"\" onclick=\"return false\">社团介绍</a></li>\
				<li ><a href=\"taekwondo2.html\">课程安排</a></li>\
				<li ><a href=\"taekwondo3.html\">学习资料</a></li>\
				<li ><a href=\"taekwondo4.html\">图片视频</a></li>\
				<li class=\"s3\"><a href=\"taekwondo5-1.html\">社团动态</a></li>\
				<li ><a href=\"taekwondo6.html\">联系我们</a></li>\
				<div class=\"show_all\">\
					<div class=\"show show1\">\
						<ul>\
							<li><a href=\"taekwondo1-1.html\">社团介绍</a></li>\
							<li><a href=\"taekwondo1-2.html\">权威教练</a></li>\
							<li><a href=\"taekwondo1-3.html\">优秀学员</a></li>\
						</ul>\
					</div>\
				</div><!--show_all结束-->\
			</ul>\
		</div><!--menu结束-->\
		<div id=\"logo\">\
			<div class=\"logo_center\">\
				<div class=\"logo\"><img src=\"img/logo1.png\" alt=\"\"></div>\
				<div class=\"title\"><img src=\"img/logo2.png\" alt=\"\"></div>\
			</div>\
		</div><!--logo结束-->\
		");



	$(".footer").html("\
		<div class=\"footer_main\">\
		<ul>\
		<li class=\"f_nav\">\
					<a href=\"index.html\">网站首页</a>&nbsp;&nbsp;|&nbsp;&nbsp;\
					<a href=\"taekwondo1-1.html\">社团介绍</a>&nbsp;&nbsp;|&nbsp;&nbsp;\
					<a href=\"taekwondo2.html\">课程安排</a>&nbsp;&nbsp;|&nbsp;&nbsp;\
					<a href=\"taekwondo5-1.html\">最新公告</a>&nbsp;&nbsp;|&nbsp;&nbsp;\
					<a href=\"taekwondo6.html\">联系我们</a>\
				</li>\
				<li class=\"f_span\">Design&nbsp;And&nbsp;ReDevelop&nbsp;By&nbsp;Lemond&nbsp;Young</li>\
				<li class=\"f_span\">地址：济南市章丘区山东财经学院圣井校区东美食街北头尚武跆拳道馆</li>\
				<li class=\"f_span\">CopyRight&nbsp;@&nbsp;2017&nbsp;山东财经大学跆拳道协会版权所有</li>\
			</ul>\
		</div>\
		");

	$(".toplist").html("\
		<ul>\
			<li class=\"toplist_title\">TOP7</li>\
			<li><span class=\"icon icon-fire\"></span><a href=\"taekwondo3-8.html\">2011-08-29|跆拳道基本动作</a></li>\
			<li><span class=\"icon icon-fire\"></span><a href=\"taekwondo3-5.html\">2012-12-13|跆拳道腰带系法</a></li>\
			<li><span class=\"icon icon-fire\"></span><a href=\"taekwondo3-2.html\">2017-01-14|跆拳道道带的级别及含义</a></li>\
			<li><span class=\"icon icon-power\"></span><a href=\"taekwondo3-4.html\">跆拳道的技术解析</a></li>\
			<li><span class=\"icon icon-power\"></span><a href=\"taekwondo3-6.html\">跆拳道和空手道的区别</a></li>\
			<li><span class=\"icon icon-power\"></span><a href=\"taekwondo3-3.html\">跆拳道的礼节</a></li>\
			<li><span class=\"icon icon-power\"></span><a href=\"taekwondo3-1.html\">太极一章品势内涵</a></li>\
		</ul>\
		");

	
	$(".show").hide();
	$(".s1").bind({

		click:function(){$(".show1").toggle();},
	});
	$(".s3").bind({
		mouseover:function(){$(".show3").show();},
		mouseout:function(){$(".show3").hide();},
	});
	$(".show").bind({
		mouseover:function(){$(this).show();},
		mouseout:function(){$(this).hide();}
	});


	var box = new Array()
	var box1 = new Array()
	var div = new Array()
	var i;	
	for(var i=0;i<6;i++){
		box[i] = $(".part3_1>ul>li:eq(" + i + ")");	
	}
	for(var i=0;i<6;i++){
		box1[i] = $(".part3_2>ul>li:eq(" + i + ")");	
	}


	box[0].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("李庆玺&nbsp;&nbsp;|&nbsp;&nbsp;数学院<br/>2014年10月加入山财大跆协<br/>跆拳道黑带一段&nbsp;&nbsp;|&nbsp;&nbsp;会长");
	});	
	box[1].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("曹新豪&nbsp;&nbsp;|&nbsp;&nbsp;法学院<br/>2014年10月加入山财大跆协<br/>跆拳道黑带一段&nbsp;&nbsp;|&nbsp;&nbsp;训练部部长");
	});	
	box[2].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("钟小雪&nbsp;&nbsp;|&nbsp;&nbsp;金融学院<br/>2014年10月加入山财大跆协<br/>跆拳道红黑带&nbsp;&nbsp;|&nbsp;&nbsp;秘书处部长");
	});	
	box[3].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("王迎雪&nbsp;&nbsp;|&nbsp;&nbsp;经济学院<br/>2014年10月加入山财大跆协<br/>跆拳道红黑带&nbsp;&nbsp;|&nbsp;&nbsp;宣传部部长");
	});	

	box[4].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("时卓群&nbsp;&nbsp;|&nbsp;&nbsp;国际经济与贸易学院<br/>2014年10月加入山财大跆协<br/>跆拳道黑带一段&nbsp;&nbsp;|&nbsp;&nbsp;外联部部长");
	});	
	box[5].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("张敏&nbsp;&nbsp;|&nbsp;&nbsp;保险学院<br/>2014年10月加入山财大跆协<br/>跆拳道黑带一段&nbsp;&nbsp;|&nbsp;&nbsp;财务部部长");
	});	

	box1[0].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("孔泽伟&nbsp;&nbsp;|&nbsp;&nbsp;国际经济与贸易学院<br/>2014年10月加入山财大跆协<br/>跆拳道黑带一段&nbsp;&nbsp;|&nbsp;&nbsp;会长");
	});	
	box1[1].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("张俊毅&nbsp;&nbsp;|&nbsp;&nbsp;法学院<br/>2014年10月加入山财大跆协<br/>跆拳道蓝带&nbsp;&nbsp;|&nbsp;&nbsp;训练部部长");
	});	
	box1[2].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("钟琳&nbsp;&nbsp;|&nbsp;&nbsp;法学院<br/>2014年10月加入山财大跆协<br/>跆拳道红黑带&nbsp;&nbsp;|&nbsp;&nbsp;秘书处部长");
	});	
	box1[3].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("赵飞濛&nbsp;&nbsp;|&nbsp;&nbsp;经济学院<br/>2014年10月加入山财大跆协<br/>跆拳道红带&nbsp;&nbsp;|&nbsp;&nbsp;宣传部部长");
	});	

	box1[4].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("陈宽&nbsp;&nbsp;|&nbsp;&nbsp;法学院<br/>2014年10月加入山财大跆协<br/>跆拳道蓝带&nbsp;&nbsp;|&nbsp;&nbsp;外联部部长");
	});	
	box1[5].on('click',function(){		
		$(".bottom").addClass("arron");	
		$(".arron").html("潘荣荣&nbsp;&nbsp;|&nbsp;&nbsp;保险学院<br/>2014年10月加入山财大跆协<br/>跆拳道红黑带&nbsp;&nbsp;|&nbsp;&nbsp;组策部部长");
	});	




	// box[3].on('click',function(){		
	// 	div[i] = $("<div class='arron'>DIV元素节点</div>");
	// 	$(".bottom").append(div[i]);	
	// });



	//taekwondo2-class
	$(".icon-circle-down").bind({
		click:function(){$(this).parent().parent().children(".part2_1_text").toggle();
						$(this).toggleClass("icon-circle-up");},
		mouseover:function(){$(this).css({"font-size":"16px","color":"#e04462",});},
		mouseout:function(){$(this).css({"font-size":"14px","color":"#fff",});},
	});

	//taekwondo4-1
	$(".moreimg .part2_1.html").hide();
	//taekwondo4
	$(".imgwrap").children().hide();
	$(".imgwrap").bind({
		mouseover:function(){$(this).children().show();
							$(this).css({"background-color":"rgba(224, 68, 98, 0.84)",});},
		mouseout:function(){$(this).children().hide();
							$(this).css({"background-color":"rgba(224, 68, 98, 0)",});},
	});


});

