# 🧠 Desafio do Felipão 3 - Classe de Herói

Este projeto faz parte do terceiro desafio proposto no bootcamp da DIO, ministrado pelo instrutor Felipão. O objetivo é desenvolver uma aplicação simples em JavaScript que utilize **classes**, **métodos**, **entrada de dados via terminal** e **estrutura de decisão** para simular um herói atacando, com base em seu tipo.

---

## 🧾 Descrição

A aplicação solicita ao usuário:
- O nome do herói
- A idade do herói
- O tipo do herói (ex: mago, guerreiro, monge, ninja)

Com base no tipo informado, o programa exibe o **ataque correspondente**:

| Tipo do Herói | Ataque Utilizado      |
|---------------|------------------------|
| mago          | magia                  |
| guerreiro     | espada                 |
| monge         | artes marciais         |
| ninja         | shuriken               |

Ao final, o programa imprime a seguinte mensagem:

```
console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`)
```


---

## 🗂 Estrutura do Projeto
```
desafio3/
├── node_modules/
├── src/
│ ├── heroi.js # Arquivo com a classe Heroi
│ └── main.js # Arquivo principal que executa o programa
├── package.json
└── README.md
```

---

## 🚀 Como executar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/desafio-felipao3.git
cd desafio-felipao3
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
node src/main.js
```

🛠 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- prompt-sync

📌 Observações

O tipo do herói digitado pelo usuário é convertido para letras minúsculas automaticamente, garantindo maior flexibilidade de entrada.

O projeto foi estruturado separando a lógica da classe (heroi.js) e a execução principal (main.js) para melhor organização.

Desenvolvido com foco em aprendizado de boas práticas com orientação a objetos e modularização em Node.js.

📬 Contato
Desenvolvido por Reginaldo Dias como parte dos desafios da DIO.
GitHub: https://github.com/RegisND
