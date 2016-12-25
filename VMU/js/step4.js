'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, goto */

app.partial.step4 = function (page) {

    $(document).ready(function () {
        
        //var url = location.search;
         var url = location.search.replace("?UserName=", "").replace("?", "");

         var url = window.location.toString(); //取得當前網址
         var str = ""; //參數中等號左邊的值
         var str_value = ""; //參數中等號右邊的值
         if (url.indexOf("?") != -1) {
             //如果網址有"?"符號
             var ary = url.split("?")[1].split("&");
             //取得"?"右邊網址後利用"&"分割字串存入ary陣列 ["a=1","b=2","c=3"]
             for (var i in ary) {
                 //取得陣列長度去跑迴圈，如:網址有三個參數，則會跑三次
                 str = ary[i].split("=")[0];
                 //取得參數"="左邊的值存入str變數中
                 if (str == "UserName") {
                     //若str等於想要抓取參數 如:b
                     //str_value = decodeURI(ary[i].split("=")[1]);
                     //取得b等號右邊的值並經過中文轉碼後存入str_value
                     //VMU002
                     //old
                     //str_value = unescape(ary[i].split("=")[1].replace(/\\/g, "%"));
                     //new
                     str_value = unescape(ary[i].split("=")[1].replace(/\\/g, "%") + "  夥伴，");
                     //-------------------
                 }
             }
         }
        //$("#NameSpan").text(zhName.toString());
        //VMU002
        //old
        //$("#NameSpan").text(str_value);
        //new
        // var Text = "  夥伴，你好\n歡迎來到ARTISTRY化妝魔鏡";
         //$("#NameSpan").text(str_value + Text.toString());
         document.getElementById("NameSpan").innerHTML = str_value + "  您好<br />歡迎來到ARTISTRY化妝魔鏡";
         //document.getElementById("NameSpan1").innerHTML = str_value ;
        //---------------
        //alert(name);



    });




	var timeout = 0;
	$('.gohome', page).on('click', function () {
	    
	        var theJSONObject = { DeviceIP: $('#DeviceIPLabel').text(), Leave_Type: '1', Leave_Method: '1', Leave_Page: 'vmu_welcome.aspx' };
	        var jqxhr = $.ajax({
	            url: $('#ServerIP').val()+"Device_Status_Report.aspx",
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
		    location.href = "vmu_agreement.aspx";
    //VMU002
    //old
    //  }, 5000);
    //new
		}, 3000);
	});



};
//# sourceMappingURL=step4.js.map
