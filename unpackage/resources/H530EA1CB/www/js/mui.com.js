function loadItem(url) {
	mui('#userFrame').load(url, function(response) {
	mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 0);
		if (url == "html/default.html") {
			//轮播图
			mui("#slider").slider({
				interval: 3000
			});
		}
		if (url == 'html/wode.html') {
			$(".mui-bar-nav").hide();
			$(".mui-bar-nav~.mui-content").css("padding-top", "0");
		} else {
			$(".mui-bar-nav").show();
			$(".mui-bar-nav~.mui-content").css("padding-top", "44px");
		}
	});
}
mui(".mui-inner-wrap").on('tap', '.mui-title', function() {

	var dom = document.querySelector('.mui-title-ul');
	if (dom.classList.contains('mui-hidden')) {
		dom.classList.remove("mui-hidden");
	} else {
		dom.classList.add("mui-hidden");
	}
});
mui(".mui-inner-wrap").on('tap', '.mui-title-ul li', function() {
	mui("#mui-title")[0].innerText = this.innerText;
	document.querySelector('.mui-title-ul').classList.add("mui-hidden");
});

mui(".mui-inner-wrap").on('tap', '.mui-a-item', function() {
	loadItem(this.getAttribute('data-href'));
});

mui(".mui-inner-wrap").on('tap', '.zj-inner', function() {
	let that = $(this).parents(".van-collapse-item__title"); //点击的按钮
	let list = $(that).parent().find(".van-collapse-item__wrapper")[0]; //下面的列表
	if (list) {
		let obj = $(that).find(".zj-title");
		if (obj) {
			if ($(obj).hasClass("close")) {
				$(obj).removeClass("close");
				$(obj).addClass("open");
				$(list).removeClass("mui-hidden");
			} else {
				$(obj).removeClass("open");
				$(obj).addClass("close");
				$(list).addClass("mui-hidden");
			}
		}
	}
});
mui(".mui-inner-wrap").on('tap', '.ico_zuoti_answer', function() {
	loadItem('html/answer.html');
	return false;
});
mui(".mui-inner-wrap").on('tap', '.ico_zuoti_zhineng', function() {
	loadItem('html/zhinenginfo.html');
	return false;
});
//返回首页
mui(".mui-inner-wrap").on('tap', '.gobackindex', function() {
	loadItem('html/default.html');
});
//返回列表
mui(".mui-inner-wrap").on('tap', '.gobacklist', function() {
	loadItem('html/kaodianlist.html');
});
