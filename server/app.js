const express = require("express");
const path = require("path");

const healthRoute = require("./routes/health");
const productsRoute = require("./routes/products");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..")));

app.use("/api/health", healthRoute);
app.use("/api/products", productsRoute);

module.exports = app;