$(document).ready(function() {
   var stickyNavTop = $('.cos').offset().top;

   var stickyNav = function(){
   var scrollTop = $(window).scrollTop();

   if (scrollTop > stickyNavTop) { 
      $('.cos').addClass('sticky');
   } else {
      $('.cos').removeClass('sticky');
    }
   };

   stickyNav();

   $(window).scroll(function() {
      stickyNav();
   });
   });