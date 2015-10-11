$(function(){

	// вызов фенсибокса
	$('.fancybox').fancybox();

	// показываем подробное описание услуг по посадке в корзине
	$('.cart-step__plant-detail-link').click(function(){
		$(this).next().slideToggle(500);
	});

	// слайдер в продукте
	
});