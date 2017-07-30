/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-19 11:31:25
*/

'use strict';

$(function(){
	$("#tt").tree({
		animate:true,//定义节点在展开或折叠的时候是否显示动画效果
		checkbox:true,//定义是否在每一个节点之前都显示复选框
		lines:true,//定义是否显示树控件上的虚线
		dnd:true,//定义是否启用拖拽功能
		url:'',
		data:[{
			id:1,
			text:'系统管理',
			state: 'closed',
			children:[{
					text:'会员管理',
					children:[
						{
							text:'新增会员'
						},{
							text:'删除会员'
						}]
				},
				{
					text:'更新信息',
				},{
					text:'程序信息'
				}
			]
		},{
			id:2,
			text:'文件目录',
			state: 'closed',
			children:[
				{
					text:'C盘'
				},{
					text:'D盘'
				},{
					text:'E盘'
				},{
					text:'F盘'
				},{
					text:'G盘'
				}
			]
		}]
	});
	
});