const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  if (req.url === "/") {
    res.end(
      "Welcome to khadizas homepage And i love her ..very much..and i'm missing her"
    );
  } else if (req.url === "/about") {
    res.end("I love everything about her");
  } else {
    res.end("this is something else");
  }
});

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
