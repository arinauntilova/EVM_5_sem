// Дана вложенная структура файлов и папок. Все файлы имеют раширение "txt".
// Необходимо рекурсивно перебрать вложенную структуру и вывести имена файлов, 
// у которых содержимое не превышает по длине 10 символов.


"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const name_folder = "./test_4";
const type_files = "txt";

function read_folder(name_folder)
{
    const arr = fs.readdirSync(name_folder);    
    for(let i = 0; i < arr.length; i++) {
        const fileName = arr[i];
        let flag = fileName.indexOf('.txt')  // поиск подстроки в строке; не найдено = -1
        if (flag > 0){
            if (fs.existsSync(name_folder + "/" + fileName)) {
                const content = fs.readFileSync(name_folder + "/" + fileName, "utf8");
                if (content.length <= 10){
                    console.log(name_folder + "/" + fileName);
                }
            } 
            else {
                console.log("Файл " + fileName + " не найден.");
            }  
        }
        else{
            read_folder(name_folder + "/" + fileName);
        }
    }
}

read_folder(name_folder);