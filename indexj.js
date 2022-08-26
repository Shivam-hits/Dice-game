//for first image
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1= "dice"+randomNumber1+".png";
var randomImageSource1="Images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

//for second image 
var randomNumber2=Math.floor(Math.random()*6)+1;             //here we do not need to change vairable name (it can be same as above ) 
var randomDiceImage2= "dice"+randomNumber2+".png";       // w only need to chage the selected query. but as we have to compair we need to change the variable name.                                  
var randomImageSource2="Images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// to decide winner
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 win 🎉"
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 win 🎉"
}
else
{
    document.querySelector("h1").innerHTML = "Draw"
}
