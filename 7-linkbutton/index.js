/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-11 14:12:43
*/

'use strict';

$(function(){
	$("#btn1").linkbutton({
		id:'pox',//重新修改id
		toggle:true,
		//selected:true,//默认已经被选中
		group:'gender',//指定相同组名称的按钮同属于一个组，类似radio单选效果
		//plain: true,//为true时显示简洁效果
		text:'文字',//修改按钮文本
		iconCls:'icon-add',
		iconAlign:'right',//将图标放在指定的位置
	});

	$("#btn2").linkbutton({
		//id:'pox',//重新修改id
		toggle:true,
		group:'gender',
	});
});