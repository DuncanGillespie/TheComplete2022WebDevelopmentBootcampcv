// alert("Working!!!");

// If you need to wait for the page to load first
// $(document).read(function(){

// })

// 1 property - get element data
// console.log($("h1").css("font-size"));

// 2 properties - set element data
// $("h1").css("color","red");

// add a class to an element
// $("h1").addClass("big-title");
// add multiple classes to an element
// $("h1").addClass("big-title margin-50 ml-auto");
// // remove class to an element
// $("h1").removeClass("big-title");

// $("button");

// Changing the text 
// $("h1").text("Good Bye");
// // $("button").text("Space out");
// $("button").html("<em>space out<em>");


// Get attribute properties
// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");

// click function 
// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

// $("input").keypress(function(event){
//     console.log(event.key);
// });

// $("input").keypress(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "pink");
//     // console.log("Test");
// });

// before(), after(), prepend() and append()
// $("h1").before("<button>before</button>");
// $("h1").after("<button>after</button>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");

// remove all of something
// $("button").remove();

// Hide show toggle fadeout fadein fadeToggle
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// })

// animate one - can only animated numerical value properties
// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5});
// })
// animate more than one thing
// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({opacity: 0.5}, {duration: 0.4});
// })