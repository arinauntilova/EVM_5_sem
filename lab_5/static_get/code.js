"use strict";

window.onload = function() {
    // input fields
    const f_email = document.getElementById("field-email");
    // button
    const btn = document.getElementById("send-btn");

    // label
    const label = document.getElementById("result-label");

    // ajax get
    function ajaxGet(urlString, callback) {
        let r = new XMLHttpRequest();
        r.open("GET", urlString, true);
        // plain (простой текст)
        r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        r.send(null);
        r.onload = function() {
            callback(r.response);                
        };
    };

    // click event
    btn.onclick = function() {
        const email = f_email.value;
        const url = `/send?email=${email}`;     
        ajaxGet(url, function(stringAnswer) {
            // Выводит модальное окно с сообщением. Посетитель не сможет продолжить работу, 
            // не нажмет на кнопку "ОК" в модальном окне.
            alert(stringAnswer);                              
        });
    };
};
