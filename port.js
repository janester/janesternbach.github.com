$(function(){
  $("#p_btn").click(show_list);
  $("#c_btn").click(show_contact);
  $("#a_btn").click(show_main);



  navHeight = $('#nav-bar').offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop() >= navHeight)
      {
      // sticky nav
      $("#nav-bar-holder-fixed").addClass("nav");
      var p = $("#p_btn").detach();
      var a = $("#a_btn").detach();
      var c = $("#c_btn").detach();
      $("#nav-bar-holder-fixed").append(a).append(p).append(c);
      }
    if($(window).scrollTop() < navHeight)
    {
      $("#nav-bar-holder-fixed").removeClass("nav");
      var p2 = $("#p_btn").detach();
      var a2 = $("#a_btn").detach();
      var c2 = $("#c_btn").detach();
      $("#a1").append(a2);
      $("#a2").append(p2);
      $("#a3").append(c2);
    }
  });
});


function show_list(e) {
  var height = $('#page2').offset().top;
  $(".proj-img").hide();
  e.preventDefault();
  $('body, html').animate({scrollTop: height-30}, 'slow');
  $("#plist").fadeIn(700);
  $(".slide2").effect("slide",{ direction: "right" }, 700);
  $(".slide1").effect("slide",700);
  $(".proj-img").fadeIn(2000);
}


function show_contact(e) {
  var height = $("#page3").offset().top;
  e.preventDefault();
  $("body, html").animate({scrollTop: height+30}, "slow");
  // $("#c-info").effect("slide",{ direction: "down"}, 2000);
  $("#c-info").hide();
  $("#c-info").slideDown(2000);
}



function show_main(e) {
  var height = $("#page1").offset().top;
  $("#p1-heads").hide();
  e.preventDefault();
  $("body, html").animate({scrollTop:height}, "slow");
  $("#p1-heads").effect("slide", {direction:"down"}, 1500);

}