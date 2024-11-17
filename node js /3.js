// // console.log("first");
// // setImmediate(() => {
// //   console.log("second");
// // });
// // console.log("third");
// // process.on("uncaughtException", (err) => {
// //   console.log(`Caught exception: ${err}`);
// // });
// console.time("loop");
// for (let i = 0; i < 100000000; i += 1) {
//   // Do nothing
// }
// console.timeEnd("loop");