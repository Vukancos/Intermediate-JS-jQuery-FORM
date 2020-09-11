
$('.hamburger-menu').click(function() {
    var nav = $('.nav-menu');
    var icon = $('.hamburger');
    
    nav.slideToggle(200);
    
});



$(function() {

  $('.smoothScroll').click(function() {
     if  ($(window).width() <321 ) {
      $('.nav-menu').slideToggle();
     } 
      
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 150
        }, 650);
        return false;
      }
    }
      
  });
});

