const express = require("express");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(express.urlencoded());
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
app.get("/store", (request, response) => {
  response.send(groceryList);
});

app.post("/store", (request, response) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});
