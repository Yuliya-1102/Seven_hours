$(function(){
	$('.slider__inner').slick({
		nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
		prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});
  	$('select').styler();
  	$('.news__slider').slick({
  		nextArrow:'<button type="button" class="news-btn slick-next"></button>',
		prevArrow:'<button type="button" class="news-btn slick-prev"></button>',
		infinite: false
  	});

  	$('.header__btn-menu').on('click', function(){
  		$('.menu ul').slideToggle();
  	});
});


console.log('Привет');