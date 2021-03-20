"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/posts";
const retrieve = async () => {
  var data = await axios_1["default"].get(url);
  console.log(data);
};

retrieve();
