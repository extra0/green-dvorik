$(function() {

	// вызов фенсибокса
	$('.fancybox').fancybox();

	// показываем подробное описание услуг по посадке в корзине
	$('.cart-step__plant-detail-link').click(function() {
		$(this).next().slideToggle(500);
	});

	// слайдер в продукте
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		infinite: true,
		variableWidth: true,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});

	// главный слайдер
	$('.main-slider__block').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'ease',
		arrows: false
	});

	// универсальный слайдер
	$('.universal-slider').slick({
		dots: false,
		slidesToShow: 3,
		cssEase: 'ease',
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	// маска на телефон
	$('.mask').mask('+8 (999) 999-99-99');

	// открываем меню в моб версии
	$('.header__mobile-btn').click(function(){
		$('.header__main-menu-block').slideToggle(500);
	});

	// проставляем индексы в ссылках для плавной прокрутки
	$('.anchor__link').each(function(i){$(this).attr('href', '#' + i);});
	$('h2.subtitle').each(function(i){$(this).attr('id', i);});

	// плавное перемещение к нужной колонке в ценах
	$(document).ready(function() {
		$('.anchor__link').bind("click", function(e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 20
			}, 1500);
			e.preventDefault();
		});
	});

	// открываем полный список таблиц на мобле
	$('.main__show-table').click(function(){
		$('.main__table-wrapper').fadeToggle(500);
	});
});