let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -4 / Math.PI;
let ballRadius = 15;

const renderBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#8a2be2";
  ctx.fill();
  ctx.closePath();
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderBall();
  if (x + dx > (canvas.width - ballRadius) || x + dx < 0) {
    dx = -dx;
  }

  if (y + dy > (canvas.height - ballRadius) || y + dy < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
};

let moveBall = setInterval(draw, 10);