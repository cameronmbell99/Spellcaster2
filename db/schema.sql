Drop database if exists  spells_db;

CREATE DATABASE spells_db;

USE spells_db;

-- Creates the table "products" within animals_db --
CREATE TABLE spells (
 
  id integer auto_increment not null,

  spell_name varchar(30) not null,

  isCast boolean default false,

  primary key (id)
);
