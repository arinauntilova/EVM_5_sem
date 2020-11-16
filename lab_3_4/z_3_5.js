// С клавиатуры считывается число N. Далее считывается N строк - имена текстовых файлов.
// Необходимо склеить всё содержимое введенных файлов в одну большую строку и 
// сохранить в новый файл.

"use strict";
const readlineSync = require('readline-sync');
const fs = require("fs");

function write_in_file(contentString){
    const fs = require("fs");
    const fileName = "result_5.txt";
    fs.writeFileSync(fileName, contentString);
    console.log("Запись в файл прошла успешно!");
}

function input_f_names(){
    console.log("Введите количество файлов: ")
    const N = readlineSync.questionInt();  // проблемы с русским текстом в приглашени 
    let f_names = [];
    let fileName;
    for (let i = 0; i < N; i++){
        console.log("Введите имя текстового файла: ")
        fileName = readlineSync.question();
        f_names[i] = fileName;
    }
    return f_names;
}

function read_files(f_names){
    let f_string_all = "";
    for (let i = 0; i < f_names.length; i++){
        if (fs.existsSync(f_names[i])) {
            let file_string = fs.readFileSync(f_names[i], "utf8");
            f_string_all += file_string;
            f_string_all += "\n";
        } else {
            console.log("Файл " + f_names[i] + "не найден.");
        }
    }
    return f_string_all;
}

let f_names = input_f_names();    // файлы test_51.txt, test_52.txt
let f_string = read_files(f_names);
write_in_file(f_string);
