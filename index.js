const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./module/replaceTemp");

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

const tempMain = fs.readFileSync(`${__dirname}/templates/main.html`, "utf8");
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf8"
);
const data = fs.readFileSync(`${__dirname}/data-set/data.json`, "utf8");
const dataObj = JSON.parse(data);

// call back function once sync function is fine
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // overview page
  if (pathname === "/" || pathname === "/main") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempMain.replace("{PRODUCT_CARDS}", cardsHtml);

    res.end(output);

    // product page
  } else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);

    // api call
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    // error callback
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
