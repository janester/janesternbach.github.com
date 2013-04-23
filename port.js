$(function(){
  $("#p_btn").click(show_list);
  $("#c_btn").click(show_contact);

  $("#c-img-g").mouseenter(function(){$("#c-img-g").attr("src", "assets/images/github2.png");});
  $("#c-img-e").mouseenter(function(){$("#c-img-e").attr("src", "assets/images/email2.png");});
  $("#c-img-t").mouseenter(function(){$("#c-img-t").attr("src", "assets/images/twitter2.png");});
  $("#c-img-l").mouseenter(function(){$("#c-img-l").attr("src", "assets/images/linkedin2.png");});
  $("#c-img-g").mouseleave(function(){$("#c-img-g").attr("src", "assets/images/github.png");});
  $("#c-img-e").mouseleave(function(){$("#c-img-e").attr("src", "assets/images/email.png");});
  $("#c-img-t").mouseleave(function(){$("#c-img-t").attr("src", "assets/images/twitter.png");});
  $("#c-img-l").mouseleave(function(){$("#c-img-l").attr("src", "assets/images/linkedin.png");});

  navHeight = $('#nav-bar').offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop() >= navHeight)
      {
      // sticky nav
      $("#nav-bar-holder-fixed").addClass("nav");
      var p = $("#p_btn").detach();
      var a = $("#a_btn").detach();
      var c = $("#c_btn").detach();
      $("#nav-bar-holder-fixed").append(p).append(a).append(c);
      }
    if($(window).scrollTop() < navHeight)
    {
      $("#nav-bar-holder-fixed").removeClass("nav");
      var p2 = $("#p_btn").detach();
      var a2 = $("#a_btn").detach();
      var c2 = $("#c_btn").detach();
      $("#nav-bar").append(p2).append(a2).append(c2);
    }
  });
});


function show_list(e) {
  var height = $('#page2').offset().top;
  e.preventDefault();
  $('body').animate({scrollTop: height-30}, 'slow');
  $("#plist").fadeIn(700);
  $(".slide2").effect("slide",{ direction: "right" }, 700);
  $(".slide1").effect("slide",700);
}


function show_contact(e) {
  var height = $("#page3").offset().top;
  e.preventDefault();
  $("body").animate({scrollTop: height+30}, "slow");
  // $("#c-info").effect("slide",{ direction: "down"}, 2000);
  $("#c-info").hide();
  $("#c-info").slideDown(2000);
}