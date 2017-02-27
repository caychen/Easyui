/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-02-23 14:09:20
*/

'use strict';

$(function(){
	$("#box").datetimebox({
		showSeconds:false,//是否显示秒，默认为true
	});

	//获取时间微调对象:$("#box").datetimebox('spinner')
	$(document).click(function() {
		console.log($("#box").datetimebox('spinner').timespinner('getHours'));
	});
});