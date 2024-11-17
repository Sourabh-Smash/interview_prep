// ! call bind & apply 

// ! CALL 
//? usefull when you want to do function borrowing between objects 
// let obj1 = {
//     name: "Sourabh",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let obj2 = {
//     name: "John"
// }
// obj1.greet.call(obj2);

//* More better way is 
let obj1 = { name: "Sourabh" };
let obj2 = { name: "John" };
let greet = function (name) {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`caller is ${name}`);
}
// greet.call(obj1,"helo");
// greet.call(obj2, "Tom");

// ! APPLY
//? only difference between call & apply is how we pass argements 
// greet.call(obj1, ["hello"]);
// greet.call(obj2, ["hello"]); 

// ! BIND

//? bind returns a new function with the this keyword set to the provided value, and arguments provided after the call to bind.
// ? it gives to copy of method in form of function which can be invoked later 
let newVal = greet.bind(obj1, "hello");
console.log(newVal());
// newVal();