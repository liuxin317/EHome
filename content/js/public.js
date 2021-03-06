$(function () {
	$('body').fadeIn(50);

	// 禁用IOS双指缩放
	document.documentElement.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, false);

	// 禁用IOS手指双击缩放
	var lastTouchEnd = 0;
	document.documentElement.addEventListener('touchend', function (event) {
		var now = Date.now();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);
});