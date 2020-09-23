
let box = document.getElementById("box");

//colors

document.getElementById("blue").addEventListener("click", function() {
   box.style.backgroundColor = "blue";
});

document.getElementById("red").addEventListener("click", function() {
   box.style.backgroundColor = "red";
});

document.getElementById("green").addEventListener("click", function() {
   box.style.backgroundColor = "green";
});

document.getElementById("yellow").addEventListener("click", function() {
   box.style.backgroundColor = "yellow";
});

document.getElementById("orange").addEventListener("click", function() {
   box.style.backgroundColor = "orange";
});

document.getElementById("purple").addEventListener("click", function() {
   box.style.backgroundColor = "purple";
});

document.getElementById("black").addEventListener("click", function() {
   box.style.backgroundColor = "black";
});


//effects
document.getElementById("grow").addEventListener("click", function() {
   box.style.height = "300px";
});

document.getElementById("shrink").addEventListener("click", function() {
   box.style.height = "100px";
});


 document.getElementById("tonedown").addEventListener("click", function() {
    box.style.opacity = "0.3";
 });

 document.getElementById("toneup").addEventListener("click", function() {
   box.style.opacity = "0.8";
});

document.getElementById("brighten").addEventListener("click", function() {
   box.style.filter = "brightness(80%)";
   
});

document.getElementById("darken").addEventListener("click", function() {
   box.style.filter = "brightness(20%)";
   
});

//random function





//left right reeset


 document.getElementById("left").addEventListener("click", function() {
    box.style.transform = "rotate(160deg)";
 });

 document.getElementById("right").addEventListener("click", function() {
    box.style.transform = "rotate(25deg)";
 });

 

 document.getElementById("reset").addEventListener("click", function() {
    box.style.backgroundColor="white";
    box.style.opacity= "0.5";
    box.style.filter= "brightness(50%)";
    box.style.transform="none";
    box.style.height= "200px";

});