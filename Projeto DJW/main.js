const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 900;
const height = canvas.height = 500;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// define a cor das bolinhas

function randomRGB() {
  return '#FF4500';
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 30) {
   const size = random(15,25);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(7,7),
      random(7,7),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.50)'; 
   ctx.fillRect(0, 0,  width, height);

   for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}

loop();
