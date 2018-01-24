$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
})

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  })
  event.stopPropagation();
})


$("input").keypress(function(event){
  if(event.which=="13")
  {
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+$(this).val()+"</li>");
    $(this).val("");
  }
})

$("#plus").on("click",function(){
  $("input").fadeToggle();
})



//=======================================================================
