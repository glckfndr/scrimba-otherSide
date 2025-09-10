import http from "node:http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  //res.setHeader("Content-type", "text/html");
  //res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<html><h1>The server is working now</h1></html>");
});

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
