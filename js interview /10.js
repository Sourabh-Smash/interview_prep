// ! FUNCTION CURRYING     

// ! using BIND
// let mul = function (a,b) {
//     console.log(a * b);
// }

// let curriedMul = mul.bind(this, 5);
// curriedMul(5);

// let curriedMul2 = mul.bind(this, 10);
// curriedMul2(10)

// ! using CLOSURES 

// function mul(a) {
//     return function inner(b){
//         console.log(a * b);
//     }
// }
// let mul1 = mul(5);
// mul1(5);

// let mul2 = mul(10);
// mul2(10);

getName();
console.log(x);
var x =7;
function getName() {
    console.log("first");
}