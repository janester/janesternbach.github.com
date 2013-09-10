$(function(){
  $("#p_btn").click(show_list);
  $("#c_btn").click(show_contact);
  $("#a_btn").click(show_main);

  $("#barcode-img").on("mouseover", function(){
    $(this).attr("src", "assets/images/barcode/placeit-barcode2.png");
  });
  $("#barcode-img").on("mouseleave", function(){
    $(this).attr("src", "assets/images/barcode/placeit-barcode.png");
  });


  // $(window).on("resize", function(){
  //   var new_height = $(window).height();
  //   console.log(new_height);
  //   $.each($(".page"), function(k, v){
  //     $(v).css("height", new_height+"px")
  //   })

  //   console.log($(".page").first().height())
  // })

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
  $(".animated").removeClass("fadeOutLeft").removeClass("fadeInRightBig").removeClass("fadeOutRight").removeClass("fadeInLeftBig").removeClass("animated");
  $("#sequence").children().hide();
  var height = $('#page2').offset().top;
  // $(".proj-img").hide();
  e.preventDefault();
  $('body, html').animate({scrollTop: height-30}, 'slow');
  $("#sequence").effect("slide",{ direction: "right" }, 1000);
  $("#sequence").children().fadeIn(2000);
  // $(".proj-img").fadeIn(2000);
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