$(function(){
		//地图
       		var mapArr=[
                {name: "海门"},
                {name: "鄂尔多斯"},
                {name: "招远"},
	        ];
			var dom = document.getElementById("container");
			var myChart = echarts.init(dom);
			var optionMap = null;
			var convertData = function (data) {
			    var res = [];
			    for (var i = 0; i < data.length; i++) {
			        var geoCoord = geoCoordMap[data[i].name];
			        if (geoCoord) {
			            res.push({
			                name: data[i].name,
			                value: geoCoord.concat(data[i].value)
			            });
			        }
			    }
			    return res;
			};
			
			optionMap = {
			    backgroundColor: 'rgb(2,28,88)',
			    geo: {
			        map: 'china',
			        label: {
			            emphasis: {
			                show: false
			            }
			        },
			        itemStyle: {
			            normal: {
			                areaColor: 'rgba(56, 72, 98,0.5)',
			                borderColor:"rgb(0,23,92)",/**线条颜色*/
							borderWidth:0.5,/**线条宽*/
			            },
			            emphasis: {
			                areaColor: 'rgba(56, 72, 98,0.5)'
			            }
			        }
			    },
			    series: [
			        {
			            name: 'pm2.5',
			            type: 'effectScatter',
			            coordinateSystem: 'geo',
			            data: convertData(mapArr),
			            symbolSize: 20,
			            color:'rgba(14, 145, 252, 0.26)',
			            label: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			            itemStyle: {
			                emphasis: {
			                    borderColor: 'rgba(14, 145, 252, 0.26)',
			                    borderWidth: 10
			                }
			            }
			        }
			    ]
			};
			if (optionMap && typeof optionMap === "object") {
			    myChart.setOption(optionMap, true);
			}
			// //柱状图
			// var domBar = document.getElementById("containerBar");
			// var myChart = echarts.init(domBar);
			// var optionBar = null;
			// function randomData() {
			//     return (Math.random()*20).toFixed(2);
			// }
			// optionBar = {
			//     tooltip: {
			//         trigger: 'axis',
			//         axisPointer: {
			//             type: 'shadow'
			//         }
			//     },
			//     legend: {
			//         data: ['主词数量', '产品词数量','地区产品词数量','产品行业词数量','地区产品行业词数量']
			//     },
			//     grid: {
			//         left: '3%',
			//         right: '4%',
			//         bottom: '3%',
			//         containLabel: true
			//     },
			//     xAxis: {
			//         type: 'value',
			//         boundaryGap: [0, 0.01],
			//         //设置字体倾斜
	  //   			axisLabel:{
	  //   		    	interval:0,
	  //   			    rotate:45,//倾斜度 -90 至 90 默认为0
	  //   			    margin:2,
	  //   			    textStyle:{
	  //   			    	fontWeight:"none",
	  //   			    }
	  //   			}, 
			//     },
			//     yAxis: {
			//         type: 'category',
			//         data: ['百度','搜狗','360','百度移动','搜狗移动','360移动']
			//     },
			//     series: [
			//         {
			//             name: '主词数量',
			//             type: 'bar',
			//             data: [18203, 23489, 29034, 104970, 131744, 630230],
			//             itemStyle:{
			//               normal:{
			//                   color: new echarts.graphic.LinearGradient(
			//                         0, 0, 1, 0,
			//                         [
			//                             {offset: 0, color: '#83bff6'},
			//                             {offset: 1, color: '#188df0'}
			//                         ]
			//                     )
			//               }  
			//             },
			//         },
			//         {
			//             name: '产品词数量',
			//             type: 'bar',
			//             data: [19325, 23438, 31000, 121594, 134141, 681807],
			//             itemStyle:{
			//               normal:{
			//                   color: new echarts.graphic.LinearGradient(
			//                         0, 0, 1, 0,
			//                         [
			//                             {offset: 0, color: 'rgb(247,127,203)'},
			//                             {offset: 1, color: 'rgb(247,127,203)'}
			//                         ]
			//                     )
			//               }  
			//             },
			//         },
			//         {
			//             name: '地区产品词数量',
			//             type: 'bar',
			//             data: [18203, 23489, 29034, 104970, 131744, 630230],
			//             itemStyle:{
			//               normal:{
			//                   color: new echarts.graphic.LinearGradient(
			//                         0, 0, 1, 0,
			//                         [
			//                             {offset: 0, color: '#83bff6'},
			//                             {offset: 1, color: '#188df0'}
			//                         ]
			//                     )
			//               }  
			//             },
			//         },
			//         {
			//             name: '产品行业词数量',
			//             type: 'bar',
			//             data: [19325, 23438, 31000, 121594, 134141, 681807],
			//             itemStyle:{
			//               normal:{
			//                   color: new echarts.graphic.LinearGradient(
			//                         0, 0, 1, 0,
			//                         [
			//                             {offset: 0, color: 'rgb(247,127,203)'},
			//                             {offset: 1, color: 'rgb(247,127,203)'}
			//                         ]
			//                     )
			//               }  
			//             },
			//         }, 
			//         {
			//             name: '地区产品行业词数量',
			//             type: 'bar',
			//             data: [18203, 23489, 29034, 104970, 131744, 630230],
			//             itemStyle:{
			//               normal:{
			//                   color: new echarts.graphic.LinearGradient(
			//                         0, 0, 1, 0,
			//                         [
			//                             {offset: 0, color: '#83bff6'},
			//                             {offset: 1, color: '#188df0'}
			//                         ]
			//                     )
			//               }  
			//             },
			//         },        
			//     ]
			// };
			// if (optionBar && typeof optionBar === "object") {
			//     myChart.setOption(optionBar, true);
			// }
			//环图
			var domPie = document.getElementById("containerPie");
			var myChartPie= echarts.init(domPie);
			var optionPie = null;
			optionPie = {
			    backgroundColor:'#fff',
			    legend: {
			        orient: 'horizontal',
			        x: 'center',
			        y: 'bottom',
			        itemHeight: 5,
			        align: 'left',
			        itemWidth:8,
			        textStyle: {
			            color: '#999'
			        },
			        data:['百度','搜狗','360','搜狗移动','神马搜索','百度移动']
			    },
			    series: [
			        {
			            name:'',
			            type:'pie',
			            radius: ['30', '50'],
						center: ['50%', '35%'],
			            data:[
			            
						{
							value: 22,
							name: '百度',
							label:{
			                    normal:{
			                        textStyle:{
			                            color:"#3fa7dc",
			                             fontSize:18
			                        },
			                        show: false,
			                        position: 'center'
			                    }
			                },
			                itemStyle: {
			                    normal: {
			                        barBorderRadius: 20,
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#ec7838'
			                        }, {
			                            offset: 1,
			                            color: '#f09461'
			                        }]),
			                        shadowColor: 'rgba(0, 0, 0, 0.4)',
			                        // shadowBlur: 10,
			                        
			                    }
			                }  
						}, 
						{
							value: 8,
							name: '搜狗',
							label:{
			                    normal:{
			                        textStyle:{
			                            color:"#3fa7dc",
			                             fontSize:18
			                        },
			                        show: false,
			                        position: 'center'
			                    }
			                },
			                itemStyle: {
			                    normal: {
			                        barBorderRadius: 20,
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#f3bb12'
			                        }, {
			                            offset: 1,
			                            color: '#ebca64'
			                        }]),
			                        shadowColor: 'rgba(0, 0, 0, 0.4)',
			                        // shadowBlur: 10,
			                        
			                    }
			                }  
						}, 
						{
							value: 10,
							name: '360',
							label:{
			                    normal:{
			                        textStyle:{
			                            color:"#3fa7dc",
			                             fontSize:18
			                        },
			                        show: false,
			                        position: 'center'
			                    }
			                },
			                itemStyle: {
			                    normal: {
			                        barBorderRadius: 20,
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#46be34'
			                        }, {
			                            offset: 1,
			                            color: '#88ee78'
			                        }]),
			                        shadowColor: 'rgba(0, 0, 0, 0.4)',
			                        // shadowBlur: 10,
			                        
			                    }
			                }  
						}, 
						{
							value: 7,
							name: '搜狗移动',
							label:{
			                    normal:{
			                        textStyle:{
			                            color:"#3fa7dc",
			                             fontSize:18
			                        },
			                        show: false,
			                        position: 'center'
			                    }
			                },
			                itemStyle: {
			                    normal: {
			                        barBorderRadius: 20,
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#1685e9'
			                        }, {
			                            offset: 1,
			                            color: '#4ba1ef'
			                        }]),
			                        shadowColor: 'rgba(0, 0, 0, 0.4)',
			                        // shadowBlur: 10,
			                        
			                    }
			                }  
						},
						{
							value: 4,
							name: '神马搜索',
							label:{
			                    normal:{
			                        textStyle:{
			                            color:"#3fa7dc",
			                             fontSize:18
			                        },
			                        show: false,
			                        position: 'center'
			                    }
			                },
			                itemStyle: {
			                    normal: {
			                        barBorderRadius: 20,
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#cfd3db'
			                        }, {
			                            offset: 1,
			                            color: '#e8ebf1'
			                        }]),
			                        shadowColor: 'rgba(0, 0, 0, 0.4)',
			                        // shadowBlur: 10,
			                        
			                    }
			                }  
						},
						{
							value: 15,
							name: '百度移动',
							label:{
			                    normal:{
			                        textStyle:{
			                            color:"#3fa7dc",
			                             fontSize:18
			                        },
			                        show: false,
			                        position: 'center'
			                    }
			                },
			                itemStyle: {
			                    normal: {
			                        barBorderRadius: 20,
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: '#14c4f3'
			                        }, {
			                            offset: 1,
			                            color: '#68d3f0'
			                        }]),
			                        shadowColor: 'rgba(0, 0, 0, 0.4)',
			                        // shadowBlur: 10,
			                        
			                    }
			                }  
						}]
			        }
			    ]
			};
			if (optionPie && typeof optionPie === "object") {
			    myChartPie.setOption(optionPie, true);
			}
})