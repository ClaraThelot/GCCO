$(document).ready(function(){
    $('.demo').slick({
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 1000,
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