// // Запустить сервер. Реализовать на сервере функцию для сравнения трёх чисел и выдачи наибольшего из них.
// // Реализовать страницу с формой ввода для отправки запроса на сервер

// "use strict";

// const fs = require("fs");

// const express = require("express");

// const app = express();
// const port = 2000;
// app.listen(port);
// console.log("My server on port " + port);

// app.get("/me/page", function(request, response) {
//     const nameString = request.query.p;
//     if (fs.existsSync(nameString)) {
//         const contentString = fs.readFileSync(nameString, "utf8");
//         response.end(contentString);
//     } else {
//         const contentString = fs.readFileSync("bad.html", "utf8");
//         response.end(contentString);
//     }
// });

// app.get("/compare", function(request, response) {
//     const a = request.query.a;
//     const b = request.query.b;
//     const c = request.query.c;
//     const aInt = parseInt(a);
//     const bInt = parseInt(b);
//     const cInt = parseInt(c);
//     const sInt = Math.max(aInt, bInt, cInt);
//     const answerJSON = JSON.stringify({Max: sInt});
//     response.end(answerJSON);
// });

// ============================  1

// "use strict";
// // подключение express
// const express = require("express");
// // создаем объект приложения
// const app = express();
// const port = 5015;

// // начинаем прослушивать подключения на 5015 порту
// // Для запуска сервера вызывается метод app.listen()
// app.listen(port);
// console.log("My server on port " + port);

// ==== request - позволяет получить информацию о запросе
// - method: тип запроса (GET, POST, DELETE, PUT)

// - url: представляет запрошенный адрес

// ==== response управляет отправкой ответа
// - write: пишет в поток ответа некоторое содержимое
// - end: сигнализирует серверу, что заголовки и тело ответа установлены, 
// в итоге ответ отсылается клиенту. 
// Данный метод должен вызываться в каждом запросе.

// определяем обработчик для маршрута "/"
// app.get(). Она обрабатывает GET-запросы протокола HTTP и позволяет 
// связать маршруты с определенными обработчиками. 
// Для этого первым параметром передается маршрут, а вторым - обработчик, 
// который будет вызываться, если запрос к серверу соответствует данному маршруту:

// Строка запроса (query) - фактически это часть запрошенного адреса, 
// которая идет после знака вопроса

// С помощью выражения request.query 
// мы можем получить все параметры строки запрос в виде объекта javascript

// app.get("/calculate/sum", function(request, response) {
//     const a = request.query.a;
//     const b = request.query.b;
//     const aInt = parseInt(a);
//     const bInt = parseInt(b);
//     const sInt = aInt + bInt;
//     const answerJSON = JSON.stringify({result: sInt});
//     response.end(answerJSON);
// });


// ============================  2

"use strict";

const fs = require("fs");

const express = require("express");

const app = express();
const port = 5015;
app.listen(port);
console.log("My server on port " + port);


app.get("/me/page", function(request, response) {
    // обращение к параметру p
    const nameString = request.query.p;
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});

// ================ 3
// "use strict";

// const fs = require("fs");

// const express = require("express");

// const app = express();
// const port = 5015;
// app.listen(port);
// console.log("My server on port " + port);

// app.get("/me/page", function(request, response) {
//     const nameString = request.query.p;
//     if (fs.existsSync(nameString)) {
//         const contentString = fs.readFileSync(nameString, "utf8");
//         response.end(contentString);
//     } else {
//         const contentString = fs.readFileSync("bad.html", "utf8");
//         response.end(contentString);
//     }
// });

// app.get("/calculate/sum", function(request, response) {
//     const a = request.query.a;
//     const b = request.query.b;
//     const aInt = parseInt(a);
//     const bInt = parseInt(b);
//     const sInt = aInt + bInt;
//     const answerJSON = JSON.stringify({result: sInt});
//     response.end(answerJSON);
// });