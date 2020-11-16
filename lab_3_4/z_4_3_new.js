
"use strict";
const readlineSync = require('readline-sync');
const fs = require("fs");
const express = require("express");
const { parse } = require('path');
const FILE_ERROR = -1;

const app = express();
const port = 2000;
app.listen(port);
console.log("My server on port " + port);

function read_file(filename){
    const fs = require("fs");

    if (fs.existsSync(filename)) {
        const contentString = fs.readFileSync(filename, "utf8");
        return contentString;
    } else {
        console.log("Файл " + filename + "не найден.");
        return FILE_ERROR;
    }
}

function write_file(contentString, filename){
    const fs = require("fs");

    fs.writeFileSync(filename, contentString);

    console.log("Файл создан");
}

app.get("/me/page", function(request, response) {
    const nameString = request.query.p;
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");

        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});



app.get("/new/page", function(request, response) {
    const num = request.query.num;
    const names = request.query.names;
    const address = request.query.adress;
    // const aInt = parseInt(num);

    let fields = names.split(' '); 
    console.log(fields);

    let result = "";
    let begin = read_file("3_begin.html");

    if (begin == FILE_ERROR){
        console.log("Файл не может быть сгенерирован.");
        // return;
    }
    else{
        console.log("OKAY");
        result += begin + "\n"; 
        result += "    <form method=\"GET\" action=\"" + address + "\">" + "\n";

        let n = fields.length;
        if (num > n){
            n = num
        }

        for (let i = 0; i < n; i++){
            result += "        <p>Введите " + fields[i] + "</p>" + "\n";
            result += "        <input name=\"" + fields[i] + "\" spellcheck=\"false\" autocomplete=\"off\">\n";
        }

        let end = read_file("3_end.html");

        if (end == FILE_ERROR){
            console.log("Файл не может быть сгенерирован.");
            return;
        }
        result += end;

        write_file(result, "3_result.html");
    }
    const resulthtml = fs.readFileSync("3_result.html", "utf8");

    response.end(resulthtml);
});