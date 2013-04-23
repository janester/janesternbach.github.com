$(function(){
  $("#p_btn").click(show_list);
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
  var height = $('#first_p').offset().top;
  e.preventDefault();
  $('body').animate({scrollTop: height-60}, 'slow');
  $("#plist").fadeIn(700);
  $(".slide2").effect("slide",{ direction: "right" }, 700);
  $(".slide1").effect("slide",700);
}







//     }

//     if($(window).scrollTop() < scrollTop){
//       $('a#logo-link').fadeOut('slow', function() {
//         // Animation complete
//       });
//       $('nav').removeAttr('style');

//       $('#navigation-bar').removeAttr('style');

//     }
//   })
// })