const button = document.getElementById('erase');

button.addEventListener('click' , function(){

    context.clearRect(0, 0, CANVAS.width, CANVAS.height);
    drawBackground();

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
}