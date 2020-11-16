// Необходимо считать содержимое файла, в котором хранится массив строк в формате JSON. 
// Нужно вывести только те строки на экран, в которых содержатся только гласные буквы.

"use strict";

const fs = require("fs");
const readlineSync = require('readline-sync');

const nameString = "z2.txt";

const contentString = fs.readFileSync(nameString, "utf8");

console.log(contentString);

const obj = JSON.parse(contentString);

let mas_vowel = "a A e E i I o O u U y Y";

console.log("Result: ");
for (let i = 0; i < obj.length; i++){
    let flag = 0;
    let s = obj[i];
    for (let j = 0; j < s.length && flag == 0; j++){
        if (!mas_vowel.includes(s[j])) {
            flag = 1;
        }
    }
    if(!flag){
        console.log(obj[i]);
    }
}
