//display the dice under the player headings
// document.getElementById("img1").src = "images/dice1.png";
// document.getElementById("img2").src = "images/dice2.png";

var randNum = (Math.floor(Math.random() * 6))+1

document.getElementById("img1").src = "images/dice"+randNum+".png";

var randNum2 = (Math.floor(Math.random() * 6))+1

document.getElementById("img2").src = "images/dice"+randNum2+".png";

document.getElementById("Winner").style.color = "white";
document.getElementById("Winner").style.fontSize = "5rem";

if (randNum == randNum2){
    document.getElementById("Winner").innerHTML = "Players are tied!!!";
} else if (randNum > randNum2){
    document.getElementById("Winner").innerHTML = "Player 1 is the winner!!!";
} else {
    document.getElementById("Winner").innerHTML = "Player 2 is the winner!!!";
}
