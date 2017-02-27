/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-11 10:19:37
*/

'use strict';

$(function(){

	$.fn.droppable.defaults.disabled = true;//设置默认的disabled为true

	$("#dd").droppable({
		accept:'#box',
		disabled: false,
		//只触发一次
		//拖进去之后当前颜色变为blue
		onDragEnter:function(e, source){
			$(this).css('background', 'blue');
			console.log('enter...');
		},

		//一旦进入之后，会不停的触发该事件
		onDragOver:function(e, source){
			$(this).css('background', 'yellow');
			console.log("over...");
		},

		//离开的时候触发
		onDragLeave:function(e, source){
			$(this).css('background', 'green');
		},

		//鼠标左键弹起之后，元素被放下时触发
		onDrop:function(e, source){
			$(this).css('background', 'red');
		}
	})

	$("#box").draggable({
		
	});

});