$(function(){
  $("#p_btn").click(show_list);
  $("#c_btn").click(show_contact);
  $("#a_btn").click(show_main);

  $(window).on("resize", function(){
    adjust_height();
  });
  adjust_height();


  navHeight = $('#nav-bar').offset().top-50;
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
  setup_slide();
  $(window).on("keydown", find_key);
});

showing_slide = null;

function adjust_height() {
  var new_height = window.innerHeight;
  console.log(new_height);
  $.each($(".page"), function(k, v){
    $(v).css("height", new_height+"px");
  });

  console.log($(".page").first().height());
}


function show_list(e) {
  var height = $('#page2').offset().top;
  $(".proj-img").hide();
  e.preventDefault();
  $('body, html').animate({scrollTop: height-30}, 'slow');
  $("#plist").fadeIn(700);
  showing_slide.effect("slide",{ direction: "right" }, 700);
  // $("#slider-holder").effect("slide",700);
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

function setup_slide() {
  $(".slide").hide();
  $(".slide").first().show();
  showing_slide = $(".slide").first();
}

function find_key(key) {
  console.log(key.keyCode);
  if (key.keyCode == 37)
  {
    slide_left();
  }
  else if (key.keyCode == 39)
  {
    slide_right();
  }
}

function slide_right() {
  if (showing_slide.prev().length == 0) {
    $(".slide").last().hide();
  }
  else {
    showing_slide.prev().hide();
  }
  // $(".animated").hide();
  $(".animated").removeClass("fadeOutLeft").removeClass("fadeInRightBig").removeClass("fadeOutRight").removeClass("fadeInLeftBig");
  showing_slide.addClass("animated fadeOutLeft");
  if (showing_slide.next().length == 0)
  {
    var next = $(".slide").first();
  }
  else
  {
    var next = showing_slide.next();
  }
  next.addClass("animated fadeInRightBig").show();
  showing_slide = next;
}

function slide_left(){
  if (showing_slide.next().length == 0) {
    $(".slide").first().hide();
  }
  else {
    showing_slide.next().hide();
  }
  // $(".animated").hide();
  $(".animated").removeClass("fadeOutLeft").removeClass("fadeInRightBig").removeClass("fadeOutRight").removeClass("fadeInLeftBig");
  showing_slide.addClass("animated fadeOutRight");
  if (showing_slide.prev().length == 0)
  {
    var prev = $(".slide").last();
  }
  else
  {
    var prev = showing_slide.prev();
  }
  prev.addClass("animated fadeInLeftBig").show();
  showing_slide = prev;
}