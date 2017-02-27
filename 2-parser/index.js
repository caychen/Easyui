/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-10 16:35:12
*/

'use strict';

$(function(){
	//参数为空的时候，表示渲染所有的组件ui
	$.parser.parse();

	//指定渲染某个组件时需要传对应的参数, 注意: 必须设置父类容器才可以被渲染
	//$.parser.parse("#dialog");
});

//
//$.parser.auto = false;
$.parser.onComplete = function(){
	alert("UI解析完毕！");
};