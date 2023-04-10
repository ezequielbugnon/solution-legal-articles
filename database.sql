CREATE DATABASE JurisHand;
USE JurisHand;

CREATE TABLE categories(
id                     int(255) auto_increment not null,
name_category          varchar(100) not null,
CONSTRAINT pk_category PRIMARY KEY(id)
)ENGINE=InnoDb;

INSERT INTO categories VALUES(null, 'Civil');
INSERT INTO categories VALUES(null, 'Penal');
INSERT INTO categories VALUES(null, 'Trabalhista');

CREATE TABLE authors(
id                   int(255) auto_increment not null,
name_author          varchar(100) not null,
CONSTRAINT pk_author PRIMARY KEY(id) 
)ENGINE=InnoDb;

INSERT INTO authors VALUES(null, 'Felipe Tanto');
INSERT INTO authors VALUES(null, 'Nahuel Saez');

CREATE TABLE articles(
id                      int(255) auto_increment not null,
category_id             int(255) not null,
author_id               int(255) not null,
title                   varchar(100) not null,
content                 text not null,
data_publicacion        DATE,
CONSTRAINT pk_articles PRIMARY KEY(id),
CONSTRAINT fk_article_category FOREIGN KEY(category_id) REFERENCES categories(id),
CONSTRAINT fk_article_author   FOREIGN KEY(author_id) REFERENCES authors(id)
)ENGINE=InnoDb;


INSERT INTO articles VALUES(null, 3, 1, 'Perspectivas do Dereito Trabalhista', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo", '2008-7-04');


INSERT INTO articles VALUES(null, 1, 2, 'Perspectivas do Dereito Civil', "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.", '2008-7-04');

