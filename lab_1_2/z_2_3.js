"use strict"

let sec = 1;

function proc(interv){
    let interval = setInterval(() => {
        console.log(sec);
        if(sec == 10){
            interv = 1000;
            clearInterval(interval); // остановка работы setInterval
            proc(interv);
        }
        else if (sec == 20){
            interv = 2000;
            sec = 0;
            clearInterval(interval); 
            proc(interv);
        }
        sec++; 
    }, interv);
}

proc(2000);     