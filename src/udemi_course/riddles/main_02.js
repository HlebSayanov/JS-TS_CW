// TODO:Проект "Загадки". Практика
//Опишите метод checkAnswer объекта riddle, поместив в него в логику проверки правильного ответа на загадку.
//
//     Должны соблюдаться следующие условия:
//
//     1. В случае правильного ответа выдать пользователю сообщение "Правильный ответ" (в alert и console.log)
//
// 2. В случае неправильного ответа выдать пользователю сообщение "Неправильный ответ"
//
// 3. В случае окончания попыток выдать пользователю сообщение "Игра окончена"
//
//
//
// Дополнительно (по желанию - не проверяется автотестами):
//
// - предоставьте пользователю подсказки в случае неправильного ответа
//
// - подсказки предлагаются после первых двух неправильных ответов
//
// - после третьего неправильного ответа подсказка не нужна (как вариант, можно сообщить правильный ответ)\\

var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {
        if(this.tries===0) return alert('restart page')

        if(this.correctAnswer === str.toLowerCase()){
               alert('you win')
               console.log('you win')
            return this.tries = 0
           }else{
               alert('you los')
               console.log('you los')
               this.tries--
               console.log(this.tries)

           }
        this.tries === 2 && alert(this.hints[0])
        this.tries === 1 && alert(this.hints[1] )
        this.tries===0 &&  alert('game over') && console.log('game over')

    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
    document.getElementById('tries').innerText = riddle.tries--
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ

        riddle.checkAnswer(guessedAnswer)
    }
}
