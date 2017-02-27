/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 10:16:48
*/

'use strict';

$(function(){
	$("#page").pagination({
		total: 5,//总记录数，在分页控件创建时初始的值
		pageSize:1,//每页显示条数
		pageNumber:1,//当前页数(即页号)
		pageList:[1,2,3,4,5],//每页显示数据的数量的数组

		//自定义按钮选项
		buttons:[{
			iconCls:'icon-add',
			handler:function(){
				alert("add...");
			}
		},'-',{
			iconCls:'icon-edit',
			handler:function(){
				alert("edit...");
			}
		}],
		layout:['first','links','last'],//分页控件布局定义
		displayMsg:'Displaying {from} to {to} of {total} items',//

		//选择新页面的时候触发
		onSelectPage:function(pageNumber, pageSize){
			$("#panel").panel('refresh', '');
		},
		//点击刷新按钮刷新之前触发
		onBeforeRefresh:function(pageNumber, pageSize){

		},
		//刷新之后触发。
		onRefresh:function(pageNumber, pageSize){

		},
		//在页面更改页面大小的时候触发。
		onChangePageSize:function(pageSize){

		},
	});

	$(document).click(function(){
		//刷新并显示分页栏信息
		$("#page").pagination('refresh', {

		});

		$("#page").pagination('select', 2);//选择一个新页面，页面索引从1开始
	})
});