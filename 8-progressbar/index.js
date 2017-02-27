/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-11 14:35:20
*/

'use strict';

$(function(){
	$("#progressbar").progressbar({
		width: 300,//宽度
		height: 30,//高度
		value: 60,//默认值
		text: '{value}%',//进度条中文本格式

		onChange:function(newValue, oldValue){

		},
	});

	//一秒后设置进度条的值
	setTimeout(function(){
		$("#progressbar").progressbar('setValue', 70);
	}, 1000);

	//动画效果
	setInterval(function(){
		$("#progressbar").progressbar('setValue', $("#progressbar").progressbar('getValue') + 1);
	}, 500);
});