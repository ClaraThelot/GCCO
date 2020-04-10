$(document).ready(function(){
    $('.demo').slick({
        // Enables auto play of slides
        autoplay: true,
        // Auto play change interval
        autoplaySpeed: 3000,
        // Current slide indicator dots
        dots: true

        /*
        responsive: [{
	    breakpoint: 1024,
	    settings: {
	      slidesToShow: 3,
	      infinite: true
	    }
	  }, {
	    breakpoint: 600,
	    settings: {
	      slidesToShow: 2,
	      dots: true
	    }
	  }, {
	    breakpoint: 300,
	    settings: "unslick" // destroys slick
	  }]
        */

    });
});