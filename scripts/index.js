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
				data: ['60-69岁', '70-79岁', '80-89岁', '90岁以上'],
				icon: 'circle',
				textStyle: {
					color: '#fff',
				}
			},
			calculable: true,
			series: [{
				name: '',
				type: 'pie',
				//起始角度，支持范围[0, 360]
				// startAngle: 0,
				//饼图的半径，数组的第一项是内半径，第二项是外半径
				radius: '45%',
				//支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
				center: ['60%', '65%'],
				//是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
				// 'radius' 面积展现数据的百分比，半径展现数据的大小。
				//  'area' 所有扇区面积相同，仅通过半径展现数据大小
				// roseType: 'radius',
				//是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
				// avoidLabelOverlap: false,
				label: {
					normal: {
						show: true,
						formatter: '{c}'
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
						name: '60-69岁',
						itemStyle: {
							normal: {
								color: '#FF4949'
							}
						}
					},
					{
						value: 739348,
						name: '70-79岁',
						itemStyle: {
							normal: {
								color: '#FFA74D'
							}
						}
					},
					{
						value: 279315,
						name: '80-89岁',
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

	//左二图标 柱状图
	function echart_2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_2'));
		myChart.clear();
		option = {
			xAxis: {
				name: '区域',
				type: 'category',
				data: ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '临安区', '建德区', '桐庐区', '淳安区', '大江东', '开发区',
					'名胜区'
				],
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			yAxis: {
				name: '万人',
				type: 'value',
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			series: [{
				data: [10, 12, 15, 11, 23, 12, 24, 25, 10, 7, 8, 9, 9, 12, 17, 8],
				type: 'bar'
			}]
		};
		myChart.setOption(option);
	}

	// echart_map中国地图
	function echart_map() {
		var myChart = echarts.init(document.getElementById('chart_map'));
		var geoCoordMap = {
			"1": [120.209002,30.261992],
			"2": [120.227328,30.262991],
			"3": [120.216908,30.269292],
			"4": [120.205301,30.256611],
			"5": [120.217033,30.252216],
			"6": [120.230544,30.2612],
			"7": [120.195684,30.242908],
			"8": [120.19993,30.253464],
			"9": [120.184608,30.257137],
			"10": [120.189495,30.257387],
			"11": [120.196825,30.252271],
			"12": [120.198272,30.266336]
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
			"path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

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
					symbolSize: 15
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
				center: [120.204452,30.256634],
				// 百度地图缩放等级，数字越大，放大越大，地图比例尺越小
				zoom: 15,
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
				data: ['志愿者', '论坛', '老年大学', '家政'],
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
			color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF'],
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
				name: '单',
				type: 'value',
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
					data: [396, 423, 418, 363, 370,323,521]
				},
				{
					name: '论坛',
					type: 'line',
					data: [737, 636, 527, 737, 225,478,578]
				},
				{
					name: '老年大学',
					type: 'line',
					data: [545, 615, 413, 314, 515,714,628]
				},
				{
					name: '家政',
					type: 'line',
					data: [686, 847, 895, 865, 886,992,437]
				}
			]
		};
		myChart.setOption(option);
	}

	//chart_4一些数字
	function echart_4() {
		
	}

});
