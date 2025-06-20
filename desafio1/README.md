# 🧙‍♂️ Desafio do Felipão 1 - Classificador de Nível do Herói

Este projeto é o primeiro desafio do bootcamp promovido pela DIO, ministrado pelo instrutor Felipão. O objetivo do desafio é construir uma aplicação simples em JavaScript que utilize estruturas de decisão para classificar um herói com base em sua quantidade de experiência (XP).

---

## 🧾 Descrição

Ao executar a aplicação, o programa solicita ao usuário o nome do herói e, em seguida, inicia a sua jornada exibindo a seguinte mensagem:
```
Bem-vindo, [nome]! Vamos iniciar a sua jornada.
```

Após realizar uma batalha, o programa exibe a seguinte mensagem:
```
Você enfrentou um desafio! Digite a experiência ganha: 
```

Com base nessa experiência, o sistema classifica o herói em um dos seguintes níveis:

| XP                          | Nível        |
|-----------------------------|--------------|
| Até 1000                    | Ferro        |
| Entre 1001 e 2000           | Bronze       |
| Entre 2001 e 5000           | Prata        |
| Entre 5001 e 7000           | Ouro         |
| Entre 7001 e 8000           | Platina      |
| Entre 8001 e 9000           | Ascendente   |
| Entre 9001 e 10000          | Imortal      |
| Acima de 10000              | Radiante     |

```
O Herói [nome], agora possui [xp] XP e está no nível [nivel].

Deseja continuar a aventura? (s/n): 
```

O programa continua a execução enquanto sua resposta for positiva e caso seja negativa, o programa finaliza com uma resposta de agradecimento e com o resultado final, conforme abaixo:
```
Obrigado por jogar! Seu herói terminou com [xp] XP no nível [nivel].
```

---

## 🗂 Estrutura do Projeto
```
desafio-felipao/
├── node_modules/
├── src/
│ └── main.js # Arquivo principal do projeto
├── package.json
└── README.md
```

---

## 🚀 Como executar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/desafio-felipao.git
cd desafio-felipao
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

## 🧠 Aprendizados

- Uso de variáveis e operadores;
- Entrada de dados pelo terminal;
- Conversão de tipos (Number(prompt(...)));
- Estruturas condicionais (if, else if, else);
- Organização simples de projeto com Node.js.

---

## 📬 Contato

Desenvolvido por Reginaldo Dias como parte dos desafios da DIO.
GitHub: https://github.com/RegisND