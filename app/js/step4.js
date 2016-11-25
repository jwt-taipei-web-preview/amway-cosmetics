'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */
app.partial.step4 = function(page){
	var timeout = 0;
	$('.gohome', page).on('click', function(){
		clearTimeout(timeout);
		goto('index');
	});
	$(page).on('page:in', function(e){
		timeout = setTimeout(function(){
			goto('step5');
		}, 5000);
	});
};
