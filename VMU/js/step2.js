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
        url: $('#ServerIP').val()+"Login_Switch.aspx",
        //url: "http://localhost/E-Service/Login_Switch.aspx",
        processData: false,
        type: "POST",
        data: JSON.stringify(theJSONObject)
    });
    //alert(trigger_status);

	$('#yes', page).on('click', function () {
	    //goto('step2');
	    location.href="vmu_amcard.aspx";
	});
	$('#no', page).on('click', function () {
	    location.href="vmu_pnum.aspx";
	});

    //VMU012
    ////����˼Ƭ���
	app.tickTime = 120;
    ////�Ĥ@���n�˼ƪ����� 20
	countNext(120);
    //-------------
};

//	var selectTimeout = app.selectTimeout;
//	app.tickTimeout = 120;
//	function next(sec) {
//	    $('.countdown').hide();
//		clearTimeout(selectTimeout);
//		selectTimeout = setTimeout(function () {
		    
//		    //var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Trigger_Status: 0 };
//		    //var jqxhr = $.ajax({
//		    //    url: $('#ServerIP').text()+"Login_Switch.aspx",
//		    //    //url: "http://localhost/E-Service/Login_Switch.aspx",
//		    //    processData: false,
//		    //    type: "POST",
//		    //    data: JSON.stringify(theJSONObject)
//		    //});


//		    $('.countdown').show();
//			app.showCountdown();
//		}, sec * 1000);
//	}
//	next(app.tickTimeout);
//};
//# sourceMappingURL=step2.js.map