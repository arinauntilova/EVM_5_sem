// С клавиатуры считывается строка - название расширения файлов. 
// Далее считывается строка - адрес папки. Необходимо перебрать все файлы в папке и 
// вывести содержимое файлов, у которых расширение совпадает с введенным расширением

"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const name_folder = readlineSync.question("Input name of folder: ");
const type_files = readlineSync.question("Input type of files: ");

const arr = fs.readdirSync(name_folder);    

console.log("Length: " + arr.length);

for(let i = 0; i < arr.length; i++) {
    const fileName = arr[i];
    let type = fileName.split(".").pop();   
    if (type == type_files){
        const contentString = fs.readFileSync(fileName, "utf8");
        console.log(contentString);
    }
}