/*
1. Запросіть у користувача його вік та визначіть, ким він є:
дитиною (0–12), підлітком (12–18), дорослим (18–60) або
пенсіонером (60– …).
*/

// let age = +prompt("Введіть скільки вам років");

// let message =
//   age <= 12 && age > 0
//     ? "Привіт, дитина!"
//     : age < 18 && age > 12
//     ? "Привіт, підліток!"
//     : age >= 18 && age < 60
//     ? "Привіт, дорослий!"
//     : age >= 60 && age <= 123
//     ? "Привіт, пенсія!"
//     : "Який незвичний вік :)";


/*
2. Запросіть у користувача число від 0 до 9 і виведіть йому
спеціальний символ, який розташований на цій клавіші
(1–!, 2–@, 3–# тощо).
*/

let number = +prompt("число від 0 до 9 на клавіатурі");
switch(number) {
    case 1 :
        alert("!");
        break;

    case 2:
        alert("@");
        break;

    case 3:
        alert("#");
        break;

    case 4:
        alert("$");
        break;

    case 5:
        alert("%");
        break;

    case 6:
        alert("^");
        break;

    case 7:
        alert("&");
        break;

    case 8:
        alert("*");
        break;

    case 9:
        alert("(");
        break;

    default:
        alert("неправильно виконана умова!");
}




/*
3. Запросіть у користувача тризначне число та перевірте чи
є в ньому однакові цифри.
*/

// let numbners = +prompt("Введіть тризначне число");
// console.log(numbners);

// let numbners = 099;

// let a = numbners / 100;
// let b = (numbners / 10) % 10;
// let c = numbners % 10;
// if( Math.floor(a) === Math.floor(b) || Math.floor(a) === Math.floor(c)) {
//     alert("є повторні числа");
// } else if ( Math.floor(b) === Math.floor(a) || Math.floor(b) === Math.floor(c)) {
//      alert("є повторні числа");
// } else if ( Math.floor(c) === Math.floor(a) || Math.floor(c) === Math.floor(b)) {
//      alert("є повторні числа");
// } else {
//      alert("повторів немає");
// }

// console.log('${a}', Math.floor(a));
// console.log('${b}',  Math.floor(b));
// console.log('${c}', Math.floor(c));








/*
4. Запросіть у користувача рік та перевірте чи є він високосним. Високосний рік або кратний 400, або кратний 4 і при
цьому не кратний 100.
*/
// let years = +prompt("Введіть рік");
// console.log(years);
// if(((years % 4 === 0) && (years % 100 !=0)) || (years % 400 === 0)){
//     alert("високосний рік!");
// } else {
//     alert("не високосний рік!");
// }





/*
5. Запросіть у користувача п’ятирозрядне число і визначте,
чи є воно паліндромом.
*/






/*
6. Напишіть конвертор валют. Користувач вводить кількість
USD, вибирає в яку валюту хоче перекласти: EUR, UAN
або AZN, і отримує відповідну суму.
*/

// let balance = +prompt("Введіть кількість USD");
// let currency = prompt("Введітьв яку валюту хоче перекласти: EUR, UAN або AZN?");
// let uan = 6.81; 
// let eur = 0.94;
// let azn = 1.7;
// let sum = 0;
// if (currency === "uan") { 
//     sum = balance * uan;
//     console.log(sum);
// } else if (currency === "eur") { 
//     sum = balance * eur;
//     console.log(sum);
// } else if (currency === "azn") { 
//     sum = balance * azn;
//     console.log(sum);
// } 
// alert(sum);


/*
7. Запросіть у користувача суму покупки та виведіть суму до
сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до
500 – 5%, від 500 і вище – 7%. 
*/
// let check = +prompt("Введіть суму покупки");
// if (check >= 200 && check < 300) {
//     let final = check - ((check / 100)*3);
//     alert(`Ваша остаточна сума з урахуванням знижки 3% становить ${final}`);
// } else if (check >= 300 && check < 500) {
//     final = check - ((check / 100)*5);
//      alert(`Ваша остаточна сума з урахуванням знижки 5% становить ${final}`);
// } else if (check >= 500) {
//     final = check - ((check / 100)*7);
//      alert(`Ваша остаточна сума з урахуванням знижки 7% становить ${final}`);
// } else {
//     alert("не коректні дані ");
// }


/*
8. Запросіть у користувача довжину кола та периметр квадрата. Визначте чи може таке коло поміститися у зазначений квадрат. 
*/

// let c = +prompt("Введіть C - довжину кола");
// let p = +prompt("Введіть P - периметр квадрата");
// const pi = 3.14;

// let d = c / pi;
// console.log(d);

// let a = p / 4;
// console.log(a);

// let res = d <= a ? "коло поміститься в квадрат" : "коло не поміститься в квадрат";
// alert(res);





/*
9. Задайте користувачеві 3 питання, у кожному питанні по 3
варіанти відповіді. За кожну правильну відповідь нараховується 2 бали. Після запитань виведіть користувачеві
кількість набраних балів.
*/

// alert("За кожну правильну відповідь нараховується 2 бали. Після запитань ,буде виведена кількість набраних балів.");

// let resOne = +prompt("2 * 2 = ?");
// let resTwo = +prompt("2 + 2 = ?");
// let resThree = +prompt("7 * 7 = ?");
// let res = 0;
// resOne === 4 ? res = 2 : res = 0;
// console.log(res);
// resTwo === 4 ? res += 2 : res = res;
// console.log(res);
// resThree === 49 ? res += 2 : res = res;

// if ( res < 3 ) {
//     alert(`Мала кількість привильних відповідей - ${res} балів`);
// } else if ( res < 5 ) {
//     alert(`Достатня кількість паривильних відповідей - ${res} балів`)
// } else if ( res < 7 ){
//     alert(`Велика кількість паривильних відповідей - ${res} балів`)
// } else {
//     alert(`Спробуйте ще раз!`);
// }


/*
10. Запросіть дату (день, місяць, рік) і виведіть наступну дату.
Врахуйте можливість переходу на наступний місяць, рік,
а також високосний рік.
*/
// alert("Чітко введіть сьогоднішгє число і програма видасть Вам наступну дату з урахуванням переходу на наступний місяць, рік а також високосний рік!")

// let days = +prompt("Введіть число XX");
// let months = +prompt("Введіть місяць XX");
// let years = +prompt("Введіть рік XXXX");

// let nextDay = days;
// let nextMonths = months;
// let nextYears = years;

// if ((((years % 4 === 0) && (years % 100 !=0)) || (years % 400 === 0)) && months === 2 && days === 28) {
//     nextDay = 29;
//     nextMonths = months;
// } else if ((((years % 4 === 0) && (years % 100 !=0)) || (years % 400 === 0)) && months === 2 && days === 29) {
//     nextDay = 1;
//     nextMonths = months + 1;
// } else if (months === 2 && days === 28) {
//     nextDay = 1;
//     nextMonths = months + 1;
// } else if (days >= 1 && days < 31) {
//     nextDay = days + 1;
// } else if (months === 1 || months === 3 || months === 5 || months === 7  || months === 8 || months === 10 && days === 31 ) {
//     nextDay = 1; 
//     nextMonths = months + 1;
// } else if ( months === 12 && days === 31) {
//     nextDay = 1;
//     nextMonths = 1;
//     nextYears = years + 1;
// } else if (months === 4 || months === 6 || months === 9 || months === 11 && days === 30) {
//     nextDay = 1;
//     nextMonths = months + 1;
// } 

// alert(`${nextDay}.${nextMonths}.${nextYears}`);
