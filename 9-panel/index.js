/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-11 15:19:20
*/

'use strict';

$(function(){
	$("#panel").panel({
		//id:'pox',//修改id
		title:'Panel',//面板标题显示文本
		iconCls:'icon-search',//显示在面板左上角,
		width:400,
		height:300,
		collapsible:true,//定义是否显示可折叠按钮。
		minimizable:true,//显示最小化
		maximizable:true,//显示最大化
		closable:true,//显示关闭按钮

		//tools：使用选择器，也可以使用数组(每个元素都包含'iconCls'和'handler'属性)
		//tools:'#tt',
		tools: [{
			iconCls:'icon-help',
			//如果需要定义事件的话，则需要定义handler属性
			handler:function(){
				alert('Help...');
			}
			},{
				iconCls:'icon-sum',
			}
		],

		//href:'url',//获取数据的url地址

		loadingMessage:'加载中...',//在加载远程数据的时候在面板内显示一条消息。
		extractor:function(data){//定义如何从ajax应答数据中提取内容，返回提取数据。
			return data;
		},
	});
});