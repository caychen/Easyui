/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-12 17:15:19
*/

'use strict';

$(function(){
	$(document).on({
		contextmenu:function(e){
			e.preventDefault();//禁止默认的右键弹出菜单

			$("#box").menu('show',{
				left:e.pageX,
				top:e.pageY,
			})
		},

	});

	$("#box").menu({
		onShow:function(){
			//alert('显示时触发...');
		},
		onHide:function(){

		},
		onClick:function(item){
			alert(item.text);
		}
	})

	//alert($("#box").menu('getItem', $("#new")).text);

	//设置指定菜单项的文本
	$("#box").menu('setText',{
		target:'#new',
		text:'星星',
	});

	//修改指定菜单项的图标
	$("#box").menu('setIcon', {
		target:'#new',
		iconCls:'icon-add',
	});

	//alert($("#box").menu('findItem', '退出').id);

	$("#box").menu('appendItem', {
		text:'新增',
		iconCls:'icon-add',
		onclick:function(){
			alert('新增');
		},
	});

	//$("#box").menu('removeItem', '#exit');//移除菜单项

	$("#box").menu('disableItem', '#save');//禁用
});