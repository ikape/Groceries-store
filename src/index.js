const express = require("express");
const storeRoute = require("../routes/store");
const marketsRoute = require("../routes/markets");

const app = express();
const PORT = 3030;

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/markets", marketsRoute);
// PORT
app.listen(PORT, () => console.log(`Running express Server on Port ${PORT}`));
