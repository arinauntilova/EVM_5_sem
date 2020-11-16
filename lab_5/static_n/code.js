"use strict";

// Событие load на объекте window наступает, когда загрузилась вся страница, 
// включая стили, картинки и другие ресурсы.
window.onload = function() {
    // input fields
    const f_surname = document.getElementById("field-surname");
    const f_tel = document.getElementById("field-tel");
    const f_email = document.getElementById("field-email");
    // button
    const btn = document.getElementById("send-btn");

    // label
    const label = document.getElementById("result-label");

    // XMLHttpRequest, - включает в себя набор методов для работы в протоколах HTTP и HTTPS. 
    // AJAX запрос, - это комплекс выполняемых задач, в режиме «запрос-ответ».

    // url — url-адрес, по которому будет отправлен запрос.
    // callback(data, textStatus, jqXHR) — пользовательская функция, которая будет вызвана после ответа сервера.
    function ajaxPost(urlString, bodyString, callback) {
        // XMLHttpRequest (или, как его кратко называют, «XHR») даёт возможность из JavaScript
        // делать HTTP-запросы к серверу без перезагрузки страницы.
        let r = new XMLHttpRequest();
        // Инициализация
        r.open("POST", urlString, true);
        // В частности, при POST обязателен заголовок Content-Type, содержащий кодировку. Это указание для 
        // сервера – как обрабатывать (раскодировать) пришедший запрос.
        // для указания передаваемых заголовков
        r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // что отправляю
        // можно передать тело запроса т.е. данные от браузера к серверу, ничего - null.
        r.send(bodyString);     
        r.onload = function() {
            callback(r.response);
        }
    }

    // click event
    btn.onclick = function() {
        const surname = f_surname.value;
        const tel = f_tel.value;
        const email = f_email.value;
        // преобразует значение JavaScript в строку JSON
        ajaxPost("/save/info", JSON.stringify({   
            surname, tel, email
        }), function(answerString) {
            const objectAnswer = JSON.parse(answerString);
            const result = objectAnswer.result;
            label.innerHTML = `Ответ: ${result}`
        });
    }
};