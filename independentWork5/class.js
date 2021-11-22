class User {
  name = "Кирилл";

  sayHi() {
    alert(`Привет, ${this.name}!`);
  }
}
new User().sayHi();

class Rabbit {}
let rabbit = new Rabbit();
alert(rabbit instanceof Rabbit);

