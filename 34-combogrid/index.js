/*
* @Author: Cam
* @Date:   2017-01-10 15:56:19
* @Last Modified by:   Cam
* @Last Modified time: 2017-01-19 11:31:25
*/

'use strict';

$(function(){
	$("#box").combogrid({
		panelWidth:400,
		idField:"id",
		textField:'user',//要显示在文本框中的文本字段
		url:'',
		multiple:true,//默认为false
		columns:[[
                {
                    field:'id',
                    title:'编号',
                    width: 100,
                    checkbox:true,
                },{
                    field:'user',
                    title:'帐号',
                    width: 100
                },{
                    field:'age',
                    title:'年龄',
                    width: 100
                },{
                    field:'gender',
                    title:'性别',
                    width: 100
                }
            ]],
            data:[
                {
                    id:1,
                    user:'Cay1',
                    age:21,
                    gender:'female'
                },{
                    id:2,
                    user:'Cay2',
                    age:26,
                    gender:'male'
                },{
                    id:3,
                    user:'Cay3',
                    age:31,
                    gender:'male'
                },{
                    id:4,
                    user:'Cay4',
                    age:20,
                    gender:'female'
                }
            ]
	});
});