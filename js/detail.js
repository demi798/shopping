/*详情页JS*/

/*中间下方选项卡*/
$(function(){
	$(".intro_card_title li").click(function(){
		var index = $(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".intro_card_content").find("li").eq(index).removeClass("hide").siblings().addClass("hide");
	});
});

/*右侧尺寸切换*/
$(function(){
	$(".choose_size").find("div").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parents(".intro_detail_size").find("span").text($(this).text());
	});
});

/*右侧数量及价格联动*/
$(function(){
		var price = $(".price").text();   //不宜写在change()里面，不然数额会连翻倍；
	$("#choose_number").change(function(){
		var num = $(this).val();
		var amount = price*num;
		$(".price").text(amount);
	}).change();
});

/*右侧评分*/
$(function(){
	$("ul.score li a").click(function(){
		var title = $(this).attr("title");
		alert("您给此商品的评分是："+title);
		var cl = $(this).parent().attr("class");
		$(this).parent().parent().removeClass().addClass("score "+cl+"star");
		$("this").blur();
		return false;
	});
});

/*加入购物车弹窗效果*/
$(function(){
	$(".cart").click(function(e){
		var pro_title = $("#detail_intro").find("h5").text();
		var pro_color = $(".intro_detail_color").find(".color_word").text();
		var pro_size = $(".intro_detail_size").find("span").text();
		var pro_number = $(".intro_detail_number").find("select").val();
		var pro_price = $(".intro_detail_price").find(".price").text();
		var dialog = "感谢您的购买。\n您购买的产品是："+
					 pro_title+";\n"+
					 "颜色是："+pro_color+"；\n"+
					 "尺寸是："+pro_size+"；\n"+
					 "数量是："+pro_number+"；\n"+
					 "总价是："+pro_price+"元。";
		alert(dialog);
		return false;   //避免页面跳转
	});
});

/*右侧衣服颜色及中间大图切换*/
$(function(){
	$(".choose_color img").bind('click',function(){
		var alt = $(this).attr("alt");
		$(this).parent().parent().parent().siblings(".color_word").text(alt);
		$(this).addClass("hover").parent().siblings().children().removeClass("hover");
		
		var imgSrc = $(this).attr("src");
		var i = imgSrc.lastIndexOf(".");
		var unit = imgSrc.substring(i);   //.jpg
		imgSrc = imgSrc.substring(0,i);
		var bigSrc = imgSrc+"_one_big"+unit;
		var smallSrc = imgSrc+"_one_small"+unit;
		$(".intro_pic_list img").attr('src',smallSrc);
		$("#watch_pic").attr('href',bigSrc);   //“观看清晰图片”图片切换；
		var newImgSrc = imgSrc.replace('img/pro_img/','');
		$('#detail_content .intro_small_pic li').hide();
		$('#detail_content .intro_small_pic').find('.small_pic_'+newImgSrc).show();
		
		$('#thickImg').attr('href',bigSrc);
		return false;
	});
});

/*中间小图切换大图效果*/
$(function(){
	$('.intro_small_pic li img').click(function(){
		var imgSrc = $(this).attr("src");
		var i = imgSrc.lastIndexOf('.');
		var unit = imgSrc.substring(i);
		imgSrc = imgSrc.substring(0,i);
		
		var smallImgSrc = imgSrc + "_small" + unit;
		var bigImgSrc = imgSrc + "_big" + unit;
		$('.intro_pic_list img').attr('src',smallImgSrc);
		$('#thickImg').attr('href',bigImgSrc);
	});
});

/*放大镜效果*/
/*$(function(){
	$('.jqzoom').jqzoom({
		zoomType: 'standard',
		lens: true,
		preloadImages: false,
		alwaysOn: false,
		zoomWidth: 340,
		zoomHeight: 340,
		xOffset: 10,
		yOffset: 0,
		position: 'right'
	});
});*/