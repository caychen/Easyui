/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-11 10:08:37
*/

'use strict';

$(function(){
	$.fn.draggable.defaults.cursor = 'text';//设置默认值属性值，本例中表示：当前文件所有拖动时的cursor全部设置为text

	$("#box").draggable({
		//revert:true//如果设置为 true，拖动结束后元素将返回它的开始位置
		//cursor：'text',//拖动时的 css 光标
		//handle: '#pox',//只能在指定的句柄的地方可以拖动
		//edge: 20//表示在边框往里edge像素之间不能拖动
		axis:'h',//'v'/'h'：表示只能在指定方向上拖动

		onBeforeDrag:function(e){
			console.log("before...");
		},
		onStartDrag:function(e){
			console.log("start...");
		},
		onDrag:function(e){
			console.log("ing...");
		},
		onStopDrag:function(e){
			console.log("stop...");
		}
	});

	$("#box").draggable('disable');//禁止拖动
	$("#box").draggable('enable');//允许拖动

});