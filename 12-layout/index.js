/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-12 11:12:34
*/

'use strict';

$(function(){
	$(document).click(function(){

		//$("#box").layout('collapse', 'west');//折叠
		//$("#box").layout('expand', 'west');//折叠
		//增加布局
		$("#box").layout('add',{
			region:'center',
			title:'中',
			
			collapsible:true,
		});
	});
});