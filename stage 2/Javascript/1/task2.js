let matrix = [
    [1, 0, 3],
    [8, 5, 5],
    [4, 8, 5]
];

let matrix1 = [
    [42, 421, 587, 356, 21],
    [382, 65, 5, 654, 765],
    [77, 4221, 0, 96, 235],
    [3812, 11, 59, 15, 96],
    [95, 589, 40, 10, 7]
];

let matrix2 = [
    [6, 2],
    [10, 1],
    [7, 8],
    [4, 9]
];

let matrix3 = [
    [42, 421, 587, 356, 21],
    [382, 65, 5, 654, 765]
];

let rotatedArray = RotateArray(matrix2);
DisplayArray(rotatedArray);

function RotateArray(msv) {
    let tmp = [];
    for (let i = 0; i < Math.max(msv.length, msv[0].length); i++) {
        tmp[i] = [];
        for (let j = 0; j < msv.length; j++) {
            tmp[i][j] = msv[msv.length - 1 - j][i];
        }
    }
    return tmp;
}

function DisplayArray(msv) {
    for (let i = 0; i < msv.length; i++) {
        let str = "";
        for (let j = 0; j < msv.length; j++) {
            if (!msv[i][j]) break;
            str += msv[i][j] + "  ";
        }
        if (!!str) console.log(str);
    }
}