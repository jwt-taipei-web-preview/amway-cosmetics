'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */

app.partial.step3 = function (page) {
    
 
    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Trigger: 0 };
    var jqxhr = $.ajax({
        url: $('#ServerIP').val()+"Login_Switch.aspx",
        //url: "http://localhost/E-Service/Login_Switch.aspx",
        processData: false,
        type: "POST",
        data: JSON.stringify(theJSONObject)
    });

	var phone = '';
	
	$('.key', page).on('click', function () {
		phoneUpdate($(this).attr('data-key'));
	});
	$('.submit', page).on('click', function () {
	    if (/^09\d{8}/.test($('.field input').val())) {
	        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Phone: $('.field input').val() };
	        var jqxhr = $.ajax({
	            url: $('#ServerIP').val()+"Input_Pnum.aspx",
	            //url: "http://localhost/E-Service/Input_Pnum.aspx",
	            processData: false,
	            type: "POST",
	            data: JSON.stringify(theJSONObject)
	        });
	        
		    location.href="vmu_welcome.aspx";
	    } else {
	        
	       // $('.alert').show();
			showAlert();
		}
	});
	
	$('.alert', page).on('page:in', function () {
        //VMU008
        //new
	    $('#PhoneErro').show();
        //-------------
		$('.dismiss, .ok', page).one('click', function () {
			dismissAlert();
		});
	});

	$(page).on('page:in', function () {
    //VMU001
    //old
		//phone = '';
		//$('.field input', page).val('');
    //new
		phone = '09';
		$('.field input', page).val('09');
	});
	function phoneUpdate(key) {

		if (phone.length < 10) {
			switch (key) {
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
		switch (key) {
			case 'x':
				phone = phone.substr(0, phone.length - 1);
				break;
            //VMU001
            //old
			//case 'clear':
			//    	phone = '';				
			//	break;
		}
		$('.field input').val(phone );
	}
	function showAlert() {
		$('.alert', page).addClass('in').trigger('page:in');
	}
	function dismissAlert() {
		$('.alert', page).removeClass('in');
	}
    //VMU012
    ////办计计
	app.tickTime = 60;
    ////材Ω璶计计 20
	countNext(60);
    //----------------------

};
//# sourceMappingURL=step3.js.map
