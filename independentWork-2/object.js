let person = {
    name: 'Kirill',
    age: 20,
    gender: 'male',
    hobbies: ['football' , 'programming']
};

console.log(person.hobbies[0] + ' ' + person.hobbies[1]);
console.log('Kirill' in person);

const isEmpty = (person) => {
    for (let i in person) {
      return true;
    }
    return false;
};

console.log(isEmpty(person));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

let sum = 0;
for (let i in salaries)
  sum += salaries[i];
console.log(sum);
