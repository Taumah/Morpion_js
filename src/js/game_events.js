const button = document.getElementById('erase');

button.addEventListener('click' , function(){

    context.clearRect(0, 0, CANVAS.width, CANVAS.height);
    drawBackground();

    game = [ null, null, null, null, null, null , null, null, null ];
} )


CANVAS.onclick = function getBlocFromClick(event) {
    const rect = CANVAS.getBoundingClientRect();
    const pos_x = event.clientX - rect.left;
    const pos_y = event.clientY - rect.top;

    let width = CANVAS.width;

    let height = CANVAS.height;
    let bloc = null;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (pos_x > i * width / 3 && pos_x < (i + 1) * width / 3 && pos_y > j * height / 3 && pos_y < (j + 1) * height / 3) {
                bloc = j*3 + i ;
            }

        }
    }

    if (bloc !== null){
        if (player.symbol === 'O'){
            drawO(bloc);
        }
        else if(player.symbol === 'X'){
            drawX(bloc);
        }
        else{
            CANVAS.display = false;
        }

        game[bloc] = player.symbol === 'X' ? -1 : 1;


        CPUplay();
    }
}

function CPUplay(){

    let bloc;
    let free = [];

    for (let i = 0 ; i < game.length ; i++){
        if (game[i] === null){
            free.push(i);
        }
    }

    let CPU_choice = Math.floor(Math.random() * free.length);

    if (player.symbol === 'X'){
        drawO(free[CPU_choice]);
    }
    else if(player.symbol === 'O'){
        drawX(free[CPU_choice]);
    }
    game[free[CPU_choice]] = player.symbol === 'X' ? 1 : -1;


    console.log(game);

    whoWon();
}