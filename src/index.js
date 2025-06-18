/*
Desafio Classificador de nível de Herói

O que deve ser utilizado:

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1000 = Ferro
Se XP for entre 1001 e 2000 = Bronze
Se XP for entre 2001 e 5000 = Prata
Se XP for entre 5001 e 7000 = Ouro
Se XP for entre 7001 e 8000 = Platina
Se XP for entre 8001 e 9000 = Ascendente
Se XP for entre 9001 e 10000 = Imortal
Se XP for maior ou igual a 10001 = Radiante

Saída

Ao final, deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
const prompt = require('prompt-sync')();

let nome = prompt("Escolha o nome do seu herói: ");
let xp = 0;
let continuar = true;

console.log(`\nBem-vindo, ${nome}! Vamos iniciar a sua jornada.`);

while (continuar) {
    let ganho = Number(prompt("Você enfrentou um desafio! Digite a experiência ganha: "));
    xp += ganho;

    let nivel = "";

    if (xp > 10000) {
        nivel = "Radiante"
    } else if (xp > 9000) {
        nivel = "Imortal"
    } else if (xp > 8000) {
        nivel = "Ascendente"
    } else if (xp > 7000) {
        nivel = "Platina"
    } else if (xp > 5000) {
        nivel = "Ouro"
    } else if (xp > 2000) {
        nivel = "Prata"
    } else if (xp > 1000) {
        nivel = "Bronze"
    } else {
        nivel = "Ferro"
    }

    console.log(`\nHerói ${nome} agora possui ${xp} XP e está no nível ${nivel}.\n`);

    let resposta = prompt("Deseja continuar a aventura? (s/n): ").toLowerCase();

    if (resposta !== "s") {
        continuar = false;
        console.log(`\nObrigado por jogar! Seu herói terminou com ${xp} XP no nível ${nivel}.`);
    }
}