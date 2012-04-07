function initMap() {

var context, canvas, sprite;

canvas = document.getElementById('c');
context = canvas.getContext('2d');

//this is code for just generating a graph onto the canvas
/**
* This is the code block that will generate the horizontal lines onto the canvas
* I am aware it would be easier using loops to generate these lines but for 
* practice and key stroke memory I wrote out each individual lineTo.
*/
context.lineTo(20,800);
context.lineTo(20,0);
context.lineTo(40,0);
context.lineTo(40,800);
context.lineTo(60,800);
context.lineTo(60,0);
context.lineTo(80,0);
context.lineTo(80,800);
context.lineTo(100,800);
context.lineTo(100,0);
context.lineTo(120,0);
context.lineTo(120,800);
context.lineTo(140,800);
context.lineTo(140,0);
context.lineTo(160,0)
context.lineTo(160,800);
context.lineTo(180,800);
context.lineTo(180,0);
context.lineTo(200,0);
context.lineTo(200,800);
context.lineTo(220,800);
context.lineTo(220,0);
context.lineTo(240,0);
context.lineTo(240,800);
context.lineTo(260,800);
context.lineTo(260,0);
context.lineTo(280,0);
context.lineTo(280,800);
context.lineTo(300,800);
context.lineTo(300,0);
context.lineTo(320,0);
context.lineTo(320,800);
context.lineTo(340,800);
context.lineTo(340,0);
context.lineTo(360,0);
context.lineTo(360,800);
context.lineTo(380,800);
context.lineTo(380,0);
context.lineTo(400,0);
context.lineTo(400,800);
context.lineTo(420,800);
context.lineTo(420,0);
context.lineTo(440,0);
context.lineTo(440,800);
context.lineTo(460,800);
context.lineTo(460,0);
context.lineTo(480,0);
context.lineTo(480,800);
context.lineTo(500,800);
context.lineTo(500,0);
context.lineTo(520,0);
context.lineTo(520,800);
context.lineTo(540,800);
context.lineTo(540,0);
context.lineTo(560,0);
context.lineTo(560,800);
context.lineTo(580,800);
context.lineTo(580,0);
context.lineTo(600,0);
context.lineTo(600,800);
context.lineTo(620,800);
context.lineTo(620,0);
context.lineTo(640,0);
context.lineTo(640,800);
context.lineTo(660,800);
context.lineTo(660,0);
context.lineTo(680,0);
context.lineTo(680,800);
context.lineTo(700,800);
context.lineTo(700,0);
context.lineTo(720,0);
context.lineTo(720,800);
context.lineTo(740,800);
context.lineTo(740,0);
context.lineTo(760,0);
context.lineTo(760,800);
context.lineTo(780,800);
context.lineTo(780,0);
context.lineTo(800,0);
context.lineTo(800,800);
// Will tell the browser to draw each line we have just coded.
context.stroke();

// Telling the context area to move to these co-ordinates for the start 
// point of the vertical lines
context.moveTo(0,20);

/**
* Again I am aware that it would be easier to generate the lines for the 
* canvas using loops but for practice and learning purposes I have coded 
* each individual lineTo() and their co-ordinance.
*/
context.lineTo(800,20);
context.lineTo(800,40);
context.lineTo(0,40);
context.lineTo(0,60);
context.lineTo(800,60);
context.lineTo(800,80);
context.lineTo(0,80);
context.lineTo(0,100);
context.lineTo(800,100);
context.lineTo(800,120);
context.lineTo(0,120);
context.lineTo(0,140);
context.lineTo(800,140);
context.lineTo(800,160);
context.lineTo(0,160);
context.lineTo(0,180);
context.lineTo(800,180);
context.lineTo(800,200);
context.lineTo(0,200);
context.lineTo(0,220);
context.lineTo(800,220);
context.lineTo(800,240);
context.lineTo(0,240);
context.lineTo(0,260);
context.lineTo(800,260);
context.lineTo(800,280);
context.lineTo(0,280);
context.lineTo(0,300);
context.lineTo(800,300);
context.lineTo(800,320);
context.lineTo(0,320);
context.lineTo(0,340);
context.lineTo(800,340);
context.lineTo(800,360);
context.lineTo(0,360);
context.lineTo(0,380);
context.lineTo(800,380);
context.lineTo(800,400);
context.lineTo(0,400);

// will tell the browser to draw the lines that have been coded above.
context.stroke();
}
/**function Sprite(name, height, width) {
	this.name = name;
	this.height = height;
	this.width = width;
	this.loaded = false;
}
var sprite = Sprite('life',20,20);
sprite.drawImage();
*/
  window.Sprite = (function() {
    function Sprite(name, src, options) {
      this.name = name;
      this.src = src;
      this.options = options != null ? options : {};
      this.image = new Image();
      this.loaded = false;
      this.x = this.options.x || 0;
      this.y = this.options.y || 0;
    }
    Sprite.prototype.preload = function() {
      return this.image.load(__bind(function() {
        var image;
        image = this.image[0];
        this.height = this.options.height || image.height;
        this.width = this.options.width || image.width;
        $('html').trigger('imageload', this.name);
        return this.loaded = true;
      }, this)).attr('src', this.src);
    };
    Sprite.prototype.place = function(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      return this;
    };
    Sprite.prototype.rotate = function(r) {
      this.r = r;
      return this;
    };
    Sprite.prototype.resize = function(height, width) {
      if (height == null) {
        height = this.height;
      }
      if (width == null) {
        width = this.width;
      }
      this.height = height;
      this.width = width;
      return this;
    };
    Sprite.prototype.draw = function(ctx) {
      var pivotX, pivotY;
      if (this.r) {
        pivotX = this.x + (this.width / 2);
        pivotY = this.y + (this.height / 2);
        ctx.save();
        ctx.translate(pivotX, pivotY);
        ctx.rotate(this.r * 3.14);
        ctx.drawImage(this.image[0], -(this.width / 2), -(this.height / 2), this.width, this.height);
        ctx.translate(-pivotX, -pivotY);
        ctx.restore();
      } else {
        ctx.drawImage(this.image[0], this.x, this.y, this.width, this.height);
      }
      return this;
    };
    return Sprite;
  })();

var sprite = new Sprite('life','','');
