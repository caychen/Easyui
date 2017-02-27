/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-02-20 13:25:16
*/

'use strict';

$(function(){
	$("#box").window({
		width:400,
		height:300,
		title:'窗口',
		closed:true,

	});

	// $(document).click(function(){
	// 	$("#box").window('move',{
	// 		left:0,
	// 		top:0,
	// 	});
	// });

	// $(document).dblclick(function(){
	// 	$("#box").window('hcenter');
	// });
	
	$("button").on('click', function(){
		$("#box").window('open');
	});
});