const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();
const port = 3000;
var file = "data.json";
function loadData() {
  var data = fs.readFileSync(file);
  if (data) data = JSON.parse(data);
  else {
  }
  console.log(data);
  return data;
}

function saveData(data) {
  fs.writeFileSync(file, JSON.stringify(data));
}
// saveData({ 123456: "http://a.com" });
// loadData();
//root endpoint to validate url
app.get("/", (req, res) => {
  var parsedUrl = url.parse(req.query.data);
  console.log(parsedUrl);
  if (!parsedUrl.protocol || !parsedUrl.hostname) res.send("Invalid url");
  else {
    var data = loadData();
    var shortcode = Math.floor(Math.random() * 999999);
    console.log(shortcode);
    data[shortcode] = parsedUrl.href;
    console.log(data);
    saveData(data);

    res.send("code is " + shortcode);
  }
});
app.get("/:code", (req, res) => {
  var code = req.params.code;
  var data = loadData();
  var url = data[code];
  console.log(url);
  res.send(url);
});
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("from fun1");
    res.send("Hello from B!");
    next();
  },
  (req, res) => {
    console.log("from next fun");
  }
);
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
