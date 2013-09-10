$(document).ready(function(){
  adjust_height();
  $(window).on("resize", function(){
    adjust_height();
  });
});

function adjust_height() {
  var new_height = window.innerHeight;
  console.log(new_height);
  $.each($(".page"), function(k, v){
    $(v).css("height", new_height+"px");
  });

  console.log($(".page").first().height());
}