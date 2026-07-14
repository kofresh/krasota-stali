const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {

    const file = path.join(__dirname, "..", "data", "products.json");

    const products = JSON.parse(

        fs.readFileSync(file, "utf8")

    );

    res.json(products);

});

module.exports = router;