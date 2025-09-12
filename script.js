// Make the canvas and define size
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.translate(width/2, height/2); // Move the origin

function gameLoop() {
  // Words
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 100, 100);

  requestAnimationFrame(gameLoop); // FROM THE TOP!!
}

gameLoop(); // Initial entrace to the game
