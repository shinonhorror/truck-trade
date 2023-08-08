$(document).ready(function () {
	$('#menu').on('click', 'a', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});

	$(function () {
		$('#phone').mask('+7 (999) 999-9999');
	});

	$(function () {
		$('.center').slick({
			variableWidth: true,
			infinite: true,
			slidesToShow: 1,
			centerPadding: '5px',
			speed: 500,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			centerMode: true,
		});
	});
});
