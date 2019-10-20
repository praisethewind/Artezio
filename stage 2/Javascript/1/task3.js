let example1 = "hello, world";
let example2 = "Elvis has left the building";
let example3 = "Съешь же ещё этих мягких французских булок, да выпей чаю.";

let count = symbolsCount(example3);
console.log(count);

function symbolsCount(str) {
    let symbols = {};
    for (let i = 0; i < str.length; i++) { // для каждого уникального символа создаем одноименное свойство
        symbols[str[i]] = true;
    }
    //console.log(Object.keys(symbols)); // массив с уникальными символами данной строки
    return Object.keys(symbols).length;
}