$(function() {
	addLoading();
	mymuiinit();
	initpic();
	createchart();	
	changepic();
	tabeldata();
	devicelistener();
});
function mymuiinit()
{
	/*mui的a点击有效*/
	mui.init();
	mui('body').on('tap', 'a', function() {
		document.location.href = this.href;
	});
	mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
}
function initpic() {
	$('nav>a').each(function() {
			if($(this).attr('class') == 'mui-tab-item mui-active') {
				var tmp = $(this).find('img').attr('src');
				var unit = tmp.split('.');
				if(unit[2].indexOf('select') == -1) {
					$(this).find('img').attr('src', '..'+unit[2] + '-select.' + unit[3]);
				}
				$(this).siblings('a').each(function() {
					var tmp = $(this).find('img').attr('src');
					if(tmp.indexOf('select') != -1) {
						var unit = tmp.split('.');
						$(this).find('img').attr('src', '..'+unit[2].substring(0, unit[2].lastIndexOf('-')) + '.' + unit[3]);
					}
				})

			}
		});
}

function changepic() {
	$('nav>a').bind('click', function() {
		if($(this).attr('class') == 'mui-tab-item mui-active') {
			var tmp = $(this).find('img').attr('src');
			var unit = tmp.split('.');
			if(unit[2].indexOf('select') == -1) {
				$(this).find('img').attr('src', '..'+unit[2]  + '-select.' + unit[3]);
			}
			$(this).siblings('a').each(function() {
				var tmp = $(this).find('img').attr('src');
				if(tmp.indexOf('select') != -1) {
					var unit = tmp.split('.');
					$(this).find('img').attr('src', '..'+unit[2].substring(0, unit[2].lastIndexOf('-')) + '.' + unit[3]);
				}
			})

		}
	});
}

function createchart() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main'));
	option = {
		color: ['#ffc200'],
		tooltip: {
			trigger: 'axis',
		},
		grid: {
			y: '30px',
			x2: '20px',
			y2:'45px',
			containLabel: false,
		},
		textStyle: {
			color: '#47a2b2',
			fontFamily: '微软雅黑',
			fontSize: 18,
		},
		xAxis: [{
			type: 'category',
			data: ['主汽压力 Mpa', '主汽温度 ℃', '再热温度 ℃', '给水温度 ℃', '真空 kPa', '过热减温水 t'],
			axisLine: {
				lineStyle: {
					color: '#47a2b2',
				}
			},
			axisLabel: {
				interval: 0,
				formatter: function(val) {
					return val.split(" ").join("\n");
				}
			}
		}],
		yAxis: [{
			name: 'g/KW·h',
			nameTextStyle: {
				fontFamily: '微软雅黑',
				fontSize: 13,
			},
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#47a2b2',
				}
			},
			splitLine: {
				lineStyle: {
					color: '#295C65',
				}
			},
		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '40%',
			data: [10, 5, 20, 21, 25, 29],
			itemStyle: {
				normal: {
					barBorderRadius: 5,
				}
			},
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	window.onresize = myChart.resize;
}

function tabeldata() {
	//模拟的json对象
	var data = [
		{
			"type": "实时值",
			"data1": 18,
			"data2": 18,
			"data3": 18,
			"data4": 18,
			"data5": 18,
		},
		{
			"type": "目标值",
			"data1": 19,
			"data2": 19,
			"data3": 19,
			"data4": 19,
			"data5": 19,
		},
		{
			"type": "耗差g/KW·h",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
			"data5": 15,
		}
	];
	//注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
	//$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
	var myTemplate = Handlebars.compile($("#table-template").html());

	//将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
	$('#tableList').html(myTemplate(data));
	delLoading();
}