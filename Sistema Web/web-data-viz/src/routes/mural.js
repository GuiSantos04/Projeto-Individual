var express = require("express");
var router = express.Router();

var muralController = require("../controllers/muralController");

router.get("/listar", function (req, res) {
    muralController.listar(req, res);
});

router.get("/dados", function (req, res) {
    muralController.dados(req, res);
});

router.get("/atualizar", function (req, res) {
    console.log('Cheguei na rota')
    muralController.atualizar(req, res);
});


router.get("/atualizar2", function (req, res) {
    console.log('Cheguei na rota')
    muralController.atualizar2(req, res);
});

module.exports = router;