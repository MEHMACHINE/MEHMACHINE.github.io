const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function init() {
  // This is where you import all images and such
  square_pos_x = 0;

  window.requestAnimationFrame(draw);

}

function draw() {
  // Draw
  ctx.clearRect(0,0,400,400);

  square_pos_x += 10;
  ctx.fillRect(square_pos_x,0,50,50);

  window.requestAnimationFrame(draw);

}
