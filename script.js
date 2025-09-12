// Make the canvas and define size
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const char_velocity = 2;
ctx.translate(width/2, height/2); // Move the origin

var xpos = 0;
var ypos = 0;

window.addEventListener(
  "keydown",
  (event) => {
    switch (event.key) {
      case "ArrowDown":
        ypos -= char_velocity;
        break;
      case "ArrowUp":
        ypos += char_velocity;
        break;
      case "ArrowLeft":
        xpos -= char_velocity;
        break;
      case "ArrowRight":
        xpos += char_velocity;
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  },
  true,
);

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
  //xpos += 5;
  //ypos += 5;
}

function draw () {
  ctx.fillStyle = "rgb(0 255 255 / 25%)";
  ctx.fillRect(xpos, ypos, xpos + 50, ypos + 50);
  // Draw
}

gameLoop(); // Initial entrace to the game
