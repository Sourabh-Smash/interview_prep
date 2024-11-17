// const express = require("express");
// const fs = require("fs");
// const zlib = require("node:zlib");
// const status = require("express-status-monitor");
// const app = express();
// const PORT = 3000;
// app.use(status());

// fs.createReadStream("./one.txt").pipe(
//   zlib.createGzip().pipe(fs.createWriteStream("demo.zip"))
// );

// app.get("/", (req, res) => {
//   // fs.readFile("one.txt", (err, data) => {
//   //   if (err) {
//   //     throw new Error(err);
//   //   }
//   //   // console.log(data);
//   //   res.end(data);
//   // });
//   res.end("hello");

//   // const stream = fs.createReadStream('./one.txt', 'utf-8');
//   // stream.on('data', (chunk) => res.write(chunk));
//   // stream.on('end', () => res.end());
// });
// app.listen(PORT, () => console.log(`server is running at ${PORT}`));
