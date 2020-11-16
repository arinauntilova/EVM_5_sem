// Создать сервер. Сервер должен выдавать страницу с тремя текстовыми полями и кнопкой. 
// В поля ввода вбивается информация о почте, фамилии и номере телефона человека. 
// При нажатии на кнопку "Отправить" введённая информация должна отправляться с помощью POST запроса на 
// сервер и добавляться к концу файла (в файле накапливается информация). При этом на стороне сервера должна происходить проверка: 
// являются ли почта и телефон уникальными. Если они уникальны, то идёт добавление информации в файл. 
// В противном случае добавление не происходит. При отправке ответа с сервера клиенту должно приходить сообщение 
// с информацией о результате добавления (добавилось или не добавилось). 
// Результат операции должен отображаться на странице.

"use strict";
const filename = 'file.txt';

//Для того чтобы Node.js сервер мог передавать по запросу находящиеся у него статические файлы
// (изображения, аудио, HTML, CSS, JS), используется функция фреймворка Express static().

// импортируем библиотеку
const express = require("express");

// запускаем сервер
const app = express();
const port = 4000;
app.listen(port);
console.log(`Server on port ${port}`);

// отправка статических файлов

//В качестве параметра Express static() принимает имя директории, в которой находятся все статические файлы, 
//но при запросе самих файлов указывать в URL директорию не нужно. Поиск будет осуществляться относительно указанной директории.


// Для предоставления статических файлов, например, изображений, файлов CSS и JavaScript в 
// Express используется функция промежуточной обработки express.static.
// Для того чтобы начать непосредственное предоставление файлов, необходимо передать имя каталога,
// в котором находятся статические ресурсы, в функцию промежуточной обработки express.static.

const way = __dirname + "/static_n";
app.use(express.static(way));

// заголовки в ответ клиенту
app.use(function(req, res, next) {                                
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// body
function loadBody(request, callback) {                         
    let body = [];
    request.on('data', (chunk) => {  //chunk - либо Buffer
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
        callback(body);
    });
}

function check_file(file, string){
    let obj_str = JSON.parse(string);
    let arr = [];
    const fs = require("fs");
    let file_str = fs.readFileSync(filename, "utf8");
    if (file_str.length != 0)
    {
        arr = JSON.parse(file_str);
        for (let i = 0; i < arr.length; i++){
            if ((arr[i]["phone"] === obj_str["phone"]) || (arr[i]["email"] === obj_str["email"]))
                return false;
        }
    }
    arr.push(obj_str);
    console.log(arr);
    fs.writeFileSync(filename, JSON.stringify(arr));
    return true;
}

// it is post
// В этом коде происходит:

// приём POST запроса
// загрузка тела POST запроса
// извлечение полей из полученного тела POST запроса
// сохранение информации в файл
app.post("/save/info", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const surname = obj["surname"];
        const tel = obj["tel"];
        const email = obj["email"];
        const contentString = `{"surname" : "${surname}", "phone" : "${tel}", "email" : "${email}"}`;
        let check = check_file(filename, contentString);
        let message = "Save not OK"
        if (check)
            message = "Save OK"
        response.end(JSON.stringify({  // отправка ответа
            result: message
        }));
    });
});