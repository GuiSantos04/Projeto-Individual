var express = require("express");
var router = express.Router();

var muralController = require("../controllers/muralController");

router.get("/listar", function (req, res) {
    muralController.listar(req, res);
});

module.exports = router;