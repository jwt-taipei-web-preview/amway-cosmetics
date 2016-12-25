'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */

app.partial.step4 = function (page) {

    var timeout = 0;
    $('.gohome', page).on('click', function () {

        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '1', Leave_Method: '1', Leave_Page: 'vmu_welcome.aspx' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "Device_Status_Report.aspx",
            //url: "http://localhost/E-Service/Device_Status_Report.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject)
        });

        clearTimeout(timeout);
        location.href = "index.aspx";

    });
    $(page).on('page:in', function (e) {
        timeout = setTimeout(function () {
            location.href = "virtualmakeup://param?loginid=" + $('#DeviceIPLabel').text().replace(".", "%2E");
            //location.href = "index.aspx";
        }, 1000);       
        timeout = setTimeout(function () {
            location.href = "vmu_agree.aspx";
        }, 5000);
    });



};
//# sourceMappingURL=step4.js.map
