(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

  });


})(jQuery);

function sendEmail() {
  var emailBody = encodeURI($('.js-email-message').val());
  window.location.href = 'mailto:derek@dmabbey.com?body='+ emailBody;
}
