/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-19 15:23:50
*/

'use strict';

$(function(){

	$("#form").form({
		url:'index.json',//需要放在服务器中运行

		onSubmit: function(param){//在提交之前触发，返回false可以终止提交。
			//修改提交的数据
			param.telephone = "1234567890";
			return $("#form").form('validate');//做表单字段验证，当所有字段都有效的时候返回true
    	}, 
    	success:function(data){//在表单提交成功以后触发。
    		alert(data);
    	} ,
    	onBeforeLoad:function(param){//在请求加载数据之前触发。返回false可以停止该动作

    	},
    	onLoadSuccess:function(data){//在表单数据加载完成后触发。

    	},
    	onLoadError:function(){//在表单数据加载出现错误的时候触发。

    	},
	});

	//submit方法：
	//也可以为form添加一个参数为'submit'
	// $("#form").form('submit', {

	// });

	//页面加载的时候触发,直接加载数据
	// $("#form").form('load', {
	// 	name:'Cay',
	// 	email:'123@qq.com',
	// });

	//页面加载的时候触发,加载远程服务器数据,需要放在服务器中运行
	$("#form").form('load', 'load.json');
});