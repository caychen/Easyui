/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-11 13:08:26
*/

'use strict';

$(function(){
	$("#tip").tooltip({
		content:'这是内容提示框.',//content支持html标签
		position:'right',//提示框出现的位置
		trackMouse:true,//提示框是否会随着鼠标移动
		showDelay:500,//提示框显示延时
		hideDelay:500,//提示框隐藏延时
		onShow:function(e){
			//在显示提示框的时候触发。
			//
			//返回tip对象
			var tip = $(this).tooltip('tip');
			console.log(tip);

			var arrow = $(this).tooltip('arrow');
			console.log(arrow);
		},
		onHide:function(e){
			//在隐藏提示框的时候触发。
		},

		//第一次移上去的时候触发一次，如果content不变的话，以后再也不会触发了
		//但可以通过tooltip的update方法来修改content
		onUpdate:function(content){
			alert('内容为：' + content);
		},
		onDestroy:function(){//需要借助destroy方法来触发销毁
			alert('提示框被销毁了...');
		}
	});


	$("#tip").click(function(){
		$(this).tooltip('update', '更新提示框内容');
		$(this).tooltip('destroy');
	});
});