// Make the canvas and define size
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.translate(width/2, height/2); // Move the origin

var xpos = 0;
var ypos = 0;

function gameLoop() {
  // Words
  ctx.fillStyle = "black";
  ctx.fillRect(-width/2, -height/2, width, height);

  update();
  draw();

  requestAnimationFrame(gameLoop); // FROM THE TOP!!
}

function update() {
  // stuff
  xpos += 5;
  ypos += 5;
}

function draw () {
  ctx.fillStyle = "rgb(200 200 200 / 25%)";
  ctx.fillRect(xpos, ypos, xpos + 50, ypos + 50);
  // Draw
}

gameLoop(); // Initial entrace to the game
