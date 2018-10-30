$(function(){

	$.scrollify({
		section : ".sections",
		sectionName : "page"
	});
	$('#about-block').click(function(){
		$.scrollify.move('#about');
	});
	$('#gallery-block').click(function(){
		$.scrollify.move('#gallery');
	});
	$('#location-block').click(function(){
		$.scrollify.move('#location');
	});
	$('#contact-block').click(function(){
		$.scrollify.move('#location');
	});

	$('#about-block').hover(function(){
		$('#about').stop().slideToggle();
	});
	$('#gallery-block').hover(function(){
		$('#gallery').stop().slideToggle();
	});
	$('#location-block').hover(function(){
		$('#location').stop().slideToggle();
	});
	$('#contact-block').hover(function(){
		$('#contact').stop().slideToggle();
	});

	$('.first-circle').circleProgress({
		value: 0.64
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(14 * progress) + '<i>%</i>');
	});

	$('.second-circle').circleProgress({
		value: 0.37
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(9 * progress) + '<i>%</i>');
	});
	$('.third-circle').circleProgress({
		value: 0.97
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(77 * progress) + '<i>%</i>');
	});

});

$(function() {
  var viewPortWidth = $(window).width();

  $(window).scroll(function(event) {
    event.preventDefault();
    if (viewPortWidth > 480) {
      if ($(this).scrollTop() > 180) {
        $('.scrollTo-top').fadeIn();
      } else {
        $('.scrollTo-top').fadeOut();
      }
    }
  });

  $('.scrollTo-top').click(function(event) {
    $('html, body').animate({scrollTop : 0 }, 600);
    event.preventDefault();
  });
});
