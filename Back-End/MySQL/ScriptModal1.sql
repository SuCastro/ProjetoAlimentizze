CREATE DATABASE db_alimentizze;
USE db_alimentizze;

CREATE TABLE tb_usuario (
idUsuario INT AUTO_INCREMENT NOT NULL,
nomeCompleto VARCHAR (255) NOT NULL,
email VARCHAR (255) NOT NULL,
senha VARCHAR (255) NOT NULL,
tipoUsuario ENUM ("DOADOR","ONG"),
PRIMARY KEY (idUsuario)
);

CREATE TABLE tb_tema (
idTema INT AUTO_INCREMENT NOT NULL,
categoria VARCHAR (255) NOT NULL,
PRIMARY KEY (idTema)
);

CREATE TABLE tb_postagem (
idPostagem INT AUTO_INCREMENT NOT NULL,
titulo VARCHAR (255) NOT NULL,
descricao VARCHAR (255) NOT NULL,
dataExpiracao DATE NOT NULL,
link VARCHAR (255) NOT NULL,
fkTema INT NOT NULL,
fkUsuario INT NOT NULL,
PRIMARY KEY (idPostagem),
FOREIGN KEY (fkTema) REFERENCES db_alimentizze.tb_tema (idTema),
FOREIGN KEY (fkUsuario) REFERENCES db_alimentizze.tb_usuario (idUsuario)
);

INSERT INTO tb_tema (categoria)
VALUES ('ALIMENTOS'),('DINHEIRO'),('COLABORAÇAO');

INSERT INTO tb_usuario (nomeCompleto, email, senha, tipoUsuario)
VALUES 
('Gustavo Boaz', 'gustavoboaz@email.com', '123456', 'DOADOR'),
('Pamela Boaz', 'pamelaboaz@email.com', '654321', 'ONG');

INSERT INTO tb_postagem (titulo, descricao, dataExpiracao, link, fk_tema, fkUsuario)
VALUES
('Enchente Acaba com 7 Familias na Zona-Leste', 'MANCHETE DO TEMA', '2021-07-25', 'http://linkdaongpamela.com', 1, 2);