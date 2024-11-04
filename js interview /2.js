// ? PROTOTYPE CHAIN

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`name is ${this.name}`);
};
const sor = new Person("Sourabh");
// console.log(sor);
// sor.greet(); // Output: name is Sourabh
// console.log(sor.__proto__ === Person.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);
// console.log(Object.getPrototypeOf(sor))

let obj = { a: 1 };
let child = Object.create(obj);
child.b = 2;
// console.log(child.a);
// console.log(child.b);

const  jval = "hello";
// console.log(JSON.parse(jval));
console.log(JSON.stringify(jval));