   // image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage );

// image2

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage2 =  "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

 //
 // change text


 if ( randomDiceImage < randomDiceImage2) {
  document.querySelector("h1") .innerHTML = " player 2 is 🚩 winner";
 }

else if (randomDiceImage > randomDiceImage2) {
    document.querySelector("h1") .innerHTML =" player 1 is 🚩 winner";

}

else {
          document.querySelector("h1") .innerHTML = "draw ";
}
