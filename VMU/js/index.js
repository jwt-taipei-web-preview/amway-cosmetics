'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */

app.partial.index = function (page) {

   
    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Trigger: 1 };
    var jqxhr = $.ajax({
        url: $("#ServerIP").val() + "Login_Switch.aspx",
        //url: "http://localhost/E-Service/Login_Switch.aspx",
        processData: false,
        type: "POST",
        data: JSON.stringify(theJSONObject)
    });


	$('a', page).on('click', function () {
	    //goto('vmu_member');
	    location.href='vmu_member.aspx';
	});
};
//# sourceMappingURL=index.js.map
