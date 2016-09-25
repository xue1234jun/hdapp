$(function() {
	addLoading();
	mymuiinit();
	initpic();
	changepic();
	tabeldata();
//	devicelistener();
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

function tabeldata() {
	//模拟的json对象
	var data = [
		{
			"type": "发电量\n万千瓦时",
			"data1": 18,
			"data2": 18,
			"data3": 18,

		},
		{
			"type": "主汽流量\nt",
			"data1": 19,
			"data2": 19,
			"data3": 19,

		},
		{
			"type": "补水流量\nt",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "补水率\n%",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "给水温度\n℃",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "真空\nkPa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "主汽压\nMpa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "炉测主汽温\n℃",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "炉测主汽压\nMpa",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "含氧量\n%",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
		{
			"type": "排烟温度\n℃",
			"data1": 20,
			"data2": 15,
			"data3": 15,
		},
	];
	//换行符转行
	Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.toString();
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
	});
	//注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
	//$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
	var myTemplate = Handlebars.compile($("#table-template").html());

	//将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
	$('#tableList').html(myTemplate(data));
	delLoading();
}