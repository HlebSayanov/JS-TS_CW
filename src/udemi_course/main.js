//test function

// function getNumberData(quetion){
//     while(true){
//         const res = +prompt(quetion)
//         if(res === 0 || res){
//             return res
//     }
// }
// }
// const age = getNumberData('сколько тебе лет')
// console.log(age)

// Создание простых функций
// 1. Напишите функцию multiply, которая принимает 3 значения, перемножает их и возвращает результат.
//
// 2. Напишите функцию euroToRub, которая принимает один параметр (число в евро) и возвращает число - количество рублей
// по курсу 1 евро = 90 рублей.
//
// 3. Напишите функцию milesToKm, которая принимает один параметр (число в милях) и возвращает значение в километрах.
//

function multiply(a,b,c){
    return a*b*c
}

const euroToRub = (euro) => {
  return euro * 90
}

const milesToKm = (ml) => {
  return ml*1,60934
}

// Использование встроенных методов чисел и строк
// 1) Даны две строки correctAnswer и userAnswer.
//     Необходимо привести обе строки к нижнему регистру и проверить содержит ли userAnswer
// в себе строку correctAnswer. Булевый ответ сохранить в переменную isCorrect.
//
// 2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed,
//     в которой исходное числовое значение округлено до двух знаков после запятой.

// 1.
const correctAnswer = 'JavaScript';
const userAnswer = ' javaScript! ';
const isCorrect  =  correctAnswer.toLowerCase().includes(userAnswer.toLowerCase())                // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.
console.log(isCorrect)


// 2.
const salary = 15000.2085;
const salaryFixed = salary.toFixed(2)
console.log(salaryFixed)
