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
  var old = showing_slide;
  showing_slide = next;
  make_hidden(old);
}

function slide_left(){
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
  var old = showing_slide;
  showing_slide = prev;
  make_hidden(old);
}

function make_hidden(old){
  setTimeout(function(){$(old).hide();}, 1000);
}