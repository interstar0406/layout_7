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
