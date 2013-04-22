$(function(){
  $("#p_btn").click(show_list);

});

function show_list(e) {
  $("#plist").hide();
  var height = $('#page2').offset().top;
  e.preventDefault();
  $('body').animate({scrollTop: height}, 'slow');
  $("#plist").fadeIn(700);
  $(".slide2").effect("slide",{ direction: "right" }, 700);
  $(".slide1").effect("slide",700);
}