$(document).ready(function () {
	$('html').on('click', 'a', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});

	$(function () {
		$('#phone').mask('+7 (999) 999-9999');
	});

	$(function () {
		$('.center').on('init', function (event, slick) {
			var button = this.querySelector('button');
			button.classList.add('active');
		});

		$('.center').slick({
			infinite: true,
			slidesToShow: 1,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnFocus: false,
			pauseOnHover: false,
			dots: true,
			arrows: false,
			asNavFor: '.text__slider',
		});

		$('.text__slider').slick({
			infinite: true,
			slidesToShow: 1,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnFocus: false,
			pauseOnHover: false,
			arrows: false,
			asNavFor: '.center',
			fade: true,
		});
	});

	$('.center').on(
		'afterChange',
		function (event, slick, currentSlide, nextSlide) {
			var list = this.querySelector('.slick-dots');
			list.childNodes.forEach((item) => {
				item.className === 'slick-active'
					? item.lastChild.classList.add('active')
					: item.lastChild.classList.remove('active');
			});
		},
	);
});
