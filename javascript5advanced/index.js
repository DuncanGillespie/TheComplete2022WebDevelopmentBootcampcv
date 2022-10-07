// alert("Hello!");

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML){
            case 'w':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
            case 's':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case 'd':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
            case 'j':
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
            case 'k':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
            case 'l':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
            default:

        }
    });
}

function makeSound(key){
    switch (key){
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case 'j':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case 'k':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case 'l':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        default:

    }
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);   
});

// function handleClick(){
//     // alert("I got clicked!");
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

// function housekeeper (yearsOfExperience, name, cleaningRepertoire){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//      this.clean = function(){
//          alert("Cleaning in progress...");
//      }
// }

// housekeeper1 = new housekeeper(12, "Emma", ["bathroom", "lobby", "bedroom"]);

// creating a new object 
// var housekeeper = {
//     yearsOfExperience: 12, 
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

//constructor function
// function BellBoy(name, age, hasWorkPermit, languages){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// grab the zeroth element from the page 
// $0.addEventListener("click", handleClick);

// calculator functions
// function add(num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// //calculator(4, 5, add);

// debugger;
// calculator(4, 5, multiply);