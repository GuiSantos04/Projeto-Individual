var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, cep, cidade, estado, numero, fkUsuario){
  
  var instrucaoSql = `INSERT INTO quadra(Nome, cep, cidade, estado, numero, fkUsuario) VALUES ('${nome}', '${cep}', '${cidade}', '${estado}', '${numero}', '${fkUsuario}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
