'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app */

app.partial.step6 = function (page) {

    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), IEC: "VMU" };
    var jqxhr = $.ajax({
        url: $('#ServerIP').val() + "IEC_Merge.aspx",
        // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
        processData: false,
        type: "POST",
        data: JSON.stringify(theJSONObject)
    });
    
    //VMU012
    ////办计计
    app.tickTime = 315360000000;
    ////材Ω璶计计 20
    countNext(315360000000);
    //----------------------

    $("#rate5").bind('click', function () {
        var theJSONObject1 = { DeviceIP: $('#DeviceIPLabel').text(), Like: '5' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "VMU_Like.aspx",
            // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject1)
        });
    
        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '0', Leave_Method: '0', Leave_Page: 'Null' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "Device_Status_Report.aspx",
            //url: "http://localhost/E-Service/Device_Status_Report.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject)
        });
        //VMU004
        //old
        //document.location.href = 'index.aspx';
        //new
        timeout = setTimeout(function () {        
        document.location.href = 'index.aspx';
        }, 3000);
        //------------
    })
    $("#rate4").bind('click', function () {
        var theJSONObject1 = { DeviceIP: $('#DeviceIPLabel').text(), Like: '4' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "VMU_Like.aspx",
            // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject1)
        });
        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '0', Leave_Method: '0', Leave_Page: 'Null' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "Device_Status_Report.aspx",
            //url: "http://localhost/E-Service/Device_Status_Report.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject)
        });
        //VMU004
        //old
        //document.location.href = 'index.aspx';
        //new
        timeout = setTimeout(function () {
            document.location.href = 'index.aspx';
        }, 3000);
    })
    $("#rate3").bind('click', function () {
        var theJSONObject1 = { DeviceIP: $('#DeviceIPLabel').text(), Like: '3' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "VMU_Like.aspx",
            // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject1)
        });
        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '0', Leave_Method: '0', Leave_Page: 'Null' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "Device_Status_Report.aspx",
            //url: "http://localhost/E-Service/Device_Status_Report.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject)
        });
        //VMU004
        //old
        //document.location.href = 'index.aspx';
        //new
        timeout = setTimeout(function () {
            document.location.href = 'index.aspx';
        }, 3000);
    })
    $("#rate2").bind('click', function () {
        var theJSONObject1 = { DeviceIP: $('#DeviceIPLabel').text(), Like: '2' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "VMU_Like.aspx",
            // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject1)
        });
        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '0', Leave_Method: '0', Leave_Page: 'Null' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "Device_Status_Report.aspx",
            //url: "http://localhost/E-Service/Device_Status_Report.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject)
        });
        //VMU004
        //old
        //document.location.href = 'index.aspx';
        //new
        timeout = setTimeout(function () {
            document.location.href = 'index.aspx';
        }, 3000);
    })
    $("#rate1").bind('click', function () {
        var theJSONObject1 = { DeviceIP: $('#DeviceIPLabel').text(), Like: '1' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "VMU_Like.aspx",
            // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject1)
        });
        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '0', Leave_Method: '0', Leave_Page: 'Null' };
        var jqxhr = $.ajax({
            url: $('#ServerIP').val() + "Device_Status_Report.aspx",
            //url: "http://localhost/E-Service/Device_Status_Report.aspx",
            processData: false,
            type: "POST",
            data: JSON.stringify(theJSONObject)
        });
        //VMU004
        //old
        //document.location.href = 'index.aspx';
        timeout = setTimeout(function () {
            document.location.href = 'index.aspx';
        }, 3000);
    })
    //VMU014
	//var selectTimeout = app.selectTimeout;
	//function next(sec) {
	//	clearTimeout(selectTimeout);
	//	selectTimeout = setTimeout(function () {

	//	    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '1', Leave_Method: '2', Leave_Page: 'vmu_agreement.aspx' };
	//	    var jqxhr = $.ajax({
	//	        url: $('#ServerIP').val() + "Device_Status_Report.aspx",
	//	        //url: "http://localhost/E-Service/Device_Status_Report.aspx",
	//	        processData: false,
	//	        type: "POST",
	//	        data: JSON.stringify(theJSONObject)
	//	    });


	//		app.showCountdown();
	//	}, sec * 1000);
	//}
    //next(app.tickTimeout);
    //-------------------
};
//# sourceMappingURL=step6.js.map
