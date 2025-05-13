
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        smartSpeed: 500,
        responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
            margin: 100,
          },
          1280:{
            items:2,
            margin: 100,
          }
        }
    });

    // Banner Carousel
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000,
    })

    // REVIEWS NAVIGATION
    function ReviewsNavResize(){
      $(".navbar").scrollspy({ offset: -94 });

      var ReviewsOwlItem = $('.reviews-carousel .owl-item').width();

      $('.reviews-carousel .owl-nav').css({'width' : (ReviewsOwlItem) + 'px'});
    }

    $(window).on("resize", ReviewsNavResize);
    $(document).on("ready", ReviewsNavResize);

    // HREF LINKS
  $(document).on('click', 'a[href*="#"]', function (event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 74
      }, 1000);
    }
  }
});

    
  })(window.jQuery);




// (function ($) {
//   "use strict";

//   // NAVBAR
//   $('.navbar-nav .nav-link').on('click', function () {
//     $(".navbar-collapse").collapse('hide');
//   });

//   // REVIEWS CAROUSEL
//   $('.reviews-carousel').owlCarousel({
//     center: true,
//     loop: true,
//     nav: true,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 300,
//     smartSpeed: 500,
//     responsive: {
//       0: { items: 1 },
//       768: { items: 2, margin: 100 },
//       1280: { items: 2, margin: 100 }
//     }
//   });

//   // Banner Carousel
//   const myCarousel = document.querySelector('#myCarousel');
//   if (myCarousel) {
//     new bootstrap.Carousel(myCarousel, {
//       interval: 1500,
//     });
//   }

//   // REVIEWS NAVIGATION - with debounce
//   function ReviewsNavResize() {
//     $(".navbar").scrollspy({ offset: -94 });
//     const owlItemWidth = $('.reviews-carousel .owl-item').width();
//     $('.reviews-carousel .owl-nav').css({ 'width': `${owlItemWidth}px` });
//   }

//   function debounce(func, delay) {
//     let timeout;
//     return function () {
//       clearTimeout(timeout);
//       timeout = setTimeout(func, delay);
//     };
//   }

//   const debouncedResize = debounce(ReviewsNavResize, 200);
//   $(window).on("resize", debouncedResize);
//   $(document).ready(ReviewsNavResize);

//   // HREF LINKS Smooth Scroll
//   $('a[href*="#"]').on('click', function (event) {
//     const pathnameMatch = location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '');
//     const hostnameMatch = location.hostname === this.hostname;

//     if (pathnameMatch && hostnameMatch) {
//       let target = $(this.hash);
//       target = target.length ? target : $(`[name='${this.hash.slice(1)}']`);
//       if (target.length) {
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top - 74
//         }, 1000);
//       }
//     }
//   });

// })(jQuery);
