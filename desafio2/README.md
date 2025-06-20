# 🧠 Desafio do Felipão 2 - Calculadora de Rankeadas

Este projeto faz parte do segundo desafio proposto no bootcamp da DIO, ministrado pelo instrutor Felipão. O objetivo é desenvolver uma aplicação simples em JavaScript que utilize variáveis, estruturas de decisão, funções e módulos para calcular o nível de um herói com base na quantidade de vitórias e derrotas.

---

## 🧾 Descrição

A aplicação solicita ao usuário:
- O nome do herói
- A quantidade de vitórias
- A quantidade de derrotas

Com base nessas informações, é calculado o saldo de vitórias (vitórias - derrotas) e, a partir desse saldo, o programa determina o **nível** do herói, de acordo com a seguinte tabela:

| Faixa de Vitórias         | Nível      |
|---------------------------|------------|
| Menor ou igual a 10       | Ferro      |
| Entre 11 e 20             | Bronze     |
| Entre 21 e 50             | Prata      |
| Entre 51 e 80             | Ouro       |
| Entre 81 e 90             | Diamante   |
| Entre 91 e 100            | Lendário   |
| Maior que 100             | Imortal    |

No final, é exibida a seguinte mensagem:

"O herói [nome] tem saldo de [saldo] vitórias e está no nível [nível]."

---

## 🗂 Estrutura do Projeto
```
desafio2/
├── node_modules/
├── src/
│ ├── funcoes.js # Arquivo com as funções reutilizáveis
│ └── main.js # Arquivo principal que executa o programa
├── package.json
└── README.md
```
---

## 🚀 Como executar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/desafio-felipao2.git
cd desafio-felipao2
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
node src/main.js
```

---

## 🛠 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- prompt-sync

---

## 📌 Observações

As funções foram separadas em um módulo externo (funcoes.js) para promover organização e reutilização de código.

O projeto foi desenvolvido com foco em aprendizado e boas práticas de estruturação de pequenos programas em Node.js.

---

## 📬 Contato

Desenvolvido por Reginaldo Dias como parte dos desafios da DIO.
GitHub: https://github.com/RegisND
