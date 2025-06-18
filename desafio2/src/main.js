/*
# 2 - Calculadora de partidas Rankeadas

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador e, depois disso, retorne o resultado para uma variável. O saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/
const prompt = require('prompt-sync')();
const { obterNivel, calcularRanked, apresentarHeroi } =
  require('./funcoes');

const nome = prompt('Informe o nome do seu herói: ')
const vitorias = Number(prompt('Informe a quantidade de vitórias: '))
const derrotas = Number(prompt('Informe a quantidade de derrotas: '))

const saldoVitorias = calcularRanked(vitorias, derrotas);
const nivel = obterNivel(saldoVitorias);

apresentarHeroi(nome, saldoVitorias, nivel);