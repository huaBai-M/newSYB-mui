$(function(){
	
			//柱状图
			var domBar = document.getElementById("containerBar");
			var myChart = echarts.init(domBar);
			var optionBar = null;
			function randomData() {
			    return (Math.random()*20).toFixed(2);
			}
			optionBar = {
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    legend: {
			        data: ['主词数量', '产品词数量','地区产品词数量','产品行业词数量','地区产品行业词数量']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'value',
			        boundaryGap: [0, 0.01],
			        //设置字体倾斜
	    			axisLabel:{
	    		    	interval:0,
	    			    rotate:45,//倾斜度 -90 至 90 默认为0
	    			    margin:2,
	    			    textStyle:{
	    			    	fontWeight:"none",
	    			    }
	    			}, 
			    },
			    yAxis: {
			        type: 'category',
			        data: ['百度','搜狗','360','百度移动','搜狗移动','360移动']
			    },
			    series: [
			        {
			            name: '主词数量',
			            type: 'bar',
			            data: [18203, 23489, 29034, 104970, 131744, 630230],
			            itemStyle:{
			              normal:{
			                  color: new echarts.graphic.LinearGradient(
			                        0, 0, 1, 0,
			                        [
			                            {offset: 0, color: '#83bff6'},
			                            {offset: 1, color: '#188df0'}
			                        ]
			                    )
			              }  
			            },
			        },
			        {
			            name: '产品词数量',
			            type: 'bar',
			            data: [19325, 23438, 31000, 121594, 134141, 681807],
			            itemStyle:{
			              normal:{
			                  color: new echarts.graphic.LinearGradient(
			                        0, 0, 1, 0,
			                        [
			                            {offset: 0, color: 'rgb(247,127,203)'},
			                            {offset: 1, color: 'rgb(247,127,203)'}
			                        ]
			                    )
			              }  
			            },
			        },
			        {
			            name: '地区产品词数量',
			            type: 'bar',
			            data: [18203, 23489, 29034, 104970, 131744, 630230],
			            itemStyle:{
			              normal:{
			                  color: new echarts.graphic.LinearGradient(
			                        0, 0, 1, 0,
			                        [
			                            {offset: 0, color: '#83bff6'},
			                            {offset: 1, color: '#188df0'}
			                        ]
			                    )
			              }  
			            },
			        },
			        {
			            name: '产品行业词数量',
			            type: 'bar',
			            data: [19325, 23438, 31000, 121594, 134141, 681807],
			            itemStyle:{
			              normal:{
			                  color: new echarts.graphic.LinearGradient(
			                        0, 0, 1, 0,
			                        [
			                            {offset: 0, color: 'rgb(247,127,203)'},
			                            {offset: 1, color: 'rgb(247,127,203)'}
			                        ]
			                    )
			              }  
			            },
			        }, 
			        {
			            name: '地区产品行业词数量',
			            type: 'bar',
			            data: [18203, 23489, 29034, 104970, 131744, 630230],
			            itemStyle:{
			              normal:{
			                  color: new echarts.graphic.LinearGradient(
			                        0, 0, 1, 0,
			                        [
			                            {offset: 0, color: '#83bff6'},
			                            {offset: 1, color: '#188df0'}
			                        ]
			                    )
			              }  
			            },
			        },        
			    ]
			};
			if (optionBar && typeof optionBar === "object") {
			    myChart.setOption(optionBar, true);
			}

})