let matrix = [
    [1, 0, 3],
    [8, 5, 5],
    [4, 8, 5]
]; // sum == 39

let matrix1 = [
    [42, 421, 587, 356, 21],
    [382, 65, 5, 654, 765],
    [77, 4221, 0, 96, 235],
    [3812, 11, 59, 15, 96],
    [95, 589, 40, 10, 7]
]; // sum == 12661

let matrix2 = [
    [0.1, 1.5, 7.0],
    [0.007, 1.666, 2.7],
    [1.0, 0.0, 10.6]
]; // sum == 24.573

alert(sumElem(matrix1));

function sumElem(msv) {
    let sum = 0;
    for (let i = 0; i < msv.length; i++) {
        for (let j = 0; j < msv.length; j++) {
            sum += msv[i][j];
        }
    }
    return sum;
}