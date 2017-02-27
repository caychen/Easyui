/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 16:17:26
*/

'use strict';

$(function(){
	$("#box").numberspinner({
		value:1,//设置默认值
		increment:5,//每次点击的增量
		min:10,//最小值
		max:500,//最大值
		
	});
});