'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $ */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = {};
app.partial = {};
app.pages = {};

// 網址為 gulp 或者 github 時 設定成debug 模式
var debug = /localhost[:]9000|nelson119.github.io/.test(location.href);

$(function () {

	var page = $('.page:eq(0)');
	var selectTimeout = 0;
    var tickTimeout = 0;

	//預設閒置出現倒數秒數
    var tickTime = 5;
	//var tickTimeout;
	//預設倒數秒數
    var countdown = 20;

    //離開頁面的網址
    var Leave_PageUrl = 'aa';
    //----------
 
	var currentTime = new Date() * 1;
	var endTime = new Date() * 1 + (countdown + 0.5) * 1000;
	var countdownAnimate = 0;

	$('.countdown', page).on('page:in', function (e) {
		clearInterval(countdownAnimate);
		function updateNumber() {
			currentTime = new Date() * 1;
			var s = Math.floor((endTime - currentTime) / 1000);
			console.log(s + Leave_PageUrl);
			if (s > 0) {
				$('.countdown .secs span', page).html(s);
			} else {
			    $('.countdown .secs span', page).html(0);
                //----------
			    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: "1", Leave_Method: "2", Leave_Page: Leave_PageUrl };
			    		    var jqxhr = $.ajax({
			    		        url:$('#ServerIP').val()+ "Device_Status_Repor.aspx",
			    		        //url: "http://localhost/E-Service/Device_Status_Repor.aspx",
			    		        processData: false,
			    		        type: "POST",
			    		        data: JSON.stringify(theJSONObject)
			    		    });  

                //----------
				goto('index');
				clearInterval(countdownAnimate);
			}
		}
		countdownAnimate = setInterval(updateNumber, 1000);
		updateNumber();

		$('.dismiss, .ok', page).one('click', function () {
			app.dismissCountdown();
			countNext(app.tickTime)
		});
		e.stopPropagation();
	});

	app.showCountdown = function () {
	    endTime = new Date() * 1 + (countdown + 0.5) * 1000;
		$('.countdown .secs span', page).html(countdown);
		$('.countdown', page).addClass('fade in').trigger('page:in');
	};
	app.dismissCountdown = function () {
		clearInterval(countdownAnimate);
		$('.countdown', page).removeClass('in');
	};
	$(window).on('mousemove', function () {
	    countNext(app.tickTime)
	});

	app.tickTime = tickTime;
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
	location.href = page + '.aspx';
}
var print = 0;
function countNext(sec) {
    clearTimeout(app.tickTimeout);
    var st= new Date*1;
	app.tickTimeout = setTimeout(function () {
	    app.showCountdown();
	    clearInterval(print);
	}, sec * 1000);
	clearInterval(print);
	print = setInterval(function () {
	    console.log('idle,', Math.floor((new Date * 1 - st) / 1000));
	}, 1000);
	console.log('sec', sec);
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
