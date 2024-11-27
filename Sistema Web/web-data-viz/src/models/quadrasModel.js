var database = require("../database/config");

function cadastrar(nome, cep, cidade, estado, numero, regiao, fkUsuario){
  
  var instrucaoSql = `INSERT INTO quadra(Nome, cep, cidade, estado, numero, regiao, fkUsuario) VALUES ('${nome}', '${cep}', '${cidade}', '${estado}', '${numero}', '${regiao}', '${fkUsuario}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar
}
