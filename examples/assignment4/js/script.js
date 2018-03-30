$(function(){
$('#getStarted, #finish',#previous, .hide, #survey).hide();
$('#howTo li').show();
$('#howTo li').first().show();

//alert("hello")
$('#title').on('mouseover',function(){
$('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');

$('getStarted').on('click'),function(){
  $('.hide, #next, #previous, #finish').hide();
  $('survey').show();

});

//survey
$('yes').on('click',function(){
  $('surveytitle').css("background-color","green");
  $('survey').css("border","1px solid green","background":#cccc
}


$('#title').on('mouseleave',function(){
$('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');



});
$('#next').on('click',function(){
  var currentItem = $('li.active');
  var nextItem $('li.active').next();

  currentItem.toggleClass('active');
var  NextItem.toggleClass('active');

  if($('li').last().hasClass('active')) {
    $('next').hide();
    $('#finish').show();

  } else {$('#next').show()}
  )


});
$('#title').on('mouseover',function(){
$('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');

$('getStarted')

});




});
$('#previous').on('click',function(){
  var currentItem = $('li.active');
  var previousItem $('li.active').prev();

  currentItem.toggleClass('active');
  previousItem.toggleClass('active');

  if($('li').last().hasClass('active')) {
    $('next').hide();
    $('#finish').show();

  } else {$('#next').show()}
  )


});
});
