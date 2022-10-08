var index = 1;
var maxIndex = $('img').length;

$("#leftArrow").on("click", function(){
    $("h1").css({color: "red"});
    $(".image"+index).hide();
    index--;
    if(index <= 0){
        index = 5;
    }
    $(".image"+index).show();
})
$("#rightArrow").on("click", function(){
    $("h1").css({color: "red"});
    $(".image"+index).hide();
    index++;
    if(index > maxIndex){
        index = 1;
    }
    $(".image"+index).show();
})

$(".dot1").on("click", function(){
    for(var i = 1; i < 6; i++){
        $(".image"+i).hide();
    }
    $(".image"+1).show();
})
$(".dot2").on("click", function(){
    for(var i = 1; i < 6; i++){
        $(".image"+i).hide();
    }
    $(".image"+2).show();
})
$(".dot3").on("click", function(){
    for(var i = 1; i < 6; i++){
        $(".image"+i).hide();
    }
    $(".image"+3).show();
})
$(".dot4").on("click", function(){
    for(var i = 1; i < 6; i++){
        $(".image"+i).hide();
    }
    $(".image"+4).show();
})
$(".dot5").on("click", function(){
    for(var i = 1; i < 6; i++){
        $(".image"+i).hide();
    }
    $(".image"+5).show();
})