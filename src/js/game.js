const CANVAS  = document.getElementById("game");
let context  = CANVAS.getContext("2d");

drawBackground();


function drawBackground() {

    let width = CANVAS.width;

    let height = CANVAS.height;
    console.log(width , height);


    for ( let i = 0 ; i <= 4 ; i++){

        context.beginPath();
        context.moveTo(i*width/3, 0);
        context.lineTo(i*width/3, height);
        context.stroke();

        context.beginPath();
        context.moveTo(0, i*height/3);
        context.lineTo(width, i*height/3);
        context.stroke();


    }

}