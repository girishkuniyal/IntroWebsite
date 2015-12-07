$(document).ready(function() {
  $('.headBox').addClass('redeffect');
  $('g').addClass("w");
  $('.headBox').fadeTo(250,0.75);
   $('.headBox').mouseenter(function() {
       $(this).fadeTo(250,1);;
       $(this).removeClass('redeffect');
   });
   $('.headBox').mouseleave(function(){
  $('.headBox').fadeTo(250,0.75);
      $(this).addClass('redeffect');
   });
   
   
});
  