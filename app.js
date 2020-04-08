var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var positionX = 20;
var positionY = 15;
var size = 50;

for (var rectCounter = 1; rectCounter <= 15; rectCounter++) {
    if (rectCounter % 15 === 0) {
        context.fillStyle = 'rgba(0,255,0,.5)';
    } else if (rectCounter % 3 === 0) {
        context.fillStyle = 'rgba(0,0,255,.5)';
    } else if (rectCounter % 5 === 0) {
        context.fillStyle = 'rgba(255,255,0,.5)';
    } else {
        context.fillStyle = 'rgba(0,0,0,.5)';
    }
    context.fillRect(positionX * rectCounter, positionY * rectCounter, size, size);
}