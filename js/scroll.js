$(document).ready(function(){
	$('a[href^="#"]').on('click',function(e){
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);

		$("html , body").animate({
			'scrollTop':$target.offset().top,
		},
		1000,
		'swing',
		);
	});
	var nav = $("#nav");
	var fixedTop = 'fixed-top';
	var homeHeight = $("#home").height();
	$(window).scroll(function(){
		if($(this).scrollTop() > homeHeight){
			nav.addClass(fixedTop);

		}
		else{
			nav.removeClass(fixedTop);

		}
	})
})