const button = document.getElementById('erase');

button.addEventListener('click' , function(){
    const CANVAS  = document.getElementById("game");
    const context  = CANVAS.getContext("2d");

    context.clearRect(0, 0, CANVAS.width, CANVAS.height);
    drawBackground();

} )