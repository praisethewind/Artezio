let table = [];
for(let i = 0; i < 4; i++){
    table[i] = [];
    for(let j = 0; j < 4; j++){
        table[i][j] = false;
    }
}

function button(x, y){
    let str = "cell_" + x + "_" + y;
    if(!table[x][y]){
        document.getElementById(str).src = "images/4.png";
        table[x][y] = true;
    } else if(table[x][y]){
        document.getElementById(str).src = "images/default.jpg"
        table[x][y] = false;
    }
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}