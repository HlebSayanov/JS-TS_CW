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
//
// function multiply(a,b,c){
//     return a*b*c
// }
//
// const euroToRub = (euro) => {
//   return euro * 90
// }
//
// const milesToKm = (ml) => {
//   return ml*1,60934
// }

// TODO:Использование встроенных методов чисел и строк
// 1) Даны две строки correctAnswer и userAnswer.
//     Необходимо привести обе строки к нижнему регистру и проверить содержит ли userAnswer
// в себе строку correctAnswer. Булевый ответ сохранить в переменную isCorrect.
//
// 2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed,
//     в которой исходное числовое значение округлено до двух знаков после запятой.

// 1.
// const correctAnswer = 'JavaScript';
// const userAnswer = ' javaScript! ';
// const isCorrect  =  correctAnswer.toLowerCase().includes(userAnswer.toLowerCase())                // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.
// console.log(isCorrect)
//
//
// // 2.
// const salary = 15000.2085;
// const salaryFixed = salary.toFixed(2)
// console.log(salaryFixed)

//=========================================================================================

// Практика на рекурсию
// Напишите функцию getLength, которая в качестве параметра будет принимать массив
// и рекурсивно высчитывать его длину (количество элементов).
// По условию задачи нельзя использовать встроенное свойство length массива.
// Используйте метод pop для удаления элементов массива,
//     чтобы подсчитать итоговое количество.

let counter = 0
function getLength(arr){
    counter ++
    let del = arr.pop()
    if( del === undefined){
    return counter-1
}
   return   del , getLength(arr)
}

console.log(getLength([1,2,3,1234]))


//Практика на замыкание
// Создайте функцию addByX.
// Которая принимает 1 параметр (число) и возвращает новую функцию,
// которая также принимает число и возвращает его сумму с исходным параметром.


/* function addByX(num1){
    const addByY=(num2)=> num1+num2

    return addByY
}

const res = addByX(2)(21)

console.log(res) */

//============================================================================================================

//Практика на использование контекста
// Дан объект supporter1. Опишите его метод chant, при вызове которого с задержкой в 1 секунду
// в консоль выводится сообщение "Forza Milan".
// Затем привяжите к объекту supporter2 метод chant таким образом,
// чтобы при вызове спустя 1 секунду в консоль выводилось сообщение "Forza Inter".


/*const supporter1 = {
    club: 'Milan',

    chant() {
        setTimeout(()=>console.log('Forza',this.club),1000)
    }
}

const supporter2 = {
    club: 'Inter'
}
supporter1.chant()
supporter2.chant= supporter1.chant.bind(supporter2)
supporter2.chant()
*/
