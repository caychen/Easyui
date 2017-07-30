/*
* @Author: Cay
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-03-15 16:18:39
*/

'use strict';

//扩展datagrid的editor编辑器
$.extend($.fn.datagrid.defaults.editors, {    
    datetimebox: {    
        init: function(container, options){    
            var input = $('<input type="text"/>').appendTo(container);    
            options.editable = false;
            input.datetimebox(options);
            return input;    
        },    
        getValue: function(target){    
            return $(target).datetimebox('getValue');    
        },    
        setValue: function(target, value){    
            $(target).datetimebox('setValue',value);    
        },    
        resize: function(target, width){    
            $(target).datetimebox('resize', width);    
        },
        destroy: function(target){
        	$(target).datetimebox('destroy');
        }
    }    
});  


$(function(){
	$("#data").datagrid({
		width:600,
		title:'用户列表',
		iconCls:'icon-search',
		loadMsg:'加载中...',
		pagination:true,
		url:'content.json',//需要服务器配合
		columns:[[
			{
				title:'帐号',
				field:'user',
				width:200,
				
			},
			{
				title:'邮件',
				field:'email',
				width:200,
				editor:{
					type:'validatebox',
					options:{
						validType:'email',
						required:true, 
					},
				},
			},
			{
				width:200,
				title:'注册时间',
				field:'date',
				editor:{
					type:'datetimebox',
					options:{
						required:true, 
					},
				},
			}
		]]
	});

	$("a").on('click', function(){
		$("#data").datagrid('insertRow',{
			index:0,
			row:{

			},
		});

		$("#data").datagrid('beginEdit', 0);
	});
});