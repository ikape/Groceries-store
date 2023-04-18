const express = require("express");
const app = express();
const PORT = 3030;

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});
// PORT
app.listen(PORT, () => console.log(`Running express Server on Port ${PORT}`));

const groceryList = [
  {
    item: "milk",
    quantity: 2
  },
  {
    item: "cereal",
    quantity: 5
  },
  {
    item: "cocopops",
    quantity: 9
  }
];

// Routes
app.get("/store", (request, response) => {
  response.send(groceryList);
});

app.get("/store/:item", (request, response) => {
  const { item } = request.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
});
app.post("/store", (request, response) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});
