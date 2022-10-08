var index = 1;
var maxIndex = $('img').length;

// left arrow 
$("#leftArrow").on("click", function(){
    $("h1").css({color: "red"});
    $(".image"+index).hide();
    index--;
    if(index <= 0){
        index = 5;
    }
    $(".image"+index).show();
})
// right arrow 
$("#rightArrow").on("click", function(){
    $("h1").css({color: "red"});
    $(".image"+index).hide();
    index++;
    if(index > maxIndex){
        index = 1;
    }
    $(".image"+index).show();
})

// dots 
$(".dot").click(function(){
    currentDot = $(this).index();
    for(var i = 1; i < 6; i++){
        $(".image"+i).hide();
    }
    $(".image"+(currentDot+1)).show();
})