/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-12 16:26:11
*/

'use strict';

$(function(){
	//$.messager.alert(title, msg, icon, fn);
	// $.messager.alert('警告', '这是一个警告框', 'warning', function(){
	// 	alert('警告框');
	// });

	//$.messager.confirm(title, msg, fn);
	// $.messager.confirm('确认框', '确认删除吗？', function(flag){
	// 	if(flag){
	// 		alert("确认...");
	// 	}
	// });

	// $.messager.prompt(title, msg, fn);
	// $.messager.prompt('提示框', '请输入', function(val){
	// 	alert('你输入的是：' + val);
	// });

	//options:title, msg, text, interval,
	// $.messager.progress({
	// 	title:'执行中...',
	// 	msg:'努力上传中...',
	// 	text:'{value}%',
	// 	interval:100,
	// });

	//method:bar, close
	//console.log($.messager.progress('bar'));
	//$.messager.progress('close');

	$.messager.show({
		title:'我的消息',
		timeout:4000,//如果定义为0，消息窗体将不会自动关闭，除非用户关闭他。如果定义成非0的树，消息窗体将在超时后自动关闭
		showType:'show',//定义将如何显示该消息。可用值有：null,slide,fade,show。默认：slide。
		showSpeed:600,//定义窗口显示的过度时间。默认：600毫秒。
		width:250,
		height:100,
		style:{//定义消息窗体的自定义样式

		},
	})
});