/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 10:50:06
*/

'use strict';

$(function(){
	$("#search").searchbox({
		menu:'#box',
		width:300,
		prompt:'请输入关键字',

		//在用户按下搜索按钮或回车键的时候调用searcher函数
		searcher:function(value, name){
			alert(value + "-" + name);
		},
	});

	//menu:返回搜索类型菜单对象
	$("#search").searchbox('menu').menu('setIcon',{
		//在指定的菜单对象上添加小图标
		target:$("#search").searchbox('menu').menu('findItem', '电影频道').target,
		iconCls:'icon-add'
	});

	//设置当前选择搜索类型，需要在menu上添加name属性
	$("#search").searchbox('selectName', 'movie');
});