$(document).ready(function() {
	//marks ingredients when bought
	$('ul li').click(function() {
	$(this).css('text-decoration', 'underline');
	});
	//use can track of direction
	$('section ol li').mouseover(function() {
		$(this).css('text-decoration', 'underline');
	});
	$('section ol li').mouseleave(function() {
		$(this).css('text-decoration', 'none');
	});
	//button for hiding all the pictures
	$('button').click(function() {
		$('img').fadeOut();
	});
});

