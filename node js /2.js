const http = require("http");
const PORT = 4000;
const serveBasic = (req, res) => {
  if (req.url === "/home") {
    res.end("home page");
  } else res.end("hello");
};

const server = http.createServer(serveBasic);

server.listen(PORT, () => console.log(`server running on ${PORT}`));
