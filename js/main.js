'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $, TimelineMax */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = {};
app.partial = {};
app.pages = {};

// var dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 網址為 gulp 或者 github 時 設定成debug 模式
var debug = /localhost[:]9000|nelson119.github.io/.test(location.href);

$(function () {

	var page = $('.page:eq(0)');
	var selectTimeout = 0;

	//閒置出現倒數秒數
	var tickTimeout = 120;
	//倒數秒數
	var countdown = 20;

	$('.countdown', page).on('page:in', function (e) {
		var tl = new TimelineMax({
			paused: true,
			onComplete: function onComplete() {
				goto('index');
			}
		});
		var sec = countdown;
		// console.log(sec)
		for (var i = countdown; i > 0; i--) {
			tl.addPause('+=' + 1, function () {
				sec--;
				if (sec >= 0) {
					$('.countdown .secs span', page).html(sec);
				}
				tl.play();
			});
		}
		tl.play();
		$('.dismiss, .ok', page).one('click', function () {
			app.dismissCountdown();
			tl.stop();
			clearTimeout(selectTimeout);
			selectTimeout = setTimeout(function () {
				app.showCountdown();
			}, app.tickTimeout * 1000);
		});
		e.stopPropagation();
	});

	app.showCountdown = function () {
		$('.countdown .secs span', page).html(countdown);
		$('.countdown', page).addClass('fade in').one('webkitTransitionEnd transitionEnd', function (event) {
			$('.countdown', page).trigger('page:in');
		});
	};
	app.dismissCountdown = function () {
		$('.countdown', page).removeClass('in');
	};
	$(window).on('mousemove', function () {
		clearTimeout(selectTimeout);
		selectTimeout = setTimeout(function () {
			app.showCountdown();
		}, tickTimeout * 1000);
	});

	app.tickTimeout = tickTimeout;
	app.selectTimeout = selectTimeout;

	// 定義每個section
	$.each(app.partial, function (name, init) {
		init($('#' + name));
		$('.page:eq(0)').addClass('init');
	});

	//觸發第一次調整頁面尺寸
	$(window).trigger('resize');

	var imagePreload = {},
	    elements = [];
	$('[data-src]').each(function (idx, ele) {
		if ($(ele).attr('data-src')) {
			imagePreload[$(ele).attr('data-src')] = false;
			elements.push(ele);
		}
	});

	$.each(imagePreload, function (src, stat) {
		var img = new Image();
		img.onload = function () {
			imagePreload[src] = true;
			var alldone = true;
			$.each(imagePreload, function ($s, $done) {
				alldone = $done && alldone;
			});
			// //載入後 加到背景
			// $(background[src]).css('background-image', 'url(' + src + ')');


			if (alldone) {
				//全部圖片下載完成
				imageLoaded();
			}
		};
		img.src = src;
	});

	function imageLoaded() {
		$.each(elements, function (index, ele) {
			if (ele.tagName.toLowerCase() === 'img') {
				$(ele).attr('src', $(ele).attr('data-src'));
			} else {
				$(ele).css('background-image', 'url(' + $(ele).attr('data-src') + ')');
			}
		});
		$('.page:eq(0)').addClass('init').trigger('page:in');
	}
});

function goto(page) {
	location.href = page + '.html';
}

//判斷是否具有屬性
$.fn.hasAttr = function (attributeName) {
	var attr = $(this).attr(attributeName);
	if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && attr !== false) {
		return true;
	} else {
		return false;
	}
};
//# sourceMappingURL=app.js.map
