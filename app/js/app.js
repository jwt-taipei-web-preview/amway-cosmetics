'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $ */
var app = {};
app.partial = {};
app.pages = {};

// var dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 網址為 gulp 或者 github 時 設定成debug 模式
var debug = /localhost[:]9000|nelson119.github.io/.test(location.href);


$(function(){
    // 定義每個section
	$.each(app.partial, function(name, init){
		init($('#'+name));
		$('.page:eq(0)').addClass('init');
    });



	//觸發第一次調整頁面尺寸
	$(window).trigger('resize');

	var imagePreload = {}, elements = [];
	$('[data-src]').each(function(idx, ele){
		if($(ele).attr('data-src')){
			imagePreload[$(ele).attr('data-src')] = false;
			elements.push(ele);
		}
	});

	$.each(imagePreload, function(src, stat){
		var img = new Image();
		img.onload = function(){
			imagePreload[src] = true;
			var alldone = true;
			$.each(imagePreload, function($s, $done){
				alldone = $done && alldone;
			});
			// //載入後 加到背景
			// $(background[src]).css('background-image', 'url(' + src + ')');



			if(alldone){
				//全部圖片下載完成
				imageLoaded();
			}
		};
		img.src = src;
	});

	function imageLoaded(){
		$.each(elements, function(index, ele){
			$(ele).attr('src', $(ele).attr('data-src'));
		});

		$('.page:eq(0)').addClass('init');
	}
});

function goto(page){
	// $('#' + page).addClass('in')
	// 	.siblings().removeClass('in init');
	// $('#' + page).trigger('page:in');
	location.href = page + '.html';
}



//判斷是否具有屬性
$.fn.hasAttr = function(attributeName){
	var attr = $(this).attr(attributeName);
	if (typeof attr !== typeof undefined && attr !== false) {
		return true;
	}else{
		return false;
	}
};


