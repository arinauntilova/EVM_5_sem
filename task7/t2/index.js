// Написать скрипт, который принимает на вход число и считает его факториал. 
// Скрипт должен получать параметр через process.argv.

// Написать скрипт, который принимает на вход массив чисел и выводит на экран факториал каждого числа из массива. С
// крипт принимает параметры через process.argv.


"use strict";
// В Node js дочерние процессы создаются для выполнения ресурсоемких операций, которые во время выполнения 
// блокируют цикл событий основного процесса.
// получаем параметры скрипта
// const valueB = "" + process.argv[3];

// импортируем библиотеку
const execSync = require('child_process').execSync;

// функция для вызова программы и получения результата её работы
function useCmd(s) {
	const options = {encoding: 'utf8'};
    const cmd = s.toString();
    //метод не вернется, пока дочерний процесс не будет полностью закрыт.
	const answer = execSync(cmd, options);
	return answer.toString();
}

// получаем факториал (убираем первыеы 2 параметра из переданных)
let arr = process.argv.slice(2);
// console.log(arr);

for (let i = 0; i < arr.length; i++){
	let factorialCommand = `node factorial.js ${arr[i]}`;
	console.log(factorialCommand);
	let factorial = useCmd(factorialCommand);
	console.log(factorial);
}
