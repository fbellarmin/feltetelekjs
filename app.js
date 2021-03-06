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

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

for (var unitCounter = 0; unitCounter <= canvasWidth; unitCounter++) {
    if (unitCounter % 3 === 0) {
        context.beginPath();
        context.moveTo(unitCounter, canvasHeight / 2);
        if (unitCounter % 2 === 0) {
            context.lineTo(canvasWidth / 2, canvasHeight - canvasHeight);
        } else {
            context.lineTo(canvasWidth / 2, canvasHeight);
        }
        context.strokeStyle = 'rgba(255,0,0,.5)';
        context.stroke();
    }
}

for (var unitCounter = 0; unitCounter <= canvasWidth; unitCounter++) {
    context.beginPath();
    context.moveTo(unitCounter, canvasHeight / 2);
    if (unitCounter % 4 === 0) {
        context.lineTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
    } else if (unitCounter % 4 === 1) {
        context.lineTo(canvasWidth, canvasHeight - canvasHeight);
    } else if (unitCounter % 4 === 2) {
        context.lineTo(canvasWidth - canvasWidth, canvasHeight);
    } else if (unitCounter % 4 === 3) {
        context.lineTo(canvasWidth, canvasHeight);
    } else {
        console.log('Something is wrong.');
    }
    context.strokeStyle = 'rgba(0,0,255,.5)';
    context.stroke();
}