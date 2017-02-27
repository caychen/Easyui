/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 11:23:11
*/

'use strict';

$(function(){

	//自定义验证规则
	$.extend($.fn.validatebox.defaults.rules, {
		minLength:{
			validator:function(value, param){
				return value.length >= param[0];
			},
			message:'请输入不小于{0}的字符'//错误提示信息
		}
	});

	$("#email").validatebox({
		required:true,
		//validType: 'email',//验证是否是email格式
		//validType:'url',//验证是否是url格式
		//validType:'length[2,10]',//验证输入的文本长度是否在2~10位
		// validType:'remote["url地址","输入的值的name"]',
		//validType:['email', 'length[2,10]'],//多个验证规则的数组

		validType:'minLength[5]',//此处[]里的数值就会传给自定义验证规则的param参数，[]中可以是数组

		//missingMessage:'请输入内容',//当文本框未填写时出现的提示信息。
		//invalidMessage:'输入错误',//当文本框的内容被验证为无效时出现的提示
		novalidate:false,//是否关闭验证
	});
});