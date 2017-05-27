/**
 * Created by jvid on 2017/5/26
 */

"use strict";
(function(w){
	//全局变量的初始话
	let _alert = w.alert,
		_csl = w.console.log,
		_Math = w.Math,
		_array = w.Array;

	//确定数据类型
	let _jugeType = {
		isUndefind(obj) {
			return (typeof(obj) != 'undefined');
		},
	    isStr(obj) {
	        return (typeof(obj) == 'string');
	    },
	    isNum(obj) {
	        return (typeof(obj) == 'number');
	    },
	    isFunc(obj) {
	        return (typeof(obj) == 'function');
	    },
	    isArr(obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    },
	    isObj(obj) {
	        return (typeof(obj) == 'object') && !isArr(obj);
	    }
	};	

	 let _jvid = {
	    	console(para="Default Value") {
	    		_csl(para)
	    	},
	    	/*
			方法：数组去重
			参数：数组
	    	*/
	    	cutSame(arr) {
	    		if(!_jugeType.isArr(arr)){
	    			console.error('there need a Array');
	    			return 
		    	}
		    	let temp = {};
	    		let res = [];
	    		arr.forEach((item) => {
	    			if(!res[item]){
	    				res.push(item);
	    				temp[item] = 1;
	    			}
	    		})
	    		return res;
	    	},
	    	/*
			方法：找出两个数组中的相同元素，并没有重复
			参数：
				arr1，arr2都是数组
	    	*/
	    	pickSameItem(arr1,arr2) {
	    		if(!_jugeType.isArr(arr1)||!_jugeType.isArr(arr2)){
	    			console.error('there need a Array');
	    			return 
		    	}
	    		var arr = [];
	    		var isEsit = {};
                arr1.forEach((item) => {
                	arr2.forEach((item2) => {
                		var temp = true;
                		if(item !== item2){
                			temp = false;
                		}
                		if(temp && !isEsit[item2]){
	            			arr.push(item2);
	            			isEsit[item2] = 1;
	            		}
                	})
                })
                return arr;
	    	},
	    	/*
			方法：把arr1中与arr2中不同的元素返回
			参数：
				arr1，arr2都试数组
	    	*/
	    	pickDiffItem(arr1,arr2) {
	    		if(!_jugeType.isArr(arr1)||!_jugeType.isArr(arr2)){
	    			console.error('there need a Array');
	    			return 
		    	}
	    		var arr = [];
                arr1.forEach((item) => {
                	var temp = true;
                	arr2.forEach((item2) => {
                		if(item === item2){
                			temp = false;
                		}
                	})
                	if(temp){
            			arr.push(item)
            		}
                })
                return arr;
	    	},
	    	/*
			方法：将两个数组中不同的元素放到一个数组中
			参数：
				arr1，arr2两个数组
	    	*/
	    	differentArr(arr1,arr2) {
	    		if(!_jugeType.isArr(arr1)||!_jugeType.isArr(arr2)){
	    			console.error('there need a Array');
	    			return
		    	}
                return this.pickDiffItem(arr1,arr2).concat(this.pickDiffItem(arr2,arr1));
            },
            /*
			方法：数字格式化，三位一个逗号
			参数：数字或者数字字符串
            */
            numFormat(num=0) {
            	if((!(_jugeType.isStr(num) && (~~num !== 0)) || _jugeType.isNum(num))){
            		console.error('The param is not a number or number-string');
            		return 
            	}
            	let nArr = parseInt(~~num).toString().split('');
            	var result = [], counter = 0;
                for (var i = nArr.length - 1; i >= 0; i--) {
                    counter++;
                    result.unshift(nArr[i]);
                    if (!(counter % 3) && i != 0) { result.unshift(','); }
                }
                return result.join('');
            },
            /*
			方法：get ajax请求
			参数：url data cb
            */
            getData({url,data,success}){
            	let xhr = new XMLHttpRequest() ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            	xhr.open("GET",url + data,true);
            	_csl(xhr.readyState);
            	xhr.onreadystatechange = () => {
            		console.log(xhr.readyState)
            		if(xhr.readyState == 4 && xhr.status == 200){
            			console.log(xhr.response)
            			success(xhr.response)
            		}else{
            			xhr.error();
            		}
            	}
            }
	    }
	window._jvid = window._JVID = window._JD = _jvid;
})(window)
