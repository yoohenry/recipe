$(document).ready(function() {
	$('ul li').click(function() {
	$(this).css('text-decoration', 'underline');
	});

	$('section ol li').mouseover(function() {
		$(this).css('text-decoration', 'underline');
	});
	$('section ol li').mouseleave(function() {
		$(this).css('text-decoration', 'none');
	});

	$('button').click(function() {
		$('img').fadeOut();
	});
});

