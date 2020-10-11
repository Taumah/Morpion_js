const CANVAS  = document.getElementById("game");
const context  = CANVAS.getContext("2d");

const blocSize = {
    x:CANVAS.width  / 3,
    y:CANVAS.height / 3,
};

let player = {
    symbol : 'X',
    first : true,
    points : 0,
}

displayWin();

let game = [ null, null, null, null, null, null , null, null, null ];


drawBackground();



function drawBackground() {

    let width = CANVAS.width;

    let height = CANVAS.height;

    for ( let i = 0 ; i <= 4 ; i++){

        drawLine([i*width/3, 0] , [i*width/3, height] );

        drawLine([0, i*height/3] , [width, i*height/3] );

    }

}

function drawX(bloc){

    let top = getTopLeftCornerOfBloc(bloc);

    drawLine( [top.x , top.y] , [top.x + blocSize.x * 0.8 , top.y + blocSize.y * 0.8]);
    drawLine( [top.x + blocSize.x * 0.8 , top.y] , [top.x , top.y + blocSize.y * 0.8]);

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
    let row = Math.floor(bloc / 3);

    return {
        x: blocSize.x * col + blocSize.x / 2,
        y: blocSize.y * row + blocSize.y / 2,
    }
}

function getTopLeftCornerOfBloc(bloc){

    let col = bloc % 3;
    let row = Math.floor(bloc / 3);

    return {
        x: blocSize.x * col + blocSize.x * 0.1,
        y: blocSize.y * row + blocSize.y * 0.1,
    }
}

function whoWon(){
    let horizontal , vertical , diagonal , anti_diagonal;
    horizontal = vertical = diagonal = anti_diagonal = 0;

    for (let i = 0 ; i < 3 ; i++){
        horizontal = 0;
        vertical = 0
        for (let j = 0 ; j < 3 ; j++){
            horizontal += game[i*3 + j];

            vertical += game[j*3 + i]

            if ( i + j === 2){
                anti_diagonal += game[i*3 + j]
            }

            if( i === j ){
                diagonal += game[i*3 + j];
            }
            if (horizontal === 3 || vertical === 3 || diagonal === 3 || anti_diagonal === 3){
                console.log('stop');
                console.log( horizontal , vertical , diagonal , anti_diagonal);

                return;
            }

            if (horizontal === -3 || vertical === -3 || diagonal === -3 || anti_diagonal === -3){
                console.log('stop2');

                console.log( horizontal , vertical , diagonal , anti_diagonal);
                return;
            }
        }
    }
}

function displayWin(){
    let p = document.getElementById('win_area');

    p.textContent = "you won";

}