// С клавиатуры считывается число N. Далее считывается N строк. 
// Необходимо создать массив и сохранять в него строки только с четной длинной.
// Получившийся массив необходимо преобразовать в строку JSON и сохранить в файл.

"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const n = readlineSync.question("Input N: ");

if (n <= 0){
    console.log("N должно быть > 0!");
    return;
}

let mas_str = [];

for (let i = 0; i < n; i++){
    let str = readlineSync.question("Input string: ");
    if (str.length % 2 == 0){
        mas_str.push(str);
    }
}

const result = JSON.stringify(mas_str);

const nameString = "z1.txt";

fs.writeFileSync(nameString, result);

console.log("Create File OK");