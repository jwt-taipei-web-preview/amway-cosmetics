'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */

app.partial.step2 = function (page) {
	$('#yes', page).on('click', function () {
		goto('step2');
	});
	$('#no', page).on('click', function () {
		goto('step3');
	});
	var selectTimeout = app.selectTimeout;
	function next(sec) {
		clearTimeout(selectTimeout);
		selectTimeout = setTimeout(function () {
			app.showCountdown();
		}, sec * 1000);
	}
	next(app.tickTimeout);
};
//# sourceMappingURL=step2.js.map
