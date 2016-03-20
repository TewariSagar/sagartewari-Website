var dotArray = [];
var radius;
var x;
var vx;
var vy;
var color;
var canvas;
var ctx;


$(function () {
    var i;
    canvas = document.getElementById("animation");
    ctx=canvas.getContext('2d');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    console.log(canvas.width, canvas.height);
    for(i=0; i < 40; i++) {
        dotArray[i] = new Parameter();
    }
    requestAnimationFrame(draw);
});

function Parameter(){

    this.radius = 5;
    this.x = window.innerWidth*Math.random();
    this.y=window.innerHeight*Math.random();
    this.vx=12*Math.random();
    this.vy=12*Math.random();
    this.color =getRandomColor();
    console.log(this.color);
    }
    
    Parameter.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    }
    
    Parameter.prototype.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
            this.vy = -this.vy;
        }
if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
  this.vx = -this.vx;
}
    }

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var col = '#';
    for (var i = 0; i < 6; i++ ) {
        col += letters[Math.floor(Math.random() * 16)];
    }
    return col;
}

function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(var i=0; i< dotArray.length; i++) {
        dotArray[i].draw();
        dotArray[i].move();
    }
    requestAnimationFrame(draw);
}

