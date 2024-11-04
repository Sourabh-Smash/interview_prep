// ! object literal syntax 
let obj = { name: "sourabh" };
// console.log(obj);

// !  object construcor
// let obj2 = new Object();
let obj2 = Object();
// console.log(obj2);

// ! object .create method 
// let obj3 = Object.create(null);
let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};
var car = Object.create(carProps);
// console.log(car);

// ! function constructor 
function val(prop) {
    this.prop = prop;
    this.age = 24;
}
let valObj = new val("Sourabh");
// console.log(valObj);

// ! object assign method 
let newObj1 = { name: "hello" };
let newObj2 = { age: 24 };
let info = Object.assign({}, newObj1, newObj2);
// console.log(info);

// ! class syntax
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
let personObj = new Person("sourabh", 24);
// console.log(personObj);

// ! singelton pattern
let value = new (function () { 
    this.name = "Sourabh";
    this.age = 24;
})();
// console.log(value);
console.log(__proto__);