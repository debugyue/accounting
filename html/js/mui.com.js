
mui.plusReady(function() {
	plus.nativeUI.closeWaiting(); //这里是关闭显示原生等待框
})

function loadItem(key) {
	mui.plusReady(function() {
		plus.nativeUI.showWaiting(); //这里是开始显示原生等待框
		webviewShow = plus.webview.create(key);
		webviewShow.show('slide-in-right', 300);
		return false;
	});
}
function goback() {
	let list = plus.webview.getDisplayWebview();
	let current = plus.webview.currentWebview();
	var proPage = list[1].id;
	if (proPage == current.id) {
		return;
	};
	plus.webview.hide(current.id); // 隐藏上一个子页面
	plus.webview.show(proPage) // 显示当前点击页面 
}
var mask = mui.createMask(() => {
	$('.mui-title-ul').addClass("mui-hidden");
}); //callback为用户点击蒙版时自动执行的回调；
mui("body").on('tap', '.mui-item-title', function() {
	
	if($(".mui-title-ul").hasClass('mui-hidden'))
	{
		mask.show(); //显示遮罩
		$(".mui-title-ul").removeClass('mui-hidden');
	}else
	{
		mask.close(); //显示遮罩
		$(".mui-title-ul").addClass('mui-hidden');
	}
	$('.mui-backdrop').css('z-index', '2');
});

mui("body").on('tap', '.mui-title-ul li', function() {
	mui("#mui-title")[0].innerText = this.innerText;
	document.querySelector('.mui-title-ul').classList.add("mui-hidden");
	mask.close(); //关闭遮罩
});

mui("body").on('tap', '.mui-a-item', function() {
	var url=this.getAttribute('data-href');
	if(url==null||typeof(url)==undefined||url=='#')
		return;
	loadItem(this.getAttribute('data-href'));
}); 
mui("body").on('tap', '.cannel', function() {
	mui("#wodeMask").popover('toggle'); //这是可以用来关闭底部弹窗的事件
});
// mui("body").on('tap', '.zj-inner p', function() {
// 	let that = $(this).parents(".van-collapse-item__title"); //点击的按钮
// 	let list = $(that).parent().find(".van-collapse-item__wrapper")[0]; //下面的列表
// 	if (list) {
// 		let obj = $(that).find(".zj-title");
// 		if (obj) {
// 			if ($(obj).hasClass("close")) {
// 				$(obj).removeClass("close");
// 				$(obj).addClass("open");
// 				$(list).removeClass("mui-hidden");
// 			} else {
// 				$(obj).removeClass("open");
// 				$(obj).addClass("close");
// 				$(list).addClass("mui-hidden");
// 			}
// 		}
// 	}
// });
