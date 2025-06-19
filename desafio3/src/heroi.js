/*
# 3 Escrevendo as classes de um Jogo

** O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de Repetição
- Estruturas de Decisão
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

- exibir a mensagem: ("O {tipo} atacou usando {ataque}");
- onde estiver escrito {tipo} deve ser concatenado com o tipo que está na propriedade da classe;
- onde estiver escrito {ataque} a descrição deve ser diferente de acordo com o tipo, seguindo a tabela abaixo:

se mago -> o ataque deve exibir (usou magia);
se guerreiro -> o ataque deve exibir (usou espada);
se monge -> o ataque deve exibir (usou artes marciais);
se ninja -> o ataque deve exibir (usou shuriken).

## Saída

A mensagem final deve exibir o seguinte:

- (`O {tipo} {nome} atacou usando (ataque}`)

ex.: O mago atacou usando magia - O guerreiro atacou usando espada
*/

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    };

    atacar() {
        let ataque;

        if(this.tipo === "mago") {
            ataque = "magia";
        } else if(this.tipo === "guerreiro") {
            ataque = "espada";
        } else if(this.tipo === "monge") {
            ataque = "artes marciais";
        } else if(this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque indefinido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`)
    };
};

module.exports = Heroi;
