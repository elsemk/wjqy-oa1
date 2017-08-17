$(function () {
   $('.loader').animate({
       height:0
   },800);
   $('.top-btn').bind('click',function () {
       $('body').toggleClass('sm-menu');
   });
   $('.menu-list').bind('click',function () {
       $(this).toggleClass('active');
       if($(this).hasClass('active')){
           $(this).siblings().removeClass('active');
       }
   });
});
