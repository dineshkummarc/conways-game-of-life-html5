Componant.all = {};
window.Graphics = (function() {
  function Graphics(canvas) {
   this.canvas = canvas;
   this.ctx = this.canvas.getContext('2d');
  }
  Graphics.prototype.clear = function() {
   return this.ctx.clearRect(0,0,800, 400);
