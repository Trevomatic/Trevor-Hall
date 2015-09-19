$(document).ready(function(){

  console.log('hello tiger');

  $('.header').click(function(){
    console.log('oh, hey there');
  });

  $('a[href^="#"]').on('click',function (e) {
      console.log('made it')
      e.preventDefault();

      var target = this.hash;
      console.log(target);
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
//   $('html, body').stop().animate({
//      'scrollTop': $target.offset().top
// }, 900, 'swing');
});

var clickedATag = function(){
  console.log('clicked');
}