"use strict";

const express = require("express");
const cartRouter = express.Router();

const items = [
  {
    product: "Bacon",
    price: 5,
    quantity: "1 pound",
    id: 0
  },
  {
    product: "Eggs",
    price: 5,
    quantity: "1 dozen",
    id: 1
  },
  {
    product: "Avocados",
    price: 5,
    quantity: "A bag of 5",
    id: 2
  },
  {
    product: "Milk",
    price: 3,
    quantity: "1 gallon",
    id: 3
  }
];

let idCount = 4;

cartRouter.get("/cart-route", (req, res) => {
  res.send(items);
  console.log("get working");
});
cartRouter.post("/cart-route", (req, res) => {
  items.push({
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
    id: idCount++
  });
  res.send(items);
  console.log("post working");
});
cartRouter.delete("/cart-route/:id", (req, res) => {
  for (let item of items) {
    if (item.id == req.params.id) {
      items.splice(items.indexOf(item), 1);
    }
  }
  res.send(items);
  console.log("delete working");
});
cartRouter.put("/cart-route/:id", (req, res) => {
  for (let item of items) {
    if (item.id == req.params.id) {
      items.splice(items.indexOf(item), 1, {
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        it: item.id
      });
    }
  }
  res.send(items);
  console.log("put working");
});

module.exports = cartRouter;