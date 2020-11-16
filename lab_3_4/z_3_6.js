// // Написать код, который позволяет определить максимальный 
// // возможный уровень вложенности друг в друга полей 
// // в объекте, чтобы данный объект можно было преобразовать 
// // в строку формата JSON. Ответом является целое число.

function get_max_depth(global, nested, depth) {
    if (!nested) {
      nested = global;
    }
    nested.prop = {};
  
    JSON.stringify(global);
  
    console.log(global, depth);
    try{
        return get_max_depth(global, nested.prop, depth + 1);
    }
    catch(RangeError){
        return depth;
    }
}
  
let res = get_max_depth({}, null, 0);
console.log("Answer = " + res);