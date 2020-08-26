$(function() {
	echart_1();
	echart_2();
	echart_3();
	echart_map();

	//echart_1年龄分布
	function echart_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_1'));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}件"
			},
			legend: {
				x: 'center',
				y: '15%',
				data: ['60-69', '70-79', '80-89', '90岁以上'],
				icon: 'circle',
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				itemGap:6,
				itemWidth:20,
				padding:[0,10]
			},
			calculable: true,
			series: [{
				name: '',
				type: 'pie',
				right:20,
				//起始角度，支持范围[0, 360]
				// startAngle: 0,
				//饼图的半径，数组的第一项是内半径，第二项是外半径
				radius: '45%',
				//支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
				center: ['50%', '65%'],
				label: {
					normal: {
						show: true,
						formatter: '{c}',
						fontSize:12
					},
					emphasis: {
						show: true
					}
				},
				labelLine: {
					normal: {
						show: true,
						length2: 1,
					},
					emphasis: {
						show: true
					}
				},
				data: [{
						value: 1172324,
						name: '60-69',
						itemStyle: {
							normal: {
								color: '#FF4949'
							}
						}
					},
					{
						value: 739348,
						name: '70-79',
						itemStyle: {
							normal: {
								color: '#FFA74D'
							}
						}
					},
					{
						value: 279315,
						name: '80-89',
						itemStyle: {
							normal: {
								color: '#4BF0FF'
							}
						}
					},
					{
						value: 91745,
						name: '90岁以上',
						itemStyle: {
							normal: {
								color: '#4E82FF'
							}
						}
					}
				]
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	//左二图标 量化地图
	function echart_2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_2'));
		myChart.clear();
		var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/330100_full.json";
		$.getJSON(uploadedDataURL, function(geoJson) {
			echarts.registerMap('hanzhou', geoJson);
			myChart.hideLoading();
			option = {
				// backgroundColor: '#020933',
				visualMap: {
					type: 'piecewise',
					min: 5000,
					max: 300000,
					right:0,
					calculable: true,
					showLabel:true,
					itemGap:5,
					pieces: [{
							min: 200000,
							max: 300000,
							color: '#BB0000',
							label:'20-30万'
						},
						{
							min: 100000,
							max: 200000,
							color: '#BD430A',
							label:'10-20万'
						},
						{
							min: 50000,
							max: 100000,
							color: '#E08150',
							label:'5-10万'
						},
						{
							min: 10000,
							max: 50000,
							color: '#E9B090',
							label:'1-5万'
						}
					],
					textStyle: {
						color: '#FFFF',
						fontSize:10
					}
				},

				geo: {
					map: 'hanzhou',
					aspectScale: 0.75, //长宽比
					zoom: 1.1,
					roam: false,
				},
				series: [{
					type: 'map',
					roam: false,
					data: [{
							name: '上城区',
							value: 98008
						},
						{
							name: '下城区',
							value: 106833
						},
						{
							name: '江干区',
							value: 97545
						},
						{
							name: '拱墅区',
							value: 89386
						},
						{
							name: '西湖区',
							value: 121896
						},
						{
							name: '滨江区',
							value: 32700
						},
						{
							name: '萧山区',
							value: 273838
						},
						{
							name: '余杭区',
							value: 214143
						},
						{
							name: '富阳区',
							value: 145458
						},
						{
							name: '临安区',
							value: 124485
						},
						{
							name: '桐庐县',
							value: 97112
						},
						{
							name: '淳安县',
							value: 99557
						},
						{
							name: '建德市',
							value: 118910
						}
					],
					zoom: 1.1,
					roam: false,
					map: 'hanzhou' //使用
				}, ]
			};
			myChart.setOption(option);
		});
	}

	// echart_map中国地图
	function echart_map() {
		var myChart = echarts.init(document.getElementById('chart_map'));
		var geoCoordMap = {
			"1": [120.209002, 30.261992],
			"2": [120.227328, 30.262991],
			"3": [120.216908, 30.269292],
			"4": [120.205301, 30.256611],
			"5": [120.217033, 30.252216],
			"6": [120.230544, 30.2612],
			"7": [120.195684, 30.242908],
			"8": [120.19993, 30.253464],
			"9": [120.184608, 30.257137],
			"10": [120.174691,30.273794],
			"11": [120.186764,30.237857],
			"12": [120.198272, 30.266336]
		};
		var oneData = [
			[{
					name: "1"
				},
				{
					name: "2",
					value: 20
				}
			],
			[{
					name: "1"
				},
				{
					name: "3",
					value: 20
				}
			],
			[{
					name: "1"
				},
				{
					name: "4",
					value: 20
				}
			]
		];
		var twoData = [
			[{
					name: "5"
				},
				{
					name: "6",
					value: 20
				}
			],
			[{
					name: "5"
				},
				{
					name: "7",
					value: 20
				}
			],
			[{
					name: "5"
				},
				{
					name: "8",
					value: 20
				}
			]
		];
		var threeData = [
			[{
					name: "9"
				},
				{
					name: "10",
					value: 20
				}
			],
			[{
					name: "9"
				},
				{
					name: "11",
					value: 20
				}
			],
			[{
					name: "9"
				},
				{
					name: "12",
					value: 20
				}
			]
		];

		var planePath =
			"path://M42.5,95.7c0,0.2,0.2,0.4,0.4,0.7c1.6,2,3.8,2.7,6.2,3.3c3.3,0.9,7.6,0.9,10.9,0.9c3.3,0,8,0,11.1-0.9c2.4-0.7,4.2-1.1,5.8-3.3c0.7-0.7,0.9-3.3,0.7-4.2C77.4,91,77,89.9,76.3,89c-0.2-0.4-0.4-0.7-0.7-0.9L74.7,87l-0.4,1.1C72.5,89,62.9,90.4,60,90.4c-3.1,0-12.5-0.9-14.2-2.2L45.4,87l-0.9,0.9c-0.2,0.2-0.4,0.7-0.7,0.9c-0.7,0.9-1.1,2-1.3,3.1C42,92.8,42,94.6,42.5,95.7c-0.4,2.7-0.9,5.6-1.3,8.9c-0.4,3.3-0.7,6.2-0.7,8.9c0.4-2.7,0.9-5.6,1.3-8.9C42.2,101.3,42.5,98.4,42.5,95.7L42.5,95.7z M82.8,38.7c2.9,0.9,5.8,0.9,4.7,3.6c-1.6-0.4-3.1-0.9-4.9-1.3l-1.1,49h0.7c0.2,0,0.4,0.2,0.4,0.4v15.6c0,0.2-0.2,0.4-0.4,0.4H81v3.3c-0.2,10.9-27.6,12.9-38.1,6.2c-2.9-1.8-4.7-4-4.7-6.9v-2.7h-0.9c-0.2,0-0.4-0.2-0.4-0.4V90.4c0-0.2,0.2-0.4,0.4-0.4H38l-1.1-48.8c-1.6,0.4-2.9,0.7-4.5,1.1c-0.9-2.4,1.8-2.7,4.5-3.3v-2.4h-0.7c-0.2,0-0.4-0.2-0.4-0.4V20.5c0-0.2,0.2-0.4,0.4-0.4h0.4v-4c0-1.1,0.7-2.9,1.6-4.5c0-1.6,1.8-4.2,2.7-5.1c0.9-1.1,1.8-2.2,2.9-3.1c0.2-0.7,1.1-1.1,1.8-1.1c1.3-1.1,2.9-2,4-2h20.3c2.7,0,6.7,4.7,8.2,6.5c0.7,0.9,1.8,2.2,2.7,3.8c1.6,2.2,2.4,4.5,2.4,5.6v3.6h0.4c0.2,0,0.4,0.2,0.4,0.4v15.6c0,0.2-0.2,0.4-0.4,0.4H83C83,36,82.8,38.7,82.8,38.7z M39.3,40.5c0.2,8.7,0.4,16.7,0.4,25.4c0,1.1,2.2,1.3,3.1,1.6V56.5c-0.4-9.1-2-15.1-3.6-17.1c0,0.2,0.2,0.7,0.2,0.9C39.6,40.5,39.3,40.5,39.3,40.5zM81.2,10.9v0.2c-1.1-1.8-2.2-3.3-3.1-4.5c-0.9-0.9-2.2-2.7-3.8-4.2L73.9,2c0.7-0.2,1.6,0.4,2,0.7c1.1,0.9,2.2,2,2.9,3.1c0.9,1.1,2.9,4,2.7,5.6C81.4,11.3,81.4,11.1,81.2,10.9z M40.2,86.8c0.7,0.4,2-0.2,2.9-0.7V69c-0.9-0.2-2.9-1.1-3.1-0.7C39.8,75,40,80.6,40.2,86.8z M79.6,86.8c0.2-6.5,0.2-12,0.4-18.5c-0.2-0.7-2.4,0.2-3.1,0.7v17.1C77.6,86.6,79,87.2,79.6,86.8z M79.9,65.9c0.2-9.1,0.4-17.6,0.7-26.5c-1.6,1.6-3.3,7.8-3.6,17.1v10.9C77.6,67.2,79.9,66.8,79.9,65.9z M43.8,48.3c0,0.2,0.2,0.4,0.4,0.7s0.4,0.2,0.7,0.2c9.8-1.8,19.8-1.8,29.6,0h0.2c0-0.2,0.2-0.2,0.2-0.4c0.9-5.3,1.8-9.1,2.4-14.2c0-0.4-0.2-0.9-0.7-1.1c-11.8-4-23.6-3.8-35.4,0V34C42.2,39.2,42.9,42.9,43.8,48.3z M70.3,6.7c-0.4,3.1-0.9,6.9-1.3,10.9s-0.7,7.6-0.7,10.9c0.4-3.1,0.9-6.9,1.3-10.9C70.1,13.6,70.3,9.8,70.3,6.7z M49.4,6.7c0,3.1,0.2,6.9,0.7,10.9c0.4,4,0.9,7.6,1.3,10.9c0-3.1-0.2-6.9-0.7-10.9C50.3,13.6,49.8,9.8,49.4,6.7z M79.6,113.5c0-2.7-0.2-5.6-0.7-8.9s-0.9-6.2-1.3-8.9c0,2.7,0.2,5.6,0.7,8.9C78.5,107.7,79.2,110.8,79.6,113.5z"
		var convertData = function(data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var dataItem = data[i];
				var fromCoord = geoCoordMap[dataItem[1].name];
				var toCoord = geoCoordMap[dataItem[0].name];
				if (fromCoord && toCoord) {
					res.push({
						fromName: dataItem[1].name,
						toName: dataItem[0].name,
						coords: [fromCoord, toCoord]
					});
				}
			}
			return res;
		};

		var color = ["#a6c84c", "#ffa022", "#46bee9"];
		var series = [];
		[
			["1", oneData],
			["5", twoData],
			["9", threeData]
		].forEach(function(
			item,
			i
		) {
			series.push({
				name: item[0],
				type: "effectScatter",
				coordinateSystem: "bmap",
				zlevel: 2,
				rippleEffect: {
					brushType: "stroke"
				},
				label: {
					normal: {
						show: true,
						position: "right",
						formatter: "{b}"
					}
				},
				symbolSize: function(val) {
					return val[2] / 4;
				},
				showEffectOn: "render",
				itemStyle: {
					normal: {
						color: color[i]
					}
				},
				data: [{
					name: item[0],
					value: geoCoordMap[item[0]].concat([100])
				}]
			}, {
				name: item[0] + " Top10",
				type: "lines",
				coordinateSystem: "bmap",
				zlevel: 1,
				effect: {
					show: true,
					period: 6,
					trailLength: 0.7,
					color: "#fff",
					symbolSize: 3
				},
				lineStyle: {
					normal: {
						color: color[i],
						width: 0,
						curveness: 0.2
					}
				},
				data: convertData(item[1])
			}, {
				name: item[0] + " Top10",
				type: "lines",
				coordinateSystem: "bmap",
				zlevel: 2,
				effect: {
					show: true,
					period: 6,
					trailLength: 0,
					symbol: planePath,
					symbolSize: [10, 20]
				},
				lineStyle: {
					normal: {
						color: color[i],
						width: 1,
						opacity: 0.4,
						curveness: 0.2
					}
				},
				data: convertData(item[1])
			}, {
				name: item[0] + " Top10",
				type: "effectScatter",
				coordinateSystem: "bmap",
				zlevel: 2,
				rippleEffect: {
					brushType: "stroke"
				},
				label: {
					normal: {
						show: true,
						position: "right",
						formatter: "{b}"
					}
				},
				symbolSize: function(val) {
					return val[2] / 4;
				},
				showEffectOn: "render",
				itemStyle: {
					normal: {
						color: color[i]
					}
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[1].name,
						value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
					};
				})
			});
		});

		var option = {
			bmap: {
				// 百度地图中心经纬度 坐标拾取器http://api.map.baidu.com/lbsapi/getpoint/index.html
				center: [120.204452, 30.256634],
				// 百度地图缩放等级，数字越大，放大越大，地图比例尺越小
				zoom: 14,
				// 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
				roam: false,
				// mapStyle是百度地图的自定义样式，见 http://developer.baidu.com/map/custom/
				mapStyle: {
					styleJson: [{
							featureType: "water",
							elementType: "all",
							stylers: {
								color: "#021019"
							}
						},
						{
							featureType: "highway",
							elementType: "geometry.fill",
							stylers: {
								color: "#000000"
							}
						},
						{
							featureType: "highway",
							elementType: "geometry.stroke",
							stylers: {
								color: "#147a92"
							}
						},
						{
							featureType: "arterial",
							elementType: "geometry.fill",
							stylers: {
								color: "#000000"
							}
						},
						{
							featureType: "arterial",
							elementType: "geometry.stroke",
							stylers: {
								color: "#0b3d51"
							}
						},
						{
							featureType: "local",
							elementType: "geometry",
							stylers: {
								color: "#000000"
							}
						},
						{
							featureType: "land",
							elementType: "all",
							stylers: {
								color: "#08304b"
							}
						},
						{
							featureType: "railway",
							elementType: "geometry.fill",
							stylers: {
								color: "#000000"
							}
						},
						{
							featureType: "railway",
							elementType: "geometry.stroke",
							stylers: {
								color: "#08304b"
							}
						},
						{
							featureType: "subway",
							elementType: "geometry",
							stylers: {
								lightness: -70
							}
						},
						{
							featureType: "building",
							elementType: "geometry.fill",
							stylers: {
								color: "#000000"
							}
						},
						{
							featureType: "all",
							elementType: "labels.text.fill",
							stylers: {
								color: "#857f7f"
							}
						},
						{
							featureType: "all",
							elementType: "labels.text.stroke",
							stylers: {
								color: "#000000"
							}
						},
						{
							featureType: "building",
							elementType: "geometry",
							stylers: {
								color: "#022338"
							}
						},
						{
							featureType: "green",
							elementType: "geometry",
							stylers: {
								color: "#062032"
							}
						},
						{
							featureType: "boundary",
							elementType: "all",
							stylers: {
								color: "#1e1c1c"
							}
						},
						{
							featureType: "manmade",
							elementType: "geometry",
							stylers: {
								color: "#022338"
							}
						},
						{
							featureType: "poi",
							elementType: "all",
							stylers: {
								visibility: "off"
							}
						},
						{
							featureType: "all",
							elementType: "labels.icon",
							stylers: {
								visibility: "off"
							}
						},
						{
							featureType: "all",
							elementType: "labels.text.fill",
							stylers: {
								color: "#2da0c6",
								visibility: "on"
							}
						},
						{
							featureType: "background",
							elementType: "all",
							stylers: {
								color: "#0e1054ff"
							}
						}
					]
				}
			},
			//series是在地图上的线条等效果的配置文件，具体可以查阅文档。
			series: series
		};

		myChart.setOption(option);

		// window.addEventListener("resize", function() {
		// 	myChart.resize();
		// });
	}

	//echart_3报名量
	function echart_3() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_3'));
		myChart.clear();
		option = {
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['志愿者', '论坛', '老年大学'],
				textStyle: {
					color: '#fff'
				},
				top: '8%'
			},
			grid: {
				top: '40%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			color: ['#FF4949', '#FFA74D', '#FFEA51'],
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			yAxis: {
				name: '订单数',
				type: 'value',
				min:200,
				interval:200,
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			series: [{
					name: '志愿者',
					type: 'line',
					data: [396, 423, 418, 363, 370, 323, 521]
				},
				{
					name: '论坛',
					type: 'line',
					data: [737, 636, 527, 737, 225, 478, 578]
				},
				{
					name: '老年大学',
					type: 'line',
					data: [545, 615, 413, 314, 515, 714, 628]
				}
			]
		};
		myChart.setOption(option);
	}

	//chart_4一些数字
	function echart_4() {

	}

});
