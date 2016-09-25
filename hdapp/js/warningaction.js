//设置日期，当前日期的前七天
var myDate = new Date(); //获取今天日期
myDate.setDate(myDate.getDate() - 6);
var dateArray = [];

function getweekday() {
	var dateTemp;
	for(var i = 0; i < 7; i++) {
		dateArray.push(myDate.getDate());
		myDate.setDate(myDate.getDate() + 1);
	}
}

function setday() {
	document.getElementById("todayDate").innerHTML = myDate.getFullYear() + '年/' + (myDate.getMonth() + 1) + '月';
	$('a[id$=day]').each(function(index, value) {
		if(index > 5) {
			return;
		}
		$(value).get(0).innerHTML = dateArray[index] + '日';
	});

}
$(function() {
	addLoading();
	mymuiinit();
	getweekday();
	setday();
	initpic();
	changepic();
	tabeldata(0);
	//	devicelistener();
});

function mymuiinit() {
	/*mui的a点击有效*/
	mui.init();
	mui('body').on('tap', 'a', function() {
		document.location.href = this.href;
	});
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		bounce: true, //是否启用回弹
	});
}
//顶栏选择两个按钮
function productview() {
	$('#leftTitle').addClass('titleactive');
	$('#rightTitle').removeClass('titleactive');
	mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100); //100毫秒滚动到顶
}

function dischargeview() {
	$('#leftTitle').removeClass('titleactive');
	$('#rightTitle').addClass('titleactive');
}
//中间日期选择
function changedata() {
	mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100); //100毫秒滚动到顶
	if($('#leftTitle').hasClass('mui-active')) {
		$('a[id$=day]').each(function(index, value) {
			if($(value).hasClass('mui-active')) {

				var strtmp = $(value).get(0).innerHTML;
				if(strtmp == '今日') {
					tabeldata(0);
				} else {
					tabeldata(new Date().getDate() - Number(strtmp.substring(0, strtmp.length - 1)));

				}
			}
		})
	}
}

function initpic() {
	$('nav>a').each(function() {
		if($(this).attr('class') == 'mui-tab-item mui-active') {
			var tmp = $(this).find('img').attr('src');
			var unit = tmp.split('.');
			if(unit[2].indexOf('select') == -1) {
				$(this).find('img').attr('src', '..' + unit[2] + '-select.' + unit[3]);
			}
			$(this).siblings('a').each(function() {
				var tmp = $(this).find('img').attr('src');
				if(tmp.indexOf('select') != -1) {
					var unit = tmp.split('.');
					$(this).find('img').attr('src', '..' + unit[2].substring(0, unit[2].lastIndexOf('-')) + '.' + unit[3]);
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
				$(this).find('img').attr('src', '..' + unit[2] + '-select.' + unit[3]);
			}
			$(this).siblings('a').each(function() {
				var tmp = $(this).find('img').attr('src');
				if(tmp.indexOf('select') != -1) {
					var unit = tmp.split('.');
					$(this).find('img').attr('src', '..' + unit[2].substring(0, unit[2].lastIndexOf('-')) + '.' + unit[3]);
				}
			})

		}
	});
}

function tabeldata(datevalue) {
//	console.log(datevalue);
	//模拟的json对象
	var data = [
		[{
			"name": "主汽温\n℃",
			"data1": 18,
			"data2": 18,
			"data3": 18,
			"data4": 18,
		}, {
			"name": "主汽压\nMPa",
			"data1": 19,
			"data2": 19,
			"data3": 19,
			"data4": 19,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "主汽压\nMpa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "炉测主汽压\nMpa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, {
			"name": "含氧量\n%",
			"data1": 20,
			"data2": 15,
			"data3": 15,
			"data4": 15,
		}, ],
		[{
			"name": "主汽温\n℃",
			"data1": 28,
			"data2": 28,
			"data3": 28,
			"data4": 28,
		}, {
			"name": "主汽压\nMPa",
			"data1": 29,
			"data2": 29,
			"data3": 29,
			"data4": 29,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "主汽压\nMpa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "再热汽压\nMPa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "炉测主汽压\nMpa",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, {
			"name": "含氧量\n%",
			"data1": 20,
			"data2": 25,
			"data3": 25,
			"data4": 25,
		}, ],
		//模拟的json对象
		[{
			"name": "SO2排放浓度\nmg/Nm3",
			"data1": 8,
			"data2": 8,
			"data3": 8,
			"data4": 8,
		}, {
			"name": "NOx排放浓度\nmg/Nm3",
			"data1": 9,
			"data2": 9,
			"data3": 9,
			"data4": 8,
		}, {
			"name": "烟尘排放浓度\nmg/Nm3",
			"data1": 2,
			"data2": 5,
			"data3": 5,
			"data4": 8,
		}, ],
	];
	//换行符转行
	Handlebars.registerHelper('breaklines', function(text) {
		text = Handlebars.Utils.escapeExpression(text);
		text = text.toString();
		text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
		return new Handlebars.SafeString(text);
	});

	if($('#leftTitle').hasClass('mui-active')) {
		//注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
		//$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
		var myTemplate = Handlebars.compile($("#table-template").html());

		//将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
		$('#tableList-left').html(myTemplate(data[datevalue]));
	}
	if(!$('#rightTitle').hasClass('mui-active')) { //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
		//$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
		var myTemplate = Handlebars.compile($("#table-template").html());

		//将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
		$('#tableList-right').html(myTemplate(data[2]));
	}

	delLoading();
}