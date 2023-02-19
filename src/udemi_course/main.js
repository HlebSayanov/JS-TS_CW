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
