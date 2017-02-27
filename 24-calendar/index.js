/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-13 15:07:37
*/

'use strict';

$(function(){
	$("#box").calendar({
		width:200,
		height:200,
		firstDay:1,//设置一周的第一天，0=星期日、1=星期一
		weeks:['日','一','二','三','四','五','六'],
		months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		formatter:function(date){//日期格式化函数，返回日期值
			return date.getDate();
		},
		styler:function(date){//日历天的样式函数，返回行内样式或CSS样式表的Class名称
			if (date.getDay() == 1){//如果是星期一，则改变css样式
				return 'background-color:#ccc';
				// 函数可以返回预定义的css class和预定义的行内样式
				// return {class:'r1', style:{'color:#fff'}};	
			} else {
				return '';
			}

		},
		onSelect:function(date){//在用户选择一天的时候触发

		},
		onChange(newDate, oldDate){//在用户更改日期的时候触发

		},
		validator:function(date){//验证器函数用于确定是否可以选择日历上的某一天，返回false将阻止选择当前天
			if (date.getDay() == 1) {//如果是星期一，则可以选择，其余不能选
			    return true;
			} else {
				return false;
			}
		}
	});

	//移动到2017年2月14日
	$("#box").calendar('moveTo', new Date(2017, 1, 14));//移动日历到指定日期，并选中
});