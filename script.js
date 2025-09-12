// Make the canvas and define size
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.translate(width/2, height/2); // Move the origin

var xpos = 0;
var ypos = 0;

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        // Do something for "down arrow" key press.
        break;
      case "ArrowUp":
        // Do something for "up arrow" key press.
        break;
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        xpos--;
        break;
      case "ArrowRight":
        // Do something for "right arrow" key press.
        xpos++;
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
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
  xpos += 5;
  ypos += 5;
}

function draw () {
  ctx.fillStyle = "rgb(0 255 255 / 25%)";
  ctx.fillRect(xpos, ypos, xpos + 50, ypos + 50);
  // Draw
}

gameLoop(); // Initial entrace to the game
