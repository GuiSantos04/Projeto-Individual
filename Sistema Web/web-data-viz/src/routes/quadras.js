var express = require("express");
var router = express.Router();

var quadrasController = require("../controllers/quadrasController");

router.post("/cadastrar", function (req, res) {
  quadrasController.cadastrar(req, res);
})

module.exports = router;