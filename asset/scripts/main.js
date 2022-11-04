$( document ).ready(function() {

	$('.services ul li:first-child').addClass('dark');

	$('.services ul li').hover(
		function() {
			console.log('yee');
			$('.services ul li:first-child').removeClass('dark');
			$( this ).addClass('dark');
		}, function() {
			$( ".services ul li" ).removeClass('dark');
			$('.services ul li:first-child').addClass('dark');
		}
	);

	$('.pricing ul li:first-child').addClass('light');

	$('.pricing ul li').hover(
		function() {
			console.log('yee');
			$('.pricing ul li:first-child').removeClass('light');
			$( this ).addClass('light');
		}, function() {
			$( ".pricing ul li" ).removeClass('light');
			$('.pricing ul li:first-child').addClass('light');
		}
	);

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('header nav ul').css('display', 'flex');
	});

});

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		margin:0,
		loop:true,
		// autoWidth:true,
		items:3
	});
  });