const canvas = document.getElementById("flappyCanvas");
const ctx = canvas.getContext("2d");
const restartBtn = document.getElementById("restartBtn");

let frames = 0;
let score = 0;
let gameOver = false;

// Objeto do Passarinho
const bird = {
  x: 50,
  y: 150,
  width: 20,
  height: 20,
  gravity: 0.25,
  jump: 4.6,
  velocity: 0,

  draw() {
    ctx.fillStyle = "#f4c430";
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    ctx.stroke();

    // Olho do passarinho
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(this.x + 14, this.y + 6, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(this.x + 15, this.y + 6, 1.5, 0, Math.PI * 2);
    ctx.fill();
  },

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Colisão com o chão
    if (this.y + this.height >= canvas.height) {
      this.y = canvas.height - this.height;
      gameOver = true;
    }

    // Limite do teto
    if (this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
  },

  flap() {
    this.velocity = -this.jump;
  }
};

// Gerenciador de Canos
const pipes = {
  position: [],
  width: 44,
  gap: 110,
  dx: 2,

  draw() {
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];
      let topYPos = p.y;
      let bottomYPos = p.y + this.gap;

      ctx.fillStyle = "#73bf2e";
      ctx.strokeStyle = "#2e5211";
      ctx.lineWidth = 2;

      // Cano Superior
      ctx.fillRect(p.x, 0, this.width, topYPos);
      ctx.strokeRect(p.x, 0, this.width, topYPos);

      // Cano Inferior
      ctx.fillRect(p.x, bottomYPos, this.width, canvas.height - bottomYPos);
      ctx.strokeRect(p.x, bottomYPos, this.width, canvas.height - bottomYPos);
    }
  },

  update() {
    if (frames % 100 === 0) {
      this.position.push({
        x: canvas.width,
        y: Math.floor(Math.random() * (canvas.height - this.gap - 100)) + 40
      });
    }

    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];
      p.x -= this.dx;

      // Detecção de Colisão
      if (
        bird.x + bird.width > p.x &&
        bird.x < p.x + this.width &&
        (bird.y < p.y || bird.y + bird.height > p.y + this.gap)
      ) {
        gameOver = true;
      }

      // Incremento de Pontuação
      if (p.x + this.width < bird.x && !p.passed) {
        score++;
        p.passed = true;
      }

      // Remover cano fora de tela
      if (p.x + this.width <= 0) {
        this.position.shift();
        i--;
      }
    }
  },

  reset() {
    this.position = [];
  }
};

// Interface de Pontuação
function drawHUD() {
  ctx.fillStyle = "#FFF";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.font = "bold 22px Arial";
  ctx.fillText(`Pontos: ${score}`, 15, 35);
  ctx.strokeText(`Pontos: ${score}`, 15, 35);

  if (gameOver) {
    ctx.fillStyle = "#e74c3c";
    ctx.font = "bold 28px Arial";
    ctx.fillText("Game Over!", 85, canvas.height / 2);
    ctx.strokeText("Game Over!", 85, canvas.height / 2);
  }
}

// Loop do Jogo
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!gameOver) {
    bird.update();
    pipes.update();
    frames++;
  }

  pipes.draw();
  bird.draw();
  drawHUD();

  requestAnimationFrame(loop);
}

function resetGame() {
  bird.y = 150;
  bird.velocity = 0;
  pipes.reset();
  score = 0;
  frames = 0;
  gameOver = false;
}

// Eventos de Entrada
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    bird.flap();
  }
});

canvas.addEventListener("click", () => {
  bird.flap();
});

restartBtn.addEventListener("click", resetGame);

// Executar
loop();
