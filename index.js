var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1 ;
randomNumber2 = Math.floor(randomNumber2*6) + 1 ;

var file1 = "./images/dice" + randomNumber1 + ".png";
var file2 = "./images/dice" + randomNumber2 + ".png";



document.querySelector(".img1").setAttribute("src",file1);
document.querySelector(".img2").setAttribute("src",file2);
var result;
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WINS";
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW!";
}
else{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🚩";
}
