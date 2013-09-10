$(function(){
  setup_slide();
  $(window).on("keydown", find_key);

  // $("#page2").on("mousedown", function(e){
  //   console.log("down");
  //   down = e.clientX;
  // });
  // $("#page2").on("mouseup", function(e){
  //   console.log("up");
  //   up = e.clientX;
  //   configure_swipe();
  // });

  $(".sequence-prev").on("click", slide_left);
  $(".sequence-next").on("click", slide_right);
});//end doc ready
showing_slide = null;
down = 0;
up = 0;


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

// function configure_swipe() {
//   if(Math.abs(down-up) > 50) {
//     if (down > up) {
//       slide_right();
//     }
//     else if (down == up) {
//       return false;
//     }
//     else {
//       slide_left();
//     }
//   } //end greater than 50

// }// end configure swipe

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