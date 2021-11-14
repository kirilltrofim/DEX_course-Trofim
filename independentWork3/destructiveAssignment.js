let userName = {
    firstName : 'Kirill',
    secondName : 'Trofim',
    age : 20
};

let {firstName, secondName , age = 25} = userName;
console.log(firstName);
console.log(age);

firstName = 'You';
console.log(userName);
console.log(firstName);

let fruits = {
    apple : 20,
    orange : 5,
    pineapple : 4
};
let {apple, ...other} = userName;
console.log(other.pineapple);
console.log(apple);