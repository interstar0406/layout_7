'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];
		_e = function _e() {
			return '\\w+';
		};
		c = 1;
	};
	while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
$(document).ready(function () {

	//slider
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
	});
});

// nav tab

// $('.tabs .item').on('click',function(){
// 	$('.tabs .item').removeClass('active')
// 	$(this).addClass('active')

// 	var m = $(this).attr('data-tab')
// 	console.log(m)
// 	$('.content .item').removeClass('active')
// 	$('.content #tab-'+m).addClass('active')
// })


// array
// abc = [a,b,c,d,e]

// var arr = [1, 3,, 7, 10]
// var str = 'abc;avw;svawrv;awv;wav;av;'

// console.log(arr)
// console.log(str)

// for (let key in arr) { //for-in: nếu obj có key -> do
// 	if (arr.hasOwnProperty(key)) {
// 		let element = arr[key];
// 		console.log(element, key)
// 	}
// }


// var arr2str = arr.join(' ') 	// array to string with join() func
// console.log(arr2str)

// var str2arr = str.split('') 	// array to string with split() func
// console.log(str2arr)

// mã hóa chuỗi input theo ma_hoa
// var a2z = 'abcde'
// var tmp1 = a2z.split('')
// var ma_hoa = 'G2,H2,1C,A5,BT'
// var tmp2 = ma_hoa.split(',')


// function mahoa(text, e) {
// 	for (let key in tmp1) {
// 		if (tmp1.hasOwnProperty(key)) {
// 			let element = tmp1[key]
// 			if (e) {//mã hóa
// 				text = text.replace(new RegExp(element, 'g'), tmp2[key])
// 			} else {//giải mã
// 				text = text.replace(new RegExp(tmp2[key], 'g'), element)
// 			}
// 		}
// 	}
// 	return text
// }


// console.log(mahoa('ac ba ca de ed ab',true))
// console.log(mahoa('ac ba ca de ed ab'))


//		biểu thức Regular Expression
//		link http://vforum.vn/diendan/showthread.php?6071-Xu-ly-chuoi-bang-Javascript-Regular-Expression
//# sourceMappingURL=main.js.map
