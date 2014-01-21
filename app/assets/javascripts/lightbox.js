$(document).ready(function(){
	
	$(document).on('show', '#sbLightbox', function(){
		$(this).removeClass('hide');
	});
	$('.modal-backdrop').click(function(){
		$('.lightbox').removeClass('in').addClass('hide');
		$(this).removeClass('in').addclass('hide');
	})
});