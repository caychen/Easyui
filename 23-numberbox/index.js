/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 14:41:13
*/

'use strict';

$(function(){
	$("#box").numberbox({
		precision:2,//精度
		//decimalSeparator:'',//十进制字符分隔数字的整数和小数部分,默认为点
		prefix:'',//前缀
		suffix:'',//后缀
		// formatter:function(value){//用于格式化数值的函数。返回字符串值以显示到输入框中。
		// 	return value + '111';
		// },
		// parser:function(s){//用于解析字符串的函数。返回数值。

		// }
		onChange:function(newValue, oldValue){
			
		}
	});
});