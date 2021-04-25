/*
Template Name: Dukkan - eCommerce Mobile Template 
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/

(function($) {
  "use strict";

  // Add active state to sidbar nav links
  // start_slider

  $('.start_slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      autoplay: true,
      slidesToShow: 1
    });

  // list_slider

  $('.list_slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1.3,
    speed: 300,
    autoplay: true,
    slidesToScroll: 1
  });

  // verticle_slider

  $('.verticle_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    speed: 300,
    autoplay: true,
    slidesToScroll: 1
  });

  // detailverticle_slider

  $('.detailverticle_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    speed: 300,
    autoplay: true,
    slidesToScroll: 1
  });

  // search_slider

  $('.search_slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2.3,
    speed: 300,
    autoplay: true,
    slidesToScroll: 1
  });

})(jQuery);