// ===== Scroll to Top ====
$(window).scroll(function () {
	if ($(this).scrollTop() >= 50) {
		// If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200) // Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200) // Else fade out the arrow
	}
})
$(function () {
	$('#return-to-top').click(function () {
		$('html,body').animate({ scrollTop: $('.container').offset().top }, '1000')
		return false
	})
})
