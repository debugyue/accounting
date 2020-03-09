mui.ready(function() {
	//切换总类型
	mui(".mui-inner-wrap").on('tap', '.mui-title', function() {
		mui(".mui-title-ul").progressbar().hide();
	});
});
