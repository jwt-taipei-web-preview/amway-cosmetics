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

         var url = window.location.toString(); //���o��e���}
         var str = ""; //�ѼƤ��������䪺��
         var str_value = ""; //�ѼƤ������k�䪺��
         if (url.indexOf("?") != -1) {
             //�p�G���}��"?"�Ÿ�
             var ary = url.split("?")[1].split("&");
             //���o"?"�k����}��Q��"&"���Φr��s�Jary�}�C ["a=1","b=2","c=3"]
             for (var i in ary) {
                 //���o�}�C���ץh�]�j��A�p:���}���T�ӰѼơA�h�|�]�T��
                 str = ary[i].split("=")[0];
                 //���o�Ѽ�"="���䪺�Ȧs�Jstr�ܼƤ�
                 if (str == "UserName") {
                     //�Ystr����Q�n����Ѽ� �p:b
                     //str_value = decodeURI(ary[i].split("=")[1]);
                     //���ob�����k�䪺�Ȩøg�L������X��s�Jstr_value
                     //VMU002
                     //old
                     //str_value = unescape(ary[i].split("=")[1].replace(/\\/g, "%"));
                     //new
                     str_value = unescape(ary[i].split("=")[1].replace(/\\/g, "%") + "  �٦�A");
                     //-------------------
                 }
             }
         }
        //$("#NameSpan").text(zhName.toString());
        //VMU002
        //old
        //$("#NameSpan").text(str_value);
        //new
        // var Text = "  �٦�A�A�n\n�w��Ө�ARTISTRY�Ƨ��]��";
         //$("#NameSpan").text(str_value + Text.toString());
         document.getElementById("NameSpan").innerHTML = str_value + "  �z�n<br />�w��Ө�ARTISTRY�Ƨ��]��";
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
