/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-21 15:52:19
*/

'use strict';

$(function(){

	var buttons = $.extend([], $.fn.datebox.defaults.buttons);
	buttons.splice(1, 0, {
		text: '确定',
		handler: function(target){
			alert('确定');
		}
	});


	$("#box").datebox({
		panelWidth:200,
		panelHeight:200,
		currentText:'今天',
		closeText:'关闭',

		//buttons:buttons,//在日历下面的按钮
		//
		formatter:function(date){
			return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		},
		// parser:function(date){

		// }

		// onSelect:function(date){
		// 	alert(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
		// }

	});

	//calendar方法：获取日历对象
	$("#box").datebox('calendar').calendar({firstDay:1});

	$(document).click(function(){
//		alert($("#box").val());
	});
});