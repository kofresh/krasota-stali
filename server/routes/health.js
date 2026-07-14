const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Красота Стали API работает",

        time: new Date()

    });

});

module.exports = router;