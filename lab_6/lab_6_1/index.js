// //http://localhost:4000/page/games?age=30
// // Создать сервер. В оперативной памяти на стороне сервера создать массив, в котором хранится информация о компьютерных играх 
// // (название игры, описание игры, возрастные ограничения). Создать страницу с помощью шаблонизатора.
// // В url передаётся параметр возраст (целое число). Необходимо отображать 
// // на этой странице только те игры, у которых возрастное ограничение меньше, чем переданное в url значение.

// // Настройка Node js шаблонизатора осуществляется заданием двух параметров:

// // views - путь к директории, в которой находятся шаблоны;
// // view engine - указание самого шаблонизатора.

// // Шаблонизатор - это модуль, позволяющий использовать упрощенный и более мощный синтаксис для написания html.
// //  Шаблонизатор отделяет представление данных от исполняемого кода, даёт возможность разделять шаблоны на блоки,
// //   переиспользовать их несколько раз, 
// // выделять макросы, наследовать шаблоны ит.д., как результат - процесс верстки ускоряется, код становится короче.

"use strict";

const games_arr = [{'name' : 'The Sims 4', 'age' : 7, 'description' : 'Симулятор социальной и общественной жизни.'},
{'name' : 'Ghostrunner', 'age' : 21, 'description' : 'Игра перенесет вас в мрачный мир будущего, в котором оставшиеся в живых люди укрылись в огромной башне, созданной неким Архитектором.' },
{'name' : 'Terraria', 'age' : 16, 'description' : 'Вам предстоит отправиться в красочный мир, где вы сможете создавать различные предметы, строить здания и сражаться с разнообразными монстрами, которые генерируются случайным образом.'},
{'name' : 'NieR Automata', 'age' : 18, 'description' : 'В силу своей беспомощности, человечество вынуждено скрываться на Луне. Изгнанное человечество создало армию андроидов, призванную дать отпор орде машин, но смогло лишь замедлить ее продвижение.'}]

// импорт библиотеки
const express = require("express");

// запускаем сервер
const app = express();
const port = 4000;
app.listen(port);
console.log(`Server on port ${port}`);

// активируем шаблонизатор
app.set("view engine", "hbs");           

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// выдача страницы с массивом игр                                 
app.get("/page/games", function(request, response) {
    const max_age = request.query.age;                           
    let new_arr = [];
    for (let i = 0; i < games_arr.length; i++){
        if (games_arr[i]['age'] < max_age){
            new_arr.push(games_arr[i]);
        }
    }
    const infoObject = {
        descriptionValue: "Игры: ",
        array:new_arr
    };
// Генерация и отдача представления осуществляется с помощью метода render(), который принимает два параметра:
// шаблон;данные для шаблона в виде объекта (если необходимо).
    response.render("pageGames.hbs", infoObject);
});



// "use strict";

// // импорт библиотеки
// const express = require("express");

// // запускаем сервер
// const app = express();
// const port = 5000;
// app.listen(port);
// console.log(`Server on port ${port}`);

// // активируем шаблонизатор
// app.set("view engine", "hbs");

// // заголовки в ответ клиенту
// app.use(function(req, res, next) {
//     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

// // выдача страницы с информацией о кафедре
// app.get("/page/department", function(request, response) {
//     const infoObject = {
//         facultyValue: "Информатика и системы управления",
//         departmentValue: "Компьютерные системы и сети",
//         indexValue: 6
//     };
//     response.render("pageDepartment.hbs", infoObject);
// });

// // выдача страницы с массивом учеников
// app.get("/page/pupils", function(request, response) {
//     const infoObject = {
//         descriptionValue: "Список учеников",
//         pupilsArray: [
//             {a: "Петров", b: "Пётр"},
//             {a: "Иванов", b: "Иван"},
//             {a: "Дмитриев", b: "Дмитрий"},
//             {a: "Александров", b: "Александр"}
//         ]
//     };
//     response.render("pagePupils.hbs", infoObject);
// });