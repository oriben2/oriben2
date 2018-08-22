(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Contact form
	$("#contact-us").submit(function(e){
	  e.preventDefault();
		// send ajax
		$.ajax({
			url: 'https://hooks.zapier.com/hooks/catch/3681722/qyzxu1/', // url where to submit the request
			type : "POST", // type of action POST || GET
			dataType : 'json', // data type
			data : $("#contact-us").serialize(), // post data || get data
			success : function(result) {
				// you can see the result from the console
				// tab of the developer tools
				console.log(result);
			},
			error: function(xhr, resp, text) {
				console.log(xhr, resp, text);
			}
		})
	});

})(jQuery); // End of use strict
