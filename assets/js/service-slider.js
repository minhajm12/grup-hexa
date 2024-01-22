// Blog Slider

$(document).ready(function(){
    $('.services').owlCarousel({
        margin:20,
        // infinite:true,
        loop:true,
        nav: false,
        dots:true,
        dotsEach: true,
        autoplay:true,
        autoplayTimeout:4000,
        slideToScroll:1,
        responsive:{
            0:{
                items:1,
                autoplayTimeout:1000,
            },
            600:{
                items:2,
                autoplayTimeout:1500
            },
            1300:{
                items:3
            },
            1500:{
                items:3
            }
        }
      })
});
