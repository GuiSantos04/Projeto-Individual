var quadrasModel = require("../models/quadrasModel");

function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var cep = req.body.cepServer;
  var cidade = req.body.cidadeServer;
  var estado = req.body.estadoServer;
  var numero = req.body.numeroServer;
  var regiao = req.body.regiaoServer;
  var fkUsuario = req.body.fkUsuarioServer;

  if (nome == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (cep == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (cidade == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (estado == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (numero == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (regiao == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (fkUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    quadrasModel.cadastrar(nome, cep, cidade, estado, numero, regiao, fkUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar
}