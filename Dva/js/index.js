'use strict';

var timeElm = document.getElementById('time');
var doc = document.documentElement;
var clientWidth = doc.clientWidth;
var clientHeight = doc.clientHeight;
var first="00";
var second="00";
var third="00";
var subs="0";

var pad = function pad(val) {
  //return val < 10 ? '0' + val : val;
  return val;
};
function renew(data){
	subs=data.data.card.fans.toString();
    first=subs.substr(0,2);
    second=subs.substr(2,2);
    third=subs.substr(4,2);
}
var time$ = Rx.Observable.interval(1000).map(function () {
	
  var time = new Date();
	$.ajax({
    cache: false,
    url: "https://api.imjad.cn/bilibili/v2/?get=space&vmid=625268",
    dataType: "json",
    success: function(data) {
		renew(data);
	}
});
  return {
    hours: first,
    minutes: second,
    seconds: third
  };
}).subscribe(function (_ref) {
  var hours = _ref.hours;
  var minutes = _ref.minutes;
  var seconds = _ref.seconds;

  timeElm.setAttribute('data-hours', pad(hours));
  timeElm.setAttribute('data-minutes', pad(minutes));
  timeElm.setAttribute('data-seconds', pad(seconds));
});

var mouse$ = Rx.Observable.fromEvent(document, 'mousemove').map(function (_ref2) {
  var clientX = _ref2.clientX;
  var clientY = _ref2.clientY;
  return {
    x: (clientWidth / 2 - clientX) / clientWidth,
    y: (clientHeight / 2 - clientY) / clientHeight
  };
});

RxCSS({
  mouse: RxCSS.animationFrame.withLatestFrom(mouse$, function (_, m) {
    return m;
  }).scan(RxCSS.lerp(0.2))
}, timeElm);