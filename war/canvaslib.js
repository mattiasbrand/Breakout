//BEGIN LIBRARY CODE
var x = 150;
var y = 150;
var originalDx = 2;
var originalDy = 4;
var dx = originalDx;
var dy = originalDy;
var WIDTH;
var HEIGHT;
var ctx;
var intervalId = 0;
var paddlePreviousX;
var paddlex;
var paddleh;
var paddlew;

rightDown = false;
leftDown = false;

//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
    if (evt.keyCode == 39)
        rightDown = true;
    else if (evt.keyCode == 37)
        leftDown = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
    if (evt.keyCode == 39)
        rightDown = false;
    else if (evt.keyCode == 37)
        leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function init_mouse() {
    canvasMinX = $("#canvas").offset().left;
    canvasMaxX = canvasMinX + WIDTH;
}

function onMouseMove(evt) {
    if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
        paddlePreviousX = paddlex;
        paddlex = evt.pageX - canvasMinX;
    }
}

$(document).mousemove(onMouseMove);

function init_paddle() {
    paddlex = WIDTH / 2;
    paddleh = 10;
    paddlew = 95;
}

function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    intervalId = setInterval(draw, 10);
    return intervalId;
}

function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//END LIBRARY CODE