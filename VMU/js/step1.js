'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */

app.partial.step1 = function (page) {

    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Trigger: 1 };
    var jqxhr = $.ajax({
        url: $("#ServerIP").val() + "Login_Switch.aspx",
        //url: "http://localhost/E-Service/Login_Switch.aspx",
        processData: false,
        type: "POST",
        data: JSON.stringify(theJSONObject)
    });

    $('#yes', page).on('click', function () {
        //goto('step2');
        location.href = "vmu_amcard.aspx";
    });
    $('#no', page).on('click', function () {
        //goto('step3');
        location.href = "vmu_pnum.aspx";
    });


    ////办计计
    app.tickTime = 20;
    app.Leave_PageUrl = 'vmu_member.aspx';
    ////材Ω璶计计 20
	countNext(20);



	//var selectTimeout = app.selectTimeout;
	//function next(sec) {
	//    app.tickTimeout = 20;
	//	clearTimeout(selectTimeout);
	//	selectTimeout = setTimeout(function () {
		    
	//	    $('.countdown').show();
	//		app.showCountdown();
	//	}, sec * 1000);


	//}
	//next(app.tickTimeout);
};
//# sourceMappingURL=step1.js.map
