(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav'),
		$form = $('#contact-form');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#top a, .scrolly').scrolly({
			speed: 1000,
		});
	
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Ajax Email
		$form.submit(function(e) {
			e.preventDefault();
			var $formData = $form.serialize();
			console.log('Submitted!');
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "email.php",
		// 		data: $formData
		// 	})
		});

})(jQuery);
