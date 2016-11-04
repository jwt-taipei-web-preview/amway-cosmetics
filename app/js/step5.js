'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto, TimelineMax */
app.partial.step5 = function(page){
	$('.terms').niceScroll();
	var selectTimeout = 0;
	$('.agree, .disagree').on('click', function(){
		$(this).addClass('checked').siblings().removeClass('checked');
		next(3);
	});
	$(page).on('page:in', function(){
		next(40);
	});
	$('.countdown', page).on('page:in', function(){
		var tl = new TimelineMax({
			paused: true,
			onComplete: function(){
				goto('index');
			}
		});
		var sec = 20;
		for(var i=20; i>0; i--){
			tl.addPause('+=' + 1, function(){
				sec--;
				if(sec >= 0){
					$('.countdown .secs span', page).html(sec);
				}
				tl.play();
			});
		}
		tl.play();
		$('.dismiss, .ok', page).one('click', function(){
			dismissCountdown();
			tl.stop();
			next(3);
		});
	});
	function next(sec){
		clearTimeout(selectTimeout);
		selectTimeout = setTimeout(function(){
			if($('.agree.checked').length){
				// goto('step6');
			}else{
				showCountdown();
			}
		}, sec * 1000);
	}

	function showCountdown(){
		$('.countdown .secs span', page).html(20);
		$('.countdown', page).addClass('in')
			.trigger('page:in');
	}
	function dismissCountdown(){
		$('.countdown', page).removeClass('in');
	}

	window.showCountdown = showCountdown;
};
