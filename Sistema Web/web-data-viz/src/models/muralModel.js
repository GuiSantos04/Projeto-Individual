var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            nome,
            cep,
            cidade,
            estado,
            numero,
            regiao
        FROM quadra;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
CASE
WHEN regiao = 'Sul' THEN 'Sul'
WHEN regiao = 'Sudeste' THEN 'Sudeste'
WHEN regiao = 'Norte' THEN 'Norte'
WHEN regiao = 'Nordeste' THEN 'Nordeste'
WHEN regiao = 'Centro-Oeste' THEN 'Centro-Oeste'
END AS regioes, count(regiao) AS quantidade
FROM quadra
GROUP BY regiao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar() {
    console.log(
      "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
  
    var instrucaoSql = `
          SELECT 
              truncate(AVG(jogosMes), 0) as media
          FROM formulario;
      `;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function atualizar2() {
    console.log(
      "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
  
    var instrucaoSql = `
          SELECT 
              truncate(AVG(tempoPratica), 0) as pratica
          FROM formulario;
      `;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    listar, atualizar,atualizar2, dados
}
