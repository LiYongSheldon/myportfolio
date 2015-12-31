//1.Hide the spoiler
$(".spoiler span").hide();
//2.Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3.when button pressed
$("button").click(function(){
  //3.1.Show spoiler
  $(this).prev().show();
  //3.2.Get rid of button
  $(this).remove();

});