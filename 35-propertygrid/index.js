/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-19 11:31:25
*/

'use strict';

$(function(){

	$("#tb").propertygrid({
		url:'',
		showHeader:false,
		showGroup:true,//定义是否显示属性分组
		/*作为一个属性行，以下字段是必须的：
			name：字段名称。
			value：字段值。
			group：分组字段值。
			editor：在编辑属性值的时候使用的编辑器对象。
		*/
		data:[
		{
			name:'C++',
			value:'C++11',
			group:'后端',
			editor:'text',
		},{
			name:'Bootstrap',
			value:'3.7',
			group:'前端',
			editor:'text',
		},{
			name:'Java',
			value:'1.8',
			group:'后端',
			editor:'text',
		},{
			name:'Extjs',
			value:'6.0',
			group:'前端',
			editor:'text',
		}
		]
	});

	$("#btn1").on('click', function(){
		$("#tb").propertygrid('collapseGroup');//全部收缩
	});

	$("#btn2").on('click', function(){
		$("#tb").propertygrid('collapseGroup', 1);//收缩index组(从0开始)
	});

	$("#btn3").on('click', function(){
		$("#tb").propertygrid('expandGroup');//收缩index组(从0开始)
	});

	$("#btn4").on('click', function(){
		$("#tb").propertygrid('expandGroup', 1);//收缩index组(从0开始)
	});
	
});