'use strict';

/*let userNumber, resultStr;
userNumber = +prompt('Введите число','10');
if (userNumber > 5) resultStr = 'Число ' + userNumber + ' больше 5'
else resultStr = 'Число ' + userNumber + ' не больше 5';
alert(resultStr);

resultStr=(userNumber>5)?'Число '+userNumber+' больше 5':'Число '+userNumber+' не больше 5';
alert(resultStr);

let experiment = (5<2)||('')||(0);
alert(experiment);*/

// Задания, в которых необходимо использовать SWITCH.
/*
1. Запросить у пользователя номер месяца и вывести на экран
его название.
*/
/*let numberMonth, nameMonth;

numberMonth = +prompt('Введите номер месяца');
switch (numberMonth) {
   case 1: nameMonth = 'Январь';
   break;
   case 2: nameMonth = 'Февраль';
   break;
   case 3: nameMonth = 'Март';
   break;
   case 4: nameMonth = 'Апрель';
   break;
   case 5: nameMonth = 'Май';
   break;
   case 6: nameMonth = 'Июнь';
   break;
   case 7: nameMonth = 'Июль';
   break;
   case 8: nameMonth = 'Август';
   break;
   case 9: nameMonth = 'Сентябрь';
   break;
   case 10: nameMonth = 'Октябрь';
   break;
   case 11: nameMonth = 'Ноябрь';
   break;
   case 12: nameMonth = 'Декабрь';
   break;
   default: nameMonth = 'Такого месяца нет';
}
alert(nameMonth);*/


/*
2. Реализовать калькулятор. Пользователь вводит 2 числа и
знак (+ - * /). В зависимости от введенного знака решить
пример и вывести результат.
*/
/*
let firstNumber, secondNumber, operand, resultNumber;
firstNumber = +prompt('Введите первое число');
secondNumber = +prompt('Введите второе число');
operand = prompt('Введите символ операции между ними');
switch (operand) {
   case '+': resultNumber = firstNumber + secondNumber;
   break;
   case '-': resultNumber = firstNumber - secondNumber;
   break;
   case '*': resultNumber = firstNumber * secondNumber;
   break;
   case '/': resultNumber = firstNumber / secondNumber;
   break;
   default: resultNumber = 'вы ввели несуществующую операцию';
}
alert(resultNumber);*/

// Задания, в которых необходимо использовать тернарный оператор.

/*1. Запросить 2 числа и вывести большее из них.*/
/*
let firstNumber, secondNumber;
firstNumber = +prompt('Введите первое число');
secondNumber = +prompt('Введите второе число');
firstNumber > secondNumber ? alert(firstNumber) : alert(secondNumber);*/

/*
2. Запросить 1 число и проверить, оно кратно 5 или нет.
*/
/*
let userNumber = +prompt('Введите число');
(userNumber % 5) ? alert('Число не кратно 5') : alert('Число кратно 5');*/

/*
3. Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет,
землянин!», в остальных случаях вывести «Привет, инопланетянин!». 
*/
/*
let namePlanet = prompt('С какой вы планеты?');
(namePlanet == 'Земля' || namePlanet == 'земля') ? alert('Привет, землянин!') : alert('Привет, инопланетянин!');*/



// Циклы. Задания, в которых необходимо использовать WHILE.

//1. Вывести # столько раз, сколько указал пользователь.
/*let namberRepeat = +prompt('Введите число');
let i = 1;
let resultString = '';
while (i <= namberRepeat) {
   resultString +='#';
   i++;
}
alert(resultString);*/
/*2. Пользователь ввел число, а на экран вывелись все числа
от введенного до 0.*/
/*let userNumber = +prompt('Введите число');
let strNumber = userNumber;
let i = userNumber;
while (i !== 0) {
if (userNumber > 0) {
   i--;
} else {
   i++;
}
strNumber += ', ' + i;
}
alert(strNumber);*/

/*3. Запросить число и степень. Возвести число в указанную
степень и вывести результат.*/
/*let userNumber = +prompt('Введите число');
let userDegree = +prompt('Введите степень');
let i = 1;
let degree, multiplier;
if (userDegree === 0 && userNumber !== 0) degree = 1
else if (userDegree !== 0 && userNumber === 0) degree = 0 
else if (userDegree === 0 && userNumber === 0) alert(`${userNumber} в степени ${userDegree} не определено`);
else {
   if (userDegree > 0) {
      degree = userNumber;
      multiplier = userNumber;
   } else {
      degree = 1 / userNumber;
      multiplier = 1 / userNumber;
   }
   while (i < Math.abs(userDegree)) {
      degree *= multiplier;
      i++;
   }
}
if (degree !== undefined) alert(`${userNumber} в степени ${userDegree} равно ${degree}`);*/

/*
4. Запросить 2 числа и найти все общие делители.*/
/*let userNumber1 = +prompt('Введите первое число');
let userNumber2 = +prompt('Введите второе число');
let resultString = '';
let i=1;
while (i<= Math.min(userNumber1, userNumber2)) {
   if (userNumber1 % i === 0 && userNumber2 % i === 0) resultString += i + ' ';
   i++;
}
alert(resultString);*/

/*
5. Посчитать факториал введенного пользователем числа.
*/
/*let userNumber = +prompt('Введите число');
if (userNumber === 0) alert(`Факториал числа ${userNumber} равен 1`);
else
{let factorial = userNumber;
let i = userNumber;
while (i>1) {
   i--;
   factorial *= i;
}
alert(`Факториал числа ${userNumber} равен ${factorial}`);}*/

//Задания, в которых необходимо использовать DO WHILE.
/*1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
пор, пока он не решит его правильно.
*/
/*let userAnswer;
do {
   userAnswer = +prompt('Сколько будет 2+2*2?');
} while (userAnswer !== 6);
alert('Правильно!');*/

/*2. Делить число 1000 на 2 до тех пор, пока не получится число
меньше 50. Вывести это число и сколько делений произвели.
*/
/*let divider = 1000;
let i = 0;
do {
   divider /= 2;
   console.log(divider);
   i++;
} while (divider >= 50);
alert('Получилось число ' + divider + ' за ' + i + ' делений');*/

//Задания, в которых необходимо использовать FOR.
/*3. Вывести все числа от 1 до 100, которые кратные указанному
пользователем числу.
*/
/*let userNumber = +prompt('Введите число');
let resultString ='';

for(let i = 1; i<= 100; i++) {
   if (!(i % userNumber)) resultString += `${i}, `;
}

alert(resultString);*/

/*4. Вывести каждый 4-й элемент из указанного пользователем
диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
*/
/*let firtNumber = +prompt('Введите первое число диапазона');
let lastNumber = +prompt('Введите последнее число диапазона');
let resultString ='';

for(let i=1; i<=(lastNumber - firtNumber + 1); i++) {
   if (i % 4 == 0) resultString += `${firtNumber + i - 1} `; 
}
alert(resultString);*/

/*
5. Запросить число и проверить, простое ли оно. Простое
число делится без остатка только на себя и на единицу.
*/
/*let userNumber = +prompt('Введите число');
let k = true;
let str;
for (let i=2; i < userNumber; i++) {
if (userNumber % i === 0) k = false;
}
if (k) alert(`Число ${userNumber} простое`);
else alert(`Число ${userNumber} сложное`);*/