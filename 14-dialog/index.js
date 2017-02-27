/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-12 16:06:14
*/

'use strict';

$(function(){
	$("#box").dialog({
		width: 400,    
		height: 200,

		toolbar:[{
			text:'编辑',
			iconCls:'icon-edit',
			handler:function(){
				alert("edit...");
			},
		},{
			text:'帮助',
			iconCls:'icon-help',
			handler:function(){
				alert("help...");
			},
		}],
		buttons:[{
			text:'确定',
			iconCls:'icon-ok',
			handler:function(){
				alert("确定");
			},
		},{
			text:'取消',
			iconCls:'icon-cancel',
			handler:function(){
				alert("取消");
			},
		}],
		onClose:function(){
			alert("关闭...");
		}
	});
});