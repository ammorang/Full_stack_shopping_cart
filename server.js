"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const cartRoute = require("./route/cart-route");

app.use(bodyParser.json());
app.use("/portal", cartRoute); 
app.use(express.static(__dirname + "/public"));

let port = 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});