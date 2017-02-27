/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-12 10:29:51
*/

'use strict';

$(function(){
	$("#tab").tabs({
		//width:100,
		//height:100,
		//plain:true,
		//fit:true,
		//border:false,
		
		//tabWidth:300,
		//下面两个属性，只有在tabWidth很大的时候才能看到效果
		//scrollIncrement:50,//选项卡滚动条每次滚动的像素值
		//scrollDuration:100,//每次滚动动画持续的时间，单位：毫秒。

		tools:[{
			iconCls:'icon-add',
			handler:function(){//点击事件
				//alert("click...");
				
				//触发添加选项卡方法
				$("#tab").tabs('add', {
					title:'New tab',
					collapsible:true,//是否允许选项卡面板折叠
					iconCls:'icon-add',
					closable:true,//在选项卡面板上显示关闭按钮
					selected:false,//选项卡面板是否被选中
				});
			}
		}],
		closable:true,
		toolPosition:'left',//tab工具栏(即tools)的位置
		//tabPosition:'bottom',//tab选项卡的位置
		selected:2,//表示初始化时选择的选项卡编号，从0开始
		//showHeader:false,//是否显示tab页标题
		//
		// onSelect:function(title, index){//选择选项卡的时候触发
		// 	alert(title + ":" + index);
		// },
		// 关闭之前触发
		onBeforeClose:function(){
			alert('before close...');
		},
		// onUnselect:function(title, index){//取消选择选项卡的时候触发
		// 	alert(title + ":" + index);
		// },
		tabWidth:80,
		//鼠标右键事件
		onContextMenu:function(e, title, index){
			alert(e.type);
		},
		onAdd:function(title, index){
			alert('新增Tab 选项卡');
		},
		onClose:function(title, index){
			
		},
		onUpdate:function(title, index){
			
		}
	});

	$(document).click(function(){
		//$("#tab").tabs('close', 1);//关闭选项卡面板2，从0开始
		
		//console.log($('#tab').tabs('getTab', 1));//获取选项卡面板2

		// console.log($("#tab").tabs('getTabIndex', $("#tab2")));//获取指定选项卡面板的索引

		//console.log($("#tab").tabs('getSelected'));//获取选择的选项卡面板

		// $("#tab").tabs('select', 1);//选择指定索引的选项卡面板，索引从0开始
		
		// alert($("#tab").tabs('exists', 3));//判断是否存在指定索引的选项卡面板

		$("#tab").tabs('hideHeader');//隐藏选项卡的标题头
		$("#tab").tabs('showHeader');//显示选项卡的标题头

		$("#tab").tabs('update', {
			tab:$("#tab").tabs('getSelected'),
			options:{
				title:'新面板',
				iconCls:'icon-reload',
				closable:true,
				//...
			}
		});

		//正值向左，负值向右
		$("#tab").tabs('scrollBy', 10);
	});

});