var formularioModel = require("../models/formularioModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idade =req.body.idadeServer
    var jogosMes =req.body.jogosMesServer
    var posicao =req.body.posicaoServer
    var genero =req.body.generoServer
    var tempPratica =req.body.tempPraticaServer
    var nivel =req.body.nivelServer
    var campeonatos =req.body.campeonatosServer
    var fkUsuario = req.body.fkUsuarioServer;
    


    // Faça as validações dos valores
    if (idade == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (jogosMes == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (posicao == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (tempPratica == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nivel == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (campeonatos == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.cadastrar(idade, jogosMes, posicao, genero, tempPratica, nivel, campeonatos, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}