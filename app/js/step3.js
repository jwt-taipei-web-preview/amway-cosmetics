'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */
app.partial.step3 = function(page){
	var phone = '';

	$('.key', page).on('click', function(){
		phoneUpdate($(this).attr('data-key'));
	});
	$('.submit', page).on('click', function(){
		if(/\d{10}/.test($('input').val())){
			goto('step4');
		}else{
			showAlert();
		}
	});
	$('.alert', page).on('page:in', function(){
		$('.dismiss, .ok', page).one('click', function(){
			dismissAlert();
		});
	});

	$(page).on('page:in', function(){
		phone = '';
		$('.field input', page).val('');
	});
	function phoneUpdate(key){

		if(phone.length < 10){
			switch(key){
				case '1':
				case '2':
				case '3':
				case '4':
				case '5':
				case '6':
				case '7':
				case '8':
				case '9':
				case '0':
					phone += key;
					break;

			}
		}
		switch(key){
			case 'x':
				phone = phone.substr(0,phone.length - 1);
				break;
			case 'clear':
				phone = '';
				break;

		}
		$('.field input').val(phone);
	}
	function showAlert(){
		$('.alert', page).addClass('in')
			.trigger('page:in');
	}
	function dismissAlert(){
		$('.alert', page).removeClass('in');
	}
	var selectTimeout = app.selectTimeout;
	function next(sec){
		clearTimeout(selectTimeout);
		selectTimeout = setTimeout(function(){
			app.showCountdown();
		}, sec * 1000);
	}
	next(app.tickTimeout);
};
