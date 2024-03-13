'use strict';
const btn = document.querySelector('#btn-menu');
const nav = document.querySelector('#header-nav-list');
const navitem1 = document.querySelector('.js_about');
const navitem2 = document.querySelector('.js_works');
const navitem3 = document.querySelector('.js_contact');
const media_toggle = document.querySelector('.js_has-child');
const accordion = document.querySelector('.js_accordion');
const ham = document.querySelector('.js_ham-nav');
const body =document.querySelector('.js_body');
const kv = document.querySelector('.un_kv_img');
const scrolldown = document.querySelector('.un_scrolldown2');


// アコーディオンメニュー
media_toggle.addEventListener('click', () =>{
    media_toggle.classList.toggle('is_open-toggle')
});
media_toggle.addEventListener('click', () =>{
    accordion.classList.toggle('is_open-accordion')
});
btn.addEventListener('click', () =>{
    ham.classList.toggle('is_open-active')
});
btn.addEventListener('click', () =>{
    body.classList.toggle('is_hidden')
});

// ハンバーガメニュー
btn.addEventListener('click', () =>{
    nav.classList.toggle('open-menu')
});
btn.addEventListener('click', () =>{
    btn.classList.toggle('open-menu')
});
btn.addEventListener('click', () =>{
    btn.classList.toggle('close-menu')
});
// モーダルウィンドウ


const modalButton = document.querySelector('.js_works_item'); 
const modalButton2 = document.querySelector('.js_works_item2');
const modalButton3 = document.querySelector('.js_works_item3');
const modalButton4 = document.querySelector('.js_works_item4');
if (modalButton !== null){
	modalButton.addEventListener('click',()=>{
		modalButton.nextElementSibling.classList.add('is-open');
		body.classList.add('is_hidden');
	});
	modalButton.nextElementSibling.addEventListener('click',()=>{
		modalButton.nextElementSibling.classList.remove('is-open');
		body.classList.remove('is_hidden');
	});
}
if (modalButton !== null){
	modalButton2.addEventListener('click',()=>{
		modalButton2.nextElementSibling.classList.add('is-open');
		body.classList.add('is_hidden');
	});
	modalButton2.nextElementSibling.addEventListener('click',()=>{
		modalButton2.nextElementSibling.classList.remove('is-open');
		body.classList.remove('is_hidden');
	});
}
if(modalButton3 !== null){
	modalButton3.addEventListener('click',()=>{
		modalButton3.nextElementSibling.classList.add('is-open');
		body.classList.add('is_hidden');
	});
	modalButton3.nextElementSibling.addEventListener('click',()=>{
		modalButton3.nextElementSibling.classList.remove('is-open');
		body.classList.remove('is_hidden');
	});
}
if(modalButton4 !== null){
	modalButton4.addEventListener('click',()=>{
		modalButton4.nextElementSibling.classList.add('is-open');
		body.classList.add('is_hidden');
	});
	modalButton4.nextElementSibling.addEventListener('click',()=>{
		modalButton4.nextElementSibling.classList.remove('is-open');
		body.classList.remove('is_hidden');
	});
}


// modalButton3.addEventListener('click', () => {
// 	modal3.classList.add('is-open');
// 	body.classList.add('is_hidden');
//   });
//     modal3.addEventListener('click',()=>{
// 		modal3.classList.remove('is-open');
// 		body.classList.remove('is_hidden');
// 	});
// modalButton4.addEventListener('click', () => {
// 	modal4.classList.add('is-open');
// 	body.classList.add('is_hidden');
//   });
//     modal4.addEventListener('click',()=>{
// 		modal4.classList.remove('is-open');
// 		body.classList.remove('is_hidden');
// 	});
// スクロールメニュー
window.addEventListener('scroll', function() {
	const element = document.getElementsByClassName('js_direction');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<element.length; i++) {
	const element_height = element[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(element_height < window_height*1 ) {
		element[i].classList.add('io_scroll');
 		}
         else {
			element[i].classList.remove('io_scroll');
		}
	}
});
window.addEventListener('scroll', function() {
	const design = document.getElementsByClassName('js_design');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<design.length; i++) {
	const design_height = design[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(design_height < window_height*1 ) {
		design[i].classList.add('io_scroll');
 		}
         else {
			design[i].classList.remove('io_scroll');
		}
	}
});

window.addEventListener('scroll', function() {
	const coding = document.getElementsByClassName('js_coding');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<coding.length; i++) {
	const coding_height = coding[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(coding_height < window_height*1 ) {
		coding[i].classList.add('io_scroll');
 		}
         else {
			coding[i].classList.remove('io_scroll');
		}
	}
});
window.addEventListener('scroll', function() {
	const works = document.getElementsByClassName('js_works_item');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<works.length; i++) {
	const works_height = works[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(works_height < window_height*1.3 ) {
		works[i].classList.add('io_scroll');
 		}
         else {
			works[i].classList.remove('io_scroll');
		}
	}
});
window.addEventListener('scroll', function() {
	const works2 = document.getElementsByClassName('js_works2');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<works2.length; i++) {
	const works2_height = works2[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(works2_height < window_height*1.2 ) {
		works2[i].classList.add('io_scroll');
 		}
         else {
			works2[i].classList.remove('io_scroll');
		}
	}
});
window.addEventListener('scroll', function() {
	const form = document.getElementsByClassName('js_form');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<form.length; i++) {
	const form_height = form[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(form_height < window_height*1 ) {
		form[i].classList.add('io_scroll');
 		}
         else {
			form[i].classList.remove('io_scroll');
		}
	}
});
window.addEventListener('scroll', function() {
	const formwrap = document.getElementsByClassName('js_formwrap');
	const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    var i=0;
	for ( i=0; i<formwrap.length; i++) {
	const formwrap_height = formwrap[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
	if(formwrap_height < window_height*2.8 ) {
		formwrap[i].classList.add('io_scroll');
 		}
         else {
			formwrap[i].classList.remove('io_scroll');
		}
	}
});
window.addEventListener('scroll', ()=> {
	const pageUP =document.querySelector('.js_return');
	const scroll = window.scrollY;
	if(scroll > 250){
		pageUP.classList.add('is_upMove')
	}else{
		pageUP.classList.remove('is_upMove')
	}
});

// オープニングアニメーション
if(kv !== null){
	setTimeout(() =>{
		kv.classList.add("is_kv-op");
	}, 3800);
}
if(scrolldown !== null){
	setTimeout(() =>{
		scrolldown.classList.add("is_kv-op");
	}, 4800);
}

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
	$('.un_kv_ttl').each(function () {
	  var elemPos = $(this).offset().top - 50;
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight) {
		$(this).addClass("appeartext");
  
	  } else {
		$(this).removeClass("appeartext");
	  }
	});
  }
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".un_kv_ttl");
	element.each(function () {
	  var text = $(this).text();
	  var textbox = "";
	  text.split('').forEach(function (t, i) {
		if (t !== " ") {
		  if (i < 10) {
			textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
		  } else {
			var n = i / 10;
			textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
		  }
  
		} else {
		  textbox += t;
		}
	  });
	  $(this).html(textbox);
	});
  
	EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
