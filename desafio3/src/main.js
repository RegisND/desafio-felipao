const prompt = require('prompt-sync')();
const Heroi = require('./heroi');

const nomeHeroi = prompt('Nome: ');
const idadeHeroi = Number(prompt('Idade: '));
const tipoHeroi = prompt('Tipo: ').toLowerCase();

const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
heroi.atacar();