/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-12 10:50:17
*/

'use strict';

$(function(){
	$("#box").accordion({
		width:400,
		height:300,
		//animate:false,//是否定义在展开和折叠的时候是否显示动画效果
		//multiple:true,//是否同时展开多个面板
		selected:1,//默认选中的面板索引号,从0开始

		onAdd:function(title, index){

		},
		onBeforeRemove:function(title, index){

		},
		onRemove:function(title, index){

		},
	});



	$(document).click(function(){

		$("#box").accordion('add',{
			title:'新面板',
			content:'内容',
		});
		$("#box").accordion('remove', 1);//移除指定索引的分类面板
	});
});