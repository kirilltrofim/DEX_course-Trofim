let fruits = ['apple', 'orange', 'banana' ];
fruits.push('peer');
console.log(fruits);
console.log(fruits.sort());
for (let fruit of fruits) {
    console.log( fruit + ' 2 кг');
}
fruits.splice(0, 2, "Привет", "мир");
console.log(fruits);
fruits.length = 2;
console.log(fruits);

//создадим матрицу
let num =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(num[2][2]);
delete num[0][0];
console.log(num[0][0]);

fruits.forEach((item, index, array) => {
    console.log(`${item} имеет позицую ${index} в ${array}`);
    console.log( item + '1');
});
console.log(fruits.includes('banana'));
console.log(fruits.includes('Привет'));
