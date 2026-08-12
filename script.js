const canvas = document.getElementById("flappyCanvas");
const ctx = canvas.getContext("2d");
const restartBtn = document.getElementById("restartBtn");

// Estado do Jogo
let frames = 0;
let score = 0;
let gameOver = false;

// Passarinho
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
    ctx.stroke();
  },

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Colisão com o chão
    if (this.y + this.height >= canvas.height) {
      this.y = canvas.height - this.height;
      gameOver = true;
    }

    // Limite superior
    if (this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
  },

  flap() {
    this.velocity = -this.jump;
  }
};

// Canos (Obstáculos)
const pipes = {
  position: [],
  top: { sX: 56, sY: 3 },
  bottom: { sX: 84, sY: 3 },
  width: 40,
  gap: 100,
  dx: 2,

  draw() {
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];
      let topYPos = p.y;
      let bottomYPos = p.y + this.gap;

      // Cano Superior
      ctx.fillStyle = "#73bf2e";
      ctx.fillRect(p.x, 0, this.width, topYPos);
      ctx.strokeRect(p.x, 0, this.width, topYPos);

      // Cano Inferior
      ctx.fillRect(p.x, bottomYPos, this.width, canvas.height - bottomYPos);
      ctx.strokeRect(p.x, bottomYPos, this.width, canvas.height - bottomYPos);
    }
  },

  update() {
    // Adicionar novo cano a cada 120 frames
    if (frames % 120 === 0) {
      this.position.push({
        x: canvas.width,
        y: Math.floor(Math.random() * (canvas.height - this.gap - 100)) + 50
      });
    }

    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];

      // Mover cano para a esquerda
      p.x -= this.dx;

      // Colisão com o Passarinho
      if (
        bird.x + bird.width > p.x &&
        bird.x < p.x + this.width &&
        (bird.y < p.y || bird.y + bird.height > p.y + this.gap)
      ) {
        gameOver = true;
      }

      // Pontuação
      if (p.x + this.width < bird.x && !p.passed) {
        score++;
        p.passed = true;
      }

      // Remover canos fora da tela
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

// Desenhar Pontuação e Tela de Game Over
function drawHUD() {
  ctx.fillStyle = "#FFF";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.font = "24px Arial";
  ctx.fillText(`Pontos: ${score}`, 10, 30);
  ctx.strokeText(`Pontos: ${score}`, 10, 30);

  if (gameOver) {
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over!", 80, canvas.height / 2);
  }
}

// Loop Principal
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

// Reiniciar Jogo
function resetGame() {
  bird.y = 150;
  bird.velocity = 0;
  pipes.reset();
  score = 0;
  frames = 0;
  gameOver = false;
}

// Controles
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    bird.flap();
  }
});

canvas.addEventListener("click", () => {
  bird.flap();
});

restartBtn.addEventListener("click", resetGame);

// Iniciar Loop
loop();
