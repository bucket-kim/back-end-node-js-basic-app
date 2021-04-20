const EventEmmiter = require("events");
const http = require("http");

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmiitter = new Sales();

myEmiitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmiitter.on("newSale", () => {
  console.log("Constumer name: Jonas");
});

myEmiitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left.`);
});

myEmiitter.emit("newSale", 9);

// ---------------------------------------

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request 😀!");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
