/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 16:59:10
*/

'use strict';

$(function(){
	$("#box").slider({
		width:400,
		height:300,
		mode:'h',//声明滚动条类型,默认为h,即水平，v为垂直
		rule:[0,'|',25,'|',50,'|',75,'|',100],
		showTip:true,
		min:0,
		max:100,
		step:5,//步长

		tipFormatter:function(value){//该函数用于格式化滑动条。返回的字符串值将显示提示。
			return value + "%";
		},
		onChange:function(newValue, oldValue){
			$("#text").css('font-size', newValue);
			$("#font").val(newValue);
		}
	});
});