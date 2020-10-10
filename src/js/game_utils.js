const CANVAS  = document.getElementById("game");
const context  = CANVAS.getContext("2d");

const blocSize = {
    x:CANVAS.width  / 3,
    y:CANVAS.height / 3,
};


drawBackground();

drawX(0);



function drawBackground() {

    let width = CANVAS.width;

    let height = CANVAS.height;

    for ( let i = 0 ; i <= 4 ; i++){

        drawLine([i*width/3, 0] , [i*width/3, height] );

        drawLine([0, i*height/3] , [width, i*height/3] );

    }

}

function drawX(bloc){

    let center = getTopLeftCornerOfBloc(bloc);


    drawLine([0,0] , [50,50]);
    drawLine([50,0] , [0,50]);

}


function drawO(bloc){

    let center = getCenterOfBloc(bloc);
    let radius = (CANVAS.width /6) * 0.8;

    context.beginPath();
    context.arc(center.x, center.y, radius, 0, Math.PI * 2, true); // Outer circle
    context.stroke();

}

function drawLine(start , end){

    context.beginPath();
    context.moveTo(start[0] , start[1]);
    context.lineTo(end[0], end[1]);
    context.stroke();
}

function getCenterOfBloc(bloc) {
    let col = bloc % 3;
    let row = bloc / 3;

    return {
        x: blocSize.x * col + blocSize.x / 2,
        y: blocSize.y * row + blocSize.y / 2,
    }
}

function getTopLeftCornerOfBloc(bloc){

}