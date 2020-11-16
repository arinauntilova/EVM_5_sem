"use strict";

let ob_a = {"name" : "Anna", "age" : 20, "group" : "iu7-56"};
let ob_b = {"name" : "Kate", "age" : 18, "group" : "mt12-21"};
let ob_c = {"name" : "Polina", "age" : 20, "group" : "rk4-43"};
let ob_d = {"name" : "Tanya", "age" : 21, "group" : "iu3-23"};
let ob_e = {"name" : "Rita", "age" : 23, "group" : "rl6-21"};
let ob_s = {"name" : "Vera", "age" : 19, "group" : "sm4-16"};

let arr = [ob_a, ob_b, ob_c, ob_d, ob_e, ob_s];
const jsonString = JSON.stringify(arr);

const fs = require("fs");

fs.writeFileSync("2_arr.txt", jsonString);

let stringJSON = fs.readFileSync("2_arr.txt", "utf8");
let arr_ = JSON.parse(stringJSON);

for (let i = 0; i < arr_.length; i++){
    console.log(arr_[i]);
}