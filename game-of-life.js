function initMap() {

var context, canvas;

canvas = document.getElementById('c');
context = canvas.getContext('2d');

context.moveTo(canvas.width/2-100, canvas.height/2+50);
context.lineTo(250, 300);
context.lineTo(300,250);
context.stroke();
}
