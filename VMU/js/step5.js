'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto, TimelineMax */

app.partial.step5 = function (page) {
	// $('.terms article').niceScroll();
    //VMU009
    //new
	//$('.terms article').mCustomScrollbar();
    //------------------------
	// $('.terms article').on('mousewheel', function(e){
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// 	console.log(e);
	// });
	var selectTimeout = 0;
	$('.agree, .disagree').on('click', function () {
		$(this).addClass('checked').siblings().removeClass('checked');
        //VMU009
        //new
		next(3);
        //-------------
	});
	// $(page).on('page:in', function(){
	// next(40);
    // });

	$('.agree').on('click', function () {
       
	    
	   // alert("56")	  
	    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Personal_Agree: '1' };
	    var jqxhr = $.ajax({
	        url:$('#ServerIP').val()+ "VMU_Upload_AGM.aspx",
	       // url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",
	        processData: false,
	        type: "POST",
	        data: JSON.stringify(theJSONObject)
	    });   

	});

	$('.disagree').on('click', function () {
	    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Personal_Agree: '0' };
	    var jqxhr = $.ajax({
	        url:$('#ServerIP').val()+ "VMU_Upload_AGM.aspx",
	        //url: "http://localhost/E-Service/VMU_Upload_AGM.aspx",	        
	        processData: false,
	        type: "POST",
	        data: JSON.stringify(theJSONObject)
	    });

	    
	});
    //VMU015
    ////办计计
	app.tickTime = 120;
    ////材Ω璶计计 20
	countNext(120);
    //-----------------

	//$('.countdown').hide();
	//$('.countdown', page).on('page:in', function () {
	//    $('.countdown').show();
	//	var tl = new TimelineMax({
	//		paused: true,
	//		onComplete: function onComplete() {			 
			    
	//		    var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: "1", Leave_Method: "2", Leave_Page: "vmu_agreement.aspx" };
	//		    var jqxhr = $.ajax({
	//		        url:$('#ServerIP').val()+ "Device_Status_Repor.aspx",
	//		        //url: "http://localhost/E-Service/Device_Status_Repor.aspx",
	//		        processData: false,
	//		        type: "POST",
	//		        data: JSON.stringify(theJSONObject)
	//		    });  

			 
	//		    location.href = "index.aspx";
	//		}
	//	});
	
	//	var sec = 20;
	//	for (var i = 20; i > 0; i--) {
		    
	//		tl.addPause('+=' + 1, function () {
	//			sec--;
	//			if (sec >= 0) {

	//				$('.countdown .secs span', page).html(sec);
	//			}
	//			tl.play();
	//		});
	//	}
	//	tl.play();
	//	$('.dismiss, .ok', page).one('click', function () {
	//		dismissCountdown();
	//		tl.stop();
	//		next(3);
	//	});
	//});
	
    //var selectTimeout = app.selectTimeout;
    //VMU009
    //app.tickTimeout = 120;
    //---------------
	//function next(sec) {
	//    clearTimeout(selectTimeout);
	//    selectTimeout = setTimeout(function () {
	//        showCountdown();
	//    }, sec * 1000);
	//}
	//next(app.tickTimeout);

	//function showCountdown() {
	//	$('.countdown .secs span', page).html(20);
	//	$('.countdown', page).addClass('in').trigger('page:in');
	//}
	//function dismissCountdown() {
	//	$('.countdown', page).removeClass('in');
	//}

	//window.showCountdown = showCountdown;
};
//# sourceMappingURL=step5.js.map
