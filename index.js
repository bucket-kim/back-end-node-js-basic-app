const fs = require("fs");

const http = require("http");
const url = require("url");

// ----------------------------------------
// FILES

// blocking method, synchronous

// const textIn = fs.readFileSync("./text/input.txt", "utf8");
// console.log(textIn);

// const textOut = `This is just a random string: ${textIn}\n Created on ${Date.now()}`;

// fs.writeFileSync("./text/output.txt", textOut);
// console.log("File written!");

// non-blocking, asychronous

// fs.readFile("./text/start.txt", "utf8", (err, data1) => {
//   fs.readFile(`./text/${data1}.txt`, "utf8", (err, data2) => {
//     fs.readFile(`./text/append.txt`, "utf8", (err, data3) => {
//       fs.writeFile("./text/final.txt", `${data2}\n${data3}`, "utf8", (err) => {
//         console.log("Your file has been written~");
//       });
//     });
//   });
// });
// console.log("Will read file!");

// ----------------------------------------
// SERVER

//  top level sync function to read json file 100%
const data = fs.readFileSync(`${__dirname}/data-set/data.json`, "utf8");
const dataObj = JSON.parse(data);

// call back function once sync function is fine
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview!");
  } else if (pathName === "/product") {
    res.end("this is product!");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>page is not found</h1>");
  }
});

server.listen("8000", () => {
  console.log("Listening to localhost:8000");
});
