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
});