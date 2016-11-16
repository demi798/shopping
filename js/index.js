/*index页面的js动态效果*/

/*搜索框焦点时无value*/
$(document).ready(function(){
	$('.search').focus(function(){
		$(this).addClass('focus');
		if($(this).val()== this.defaultValue){
			$(this).val('');
		}
	}).blur(function(){
		$(this).removeClass('focus');
		if($(this).val()==''){
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which==13){
			alert("回车提交表单!");
		}
	})
});

/*网页换肤??*/
$(function(){
	var $li = $('#skin li');
	$li.click(function(){
		switchSkin(this.id);
	});
	
	var cookie_skin = $.cookie('MyCssSkin');
	if(cookie_skin){
		switchSkin(cookie_skin);
	}
});
	function switchSkin(skinName){
		$('#'+skinName).addClass('selected')
			.siblings().removeClass('selected');
		$('#cssfile').attr('href','css//skin/'+skinName+'.css');
		$.cookie('MyCssSkin',skinName,{path:'/',expires:10});
	}
	
/*导航效果*/
/*用mouseover()和mouseout()，缺点是当this的li仍有子元素时，mouseout()会出现少许bug；
 * $(function(){
	$('.nav li').mouseover(function(){
		$(this).find('.sub_container').stop(true,true).fadeIn();
	}).mouseout(function(){
		$(this).find('.sub_container').stop(true,true).fadeOut();
	});
});*/
$(function(){
	$('.nav li').hover(function(){
		$(this).find('.sub_container').stop(true,true).fadeIn();
	},function(){
		$(this).find('.sub_container').stop(true,true).fadeOut();
	});
});

/*最新动态 自行设置title*/
$(function(){
	var x = 10;
	var y = 20;
	$('.tooltip').mouseover(function(e){
		this.myTitle = this.title;
		this.title = '';
		var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>";
		$("body").append(tooltip);
		$("#tooltip").css(
			{
				'top':(e.pageY + y)+'px',
				'left':(e.pageX + x)+'px'
			}).show('fast');                     //设置div在mouseover时的x、y坐标；
	}).mouseout(function(){
		this.title = this.myTitle;
		$('#tooltip').remove();
	}).mousemove(function(e){
		$('#tooltip').css(
			{
				'top':(e.pageY + y)+'px',
				'left':(e.pageX + x)+ 'px'
			});
	});
});

/*最下方鞋子横向滚动效果*/
$(function(){
		$("#anchor div a").click(function(){
			$(this).parent().addClass("chos").siblings().removeClass("chos");
			var idx = $("#anchor div a").index(this);
			showBrandList(idx);
			return false;
		}).eq(0).click();
});

function showBrandList(index){
	 var rollWidth = $("#big_shoes").find("li").outerWidth(true);
	 rollWidth = rollWidth * 4;
	 $("#big_shoes").stop(true,false).animate({ marginLeft: -rollWidth*index},1000);
}

/*最下方鞋子图片鼠标移上去显示放大镜*/
$(function(){
	$("#big_shoes").delegate('img','hover',function(){
		$(this).toggleClass('imgOver');
	});
});

/*中间图片自动轮播效果*/
$(function(){
	var idx = 0;
	var len = $(".big_pic").find("li").length;
	var adTimer = null;
	$(".small_pic_info").mouseover(function(){
		var idx = $(this).index();
		showBigPic(idx);
		return false;
	}).eq(0).mouseover();
	
	$(".small_pic").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer = setInterval(function(){
			showBigPic(idx);
			idx++;
			if(idx==len){
				idx = 0;
			}
		},5000);
	}).trigger("mouseleave");
});
	/*显示不同的幻灯片*/
	function showBigPic(index){
		$(".small_pic_info").eq(index).addClass("chos").siblings().removeClass("chos");
		$(".big_pic li").eq(index).stop(true,true).fadeIn()
			.siblings().fadeOut();
	}