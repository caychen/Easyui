/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 16:30:50
*/

'use strict';

$(function(){
	$("#box").timespinner({
		showSeconds:true,
		value:'00:00:00',
		highlight:2,//初始选中的字段 0=小时,1=分钟


	});

	//设置
	$("#box").timespinner('setValue', '17:30:34');

	$(document).click(function(){
		console.log($("#box").timespinner('getHours'));
		console.log($("#box").timespinner('getMinutes'));
		console.log($("#box").timespinner('getSeconds'));
	});
});