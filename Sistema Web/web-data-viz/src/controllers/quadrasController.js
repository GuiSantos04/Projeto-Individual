var quadrasModel = require("../models/quadrasModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var cep = req.body.cepServer;
  var cidade = req.body.cidadeServer;
  var estado = req.body.estadoServer;
  var numero = req.body.numeroServer;
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
  } else if (fkUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    quadrasModel.cadastrar(nome, cep, cidade, estado, numero, fkUsuario)
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
  buscarAquariosPorEmpresa,
  cadastrar
}