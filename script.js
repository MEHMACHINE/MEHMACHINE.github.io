// Make the canvas and define size
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.translate(width/2, height/2);

// Draw a rectangle
ctx.fillStyle = "black";
ctx.fillRect(0, 0 , 100, 50);

// Draw a word
ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.textFill("Sample Text", width/2, 0);
