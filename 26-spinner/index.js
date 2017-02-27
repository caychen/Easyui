/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 16:08:37
*/

'use strict';

$(function(){
	$("#box").spinner({
		required:true,
		increment:10,//在点击微调按钮的时候的增量值。
		//editable:false,//是否可以手动编辑数值

		spin:function(down){//'down'参数对应用户点击的向下按钮,true为向下，false为向上
			//alert(down);
		},

		onSpinUp:function(){
			$("#box").spinner('setValue', parseInt($("#box").spinner('getValue')) + 1);
		},
		onSpinDown:function(){
			$("#box").spinner('setValue', parseInt($("#box").spinner('getValue')) - 1);
		},
	});
});