$(document).ready(function() {
  //highlight when mouse enter
 $(".links").on("mouseenter", function(){
    $(this).removeClass("unhighlighted");
    $(this).addClass("highlighted");
 }); 
  //unhighlight when mouse leave
 $(".links").on("mouseleave", function(){
    $(this).removeClass("highlighted");
    $(this).addClass("unhighlighted");
 });
  //reload embed page when link clicked
 $(".links").on("click", function(){
    var parent = $(".embededPage").parent();
    var newElement = "<embed src="+ $(this).data("link") +" class='embededPage'></embed>";
    $(".embededPage").remove();
    parent.append(newElement);
 });
  //toggle works link
  $(".works").on("click",function(){
    $(this).parent().find("ul").toggle(300);
  });
  $(".refs").on("click",function(){
    $(this).parent().find("ul").toggle(300);
  });
  
});

