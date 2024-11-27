create database individual;

use individual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha char(12)
);

create table quadra(
idQuadra int primary key auto_increment,
nome varchar(45),
cep char(8),
cidade varchar(45),
estado varchar(45),
numero varchar(10),
regiao varchar(45),
fkUsuario int,
constraint fkUsuarioQuadra foreign key(fkUsuario) references usuario(idUsuario)
);
 

create table formulario(
idForm int primary key auto_increment,
idade int,
genero varchar(45),
tempoPratica int,
nivel varchar(40),
posicao varchar(45),
campeonatos char(3),
jogosMes int,
fkUsuario int,
constraint fkUsuarioForm foreign key(fkUsuario) references usuario(idUsuario)
);

