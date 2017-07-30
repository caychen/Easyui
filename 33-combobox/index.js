/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-19 11:31:25
*/

'use strict';

$(function(){
	$("#box1").combobox({
		url:'',
		valueField:'id',
		textField:'name',
		data:[{
			id:1,
			name:'Cay'
		},{
			id:2,
			name:'Amy'
		},{
			id:3,
			name:'Helen'
		}],
	});

	//设置下拉列表框的值
	$("#btn1").on('click', function(){
		$('#box1').combobox('setValue', 2);
	});


	$("#box2").combobox({
		url:'',
		valueField:'id',
		textField:'name',
		groupField:'gender',//指定分组的字段名称
		data:[{
			id:1,
			name:'Cay',
			gender:'male',
		},{
			id:2,
			name:'Amy',
			gender:'male',
		},{
			id:3,
			name:'Helen',
			gender:'male',
		},{
			id:4,
			name:'Cay',
			gender:'female',
		},{
			id:5,
			name:'Amy',
			gender:'female',
		},{
			id:6,
			name:'Helen',
			gender:'female',
		},{
			id:7,
			name:'Cay',
			gender:'female',
		},{
			id:8,
			name:'Amy',
			gender:'female',
		},{
			id:9,
			name:'Helen',
			gender:'female',
		}],
		groupFormatter:function(group){//返回格式化后的分组标题文本，以显示分组项
			return "<span style='color:red'>" + group + "</span>";
		},
		filter: function(q, row){//定义当'mode'设置为'local'时如何过滤本地数据
			var opts = $(this).combobox('options');
			return row[opts.textField].indexOf(q) >= 0;
		}

	});

	//设置下拉列表框的值
	$("#btn2").on('click', function(){
		$('#box2').combobox('setValues', [2,4,5]);
	});
});