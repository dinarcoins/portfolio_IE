 $(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
  });
 });

 $(function () {
  'use strict'

  $("[data-trigger]").on("click", function () {
      var trigger_id = $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
      }
  });

  $(".btn-close").click(function (e) {
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  });
 });

 jQuery(document).ready(function($){
  var offset = 300,
  offset_opacity = 1200,
  scroll_top_duration = 700,
  $back_to_top = $('.cd-top');
  $(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) {
  $back_to_top.addClass('cd-fade-out');
  }
  });
  
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
    scrollTop: 0 ,
       }, 
        scroll_top_duration
       );
    });
 });

//  function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
//  }
