// const cluster = require("cluster");
// const express = require("express");

// const os = require("os");

// const totalCpus = os.cpus().length;
// if (cluster.isPrimary) {
//   console.log(`Master ${process.pid} is running`);
//   // Fork workers.
//   for (let i = 0; i < totalCpus; i++) {
//     cluster.fork();
//   }
// } else {
//   const app = express();
//   const PORT = 3000;
//   app.get("/", (req, res) => res.send(`Worker ${process.pid} is running`));
//   app.listen(PORT, () =>
//     console.log(`Worker ${process.pid} started on port ${PORT}`)
//   );
// }
// // console.log(totalCpus);

const buffer = Buffer.from("hello Sourabh");
console.log(buffer.toString());
console.log(buffer.slice(0, 3).toString());

const b1 = Buffer.from("Sourabh ");
const b2 = Buffer.from("Manawat");
console.log(Buffer.concat([b1, b2]).toString());