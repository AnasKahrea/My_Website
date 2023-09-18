/**
    * Template Name: Anas CV
    * Template URL: www.anaskahreyah.com
    * Author: Anas Kahreyah
    * License: https://www.facebook.com/AnasKahrea/
 */
!(function ($) {
  "use strict";


  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-all").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });


  // Adjust Background Height.
  $(window).resize(function () {
    var winH = $(window).height(),
      introH = $('#1hero, #1hero .1carousel-container');
    introH.height(winH);

  }).resize();


  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.navbar a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.navbar, .mobile-nav').length) {
          $('.navbar .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 68) {
      $('#header').addClass('header-scrolled');
      //* $('#main-logo h1').addClass('d-none');  hide the header title
    } else {
      $('#header').removeClass('header-scrolled');
      //* $('#main-logo h1').removeClass('d-none');
    }
  });

  if ($(window).scrollTop() > 68) {
    $('#header').addClass('header-scrolled');
  }


  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function () {
    aos_init();
  });


  // Trigger Nice Scroll Plugin
  $('html').niceScroll({
    cursorcolor: '#7051EF',
    cursorwidth: 10,
    cursorborderradius: 0,
    cursorborder: '1px solid #7051EF'
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(200).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });


  // Wow Js
  new WOW().init();


})(jQuery);

let copyText = document.querySelector(".copy-text");
copyText.querySelector("button.class1").addEventListener("click", function () {
	let input = copyText.querySelector(".text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});


let copyText2 = document.querySelector(".copy-text2");
copyText.querySelector("button.class2").addEventListener("click", function () {
	let input = copyText.querySelector(".text2");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});

