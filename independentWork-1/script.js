alert('Hello World');

let q = {
    name: 'Kirill',
    surname: 'Trofim',
    age: 20
};
console.log(typeof q);
alert(q);

let a = 2.4;
console.log(Math.floor(a)); // 2 округление
console.log(Math.round(a)); // 2 округление в > сторону
console.log(Math.ceil(a)); // 3 округление в < сторону

let b = 'Мне 20 лет';
console.log(parseInt(b)); // Выводит NaN = ?

let w = [1, 2, 4, 5, 6, 7];
w = Math.max(w);
console.log(w); // Так же NaN = ?

alert(Math.max(3, 6));
alert(Math.max(w));

let str = 'Hello world';
console.log(str.indexOf('world')); // 6
console.log(str.indexOf('World')); // -1
console.log(str.includes('wo')); // true
console.log(str.includes('Wo')); // false

let check = prompt('Префикс или постфикс?', ' ');
let counter = 1;
let result;
while (check == ' ' || check == undefined) {
    check = prompt('Префикс или постфикс?', ' ');
}

if (check.toUpperCase() == 'ПОСТФИКС') {
    result = counter++; // сначала выдает result, а затем прибавляет единицу, r=1
} else if (check.toUpperCase() == 'ПРЕФИКС') {
    result = ++counter; // сначала прибавляет единицу, а затем выдает result, r=2
}
console.log(result);


//conditionalBranches
let qst = prompt("Какое официальное название JavaScript?", ' ');
qst == 'ECMAScript' ? alert('Правильно!') : alert('Не знаете ECMAScript?');

qst = prompt("Введите число", ' ');
if (qst > 0)
    alert(1);
else if (qst < 0)
    alert(-1);
else alert(0);

let z = 2,
    x = 3,
    c = (z + x < 4) ? 'Мало' : 'Много';
console.log(c);

let login = prompt('Ваш логин', 'Сотрудник'),
    message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';
alert(message);


//dataType
let name = 'Kirill';
console.log(`Привет ${name}`);


//number
let million = 1e6,
    ms = 1e-2;
console.log(million);
console.log(ms);
alert(0xff); // = 255

let num = 152;
console.log(num.toString(16)); // в 16 системе = 98

let sum = 0.1 + 0.2;
alert(+sum.toFixed(2));

alert(999999999999999999);

function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

alert(random(1, 3));

let now = new Date(2020, 10, 10, 12);
alert(now);

function getWeekDay(date) {
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    return days[date.getDay()];
}
let date = new Date(2020, 9, 7);
alert(getWeekDay(date));