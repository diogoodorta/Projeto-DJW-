class Bola {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }
//desenha a bola na tela
   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

  //atualiza a posição da bola na tela

  update() {
   if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
   }

   if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
   }

   if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
   }

   if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
   }

   this.y += this.velY;
   this.y += this.velY;
}

//verifica a colisão entre as bolas
   collisionDetect(Bolas) {
      for (var bola of Bolas) {
         if (!(this === bola)) {
            const dx = this.x - bola.x;
            const dy = this.y - bola.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + bola.size) {
              bola= this.color = randomRGB();
            }
         }
      }
   }

}
