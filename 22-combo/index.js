/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 11:45:37
*/

'use strict';

$(function(){
	$("#box").combo({
		//required:true,
		width:100,
		editable:false,//是否可以直接输入文本
		onShowPanel:function(){

		},
		onHidePanel:function(){

		},
		onChange:function(newValue, oldValue){
			
		}
	});

	$("#food").appendTo($("#box").combo('panel'));

	$("#food input").click(function(){
		var v = $(this).val();
		var s = $(this).next('span').text();
		$("#box").combo('setValue', v).combo('setText', s).combo('hidePanel');
	});
});