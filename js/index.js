$(document).ready(function(){
	$('.header__slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows:true,
	  dots:false,
	});
	$('.portfolio-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows:true,
	  dots:true,
	  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:false,
		dots:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:false,
		dots:false,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:false,
		dots:false,
      }
    }
  ]
	});
	$('.tweets-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows:true,
	  dots:false,
	});
	if(document.documentElement.clientWidth < 1300){
		var j = 0;
		$('.header__list_item').click(function() {
			$('.header__list').slideUp(1000);
			j++;
			console.log(j);
		});
		$('.nav__btn').click(function() {
			if(j%2 == 0){
	 			$('.header__list').slideDown(1000);
			}else if(j%2 == 1){
				$('.header__list').slideUp(1000);
			}
			j++;
			console.log(j);
		});
	}
});
