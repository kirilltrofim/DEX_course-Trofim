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
console.log(parseInt(b));   // Выводит NaN = ?

let w = [1,2,4,5,6,7];
w = Math.max(w);
console.log(w);  // Так же NaN = ?

alert (Math.max (3,6));
alert (Math.max (w));

let str = 'Hello world';
console.log(str.indexOf('world')); // 6
console.log(str.indexOf('World')); // -1
console.log(str.includes('wo')); // true
console.log(str.includes('Wo')); // false

let check = prompt('Префикс или постфикс?', ' ');
let counter = 1;
let result;
while ( check == ' ' || check == undefined ){
    check = prompt('Префикс или постфикс?', ' ');
}

if (check.toUpperCase()=='ПОСТФИКС') {
    result=counter++; // сначала выдает result, а затем прибавляет единицу, r=1
} else if (check.toUpperCase()=='ПРЕФИКС'){
    result=++counter; // сначала прибавляет единицу, а затем выдает result, r=2
};
console.log(result);

let qst = prompt("Какое официальное название JavaScript?", ' ');
qst == 'ECMAScript' ? alert('Правильно!') : alert('Не знаете ECMAScript?');

qst = prompt("Введите число", ' ');
if (qst > 0)
    alert(1);
else if(qst < 0)
    alert(-1);
else alert(0);

let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);    // Не выводит

let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' :
              '';
console.log(message);   // Не выводит
