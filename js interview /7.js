// let val = [1, 2, 3];
// val[10] = 100;
// console.log(val[6]);
// console.log(val);

// let obj = {
//     name: "sourabh",
//     age:24
// };
// console.log(obj);
// let obj2 = Object.create(obj);
// delete obj2.name;
// console.log(obj2.name,obj2.age);
// console.log(obj);

// var z = 1,
//   y = (z = typeof y);
// console.log(y);
// console.log(z);

function foo1() {
  return {
    bar: "hello",
  };
}
console.log(foo1());
function foo2() {
  return
  {
    bar: "hello";
  }
}
console.log(foo2());