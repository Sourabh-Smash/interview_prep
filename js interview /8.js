// function outest(c) {
//     return function outer(b) {
//         let a = 10;
//         return function inner() {
//             console.log(a, b,c);
//         }
//     }
// }
// outest("tom")("boy")();

// real life example 
// problem statemetn 
// let counter = 0;
// function incremetCounter() {
//     counter++;
//     console.log(counter);
// }

// solution is 
// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }
// let cnt1 = counter();
// cnt1();
// cnt1();
// cnt1();
// let cnt2 = counter();
// cnt2();
// cnt2();
// cnt2();
// cnt2();


// better solution which is scalable := using contructor function 

// function Counter(){
//     let count = 0;
//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count);
//     }
// }

// let cnt1 = new Counter();
// cnt1.incrementCounter();
// cnt1.incrementCounter();
// cnt1.incrementCounter();
// cnt1.decrementCounter();

// let cnt2 = new Counter();
// cnt2.incrementCounter();
// cnt2.decrementCounter();


// closure interview question 

// for (var  i = 1; i <= 5; i++){ // how to solve the issue 
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

// answr is 
for (var i = 1; i <= 5; i++){
    function fn(x) {
        setTimeout(function () {
            console.log(x);
        },x*1000)
    }
    fn(i);
}