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
        slideToScroll:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
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
