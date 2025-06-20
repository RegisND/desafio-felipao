# 🧠 Desafios do Felipão — Bootcamp DIO

Repositório com os desafios práticos propostos pelo instrutor **Felipão**, durante o bootcamp da **DIO** na trilha de **Lógica de Programação com JavaScript**.

Este repositório contém dois projetos:

1. 🧙‍♂️ Classificador de Nível do Herói (Desafio 1);
2. ⚔️ Calculadora de Partidas Rankeadas (Desafio 2);
3. 🧠 Classe de Herói com Ataque (Desafio 3).

---

## 🧙‍♂️ Desafio 1 — Classificador de Nível do Herói

### 🎯 Objetivo

Criar um programa em JavaScript que classifica o herói com base na quantidade de **experiência (XP)** informada pelo usuário.

### 🧪 Regras de Classificação

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

### 💻 Execução

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

### 📁 Arquivo principal
`/src/main.js`

---

## ⚔️ Desafio 2 — Calculadora de Partidas Rankeadas

### 🎯 Objetivo

Criar uma função que recebe a quantidade de **vitórias** e **derrotas** de um jogador, calcula o saldo de vitórias, e classifica o herói conforme seu desempenho.

### 🧪 Regras de Classificação

| Saldo de Vitórias           | Nível        |
|-----------------------------|--------------|
| Menor que 10                | Ferro        |
| Entre 11 e 20               | Bronze       |
| Entre 21 e 50               | Prata        |
| Entre 51 e 80               | Ouro         |
| Entre 81 e 90               | Diamante     |
| Entre 91 e 100              | Lendário     |
| Maior que 100               | Imortal      |

### 💡 Funcionalidades

- Uso de **funções separadas** para organização:
  
  - `calcularRanked()`
  - `obterNivel()`
  - `apresentarHeroi()`

- Código modular com separação de arquivos.

### 📁 Estrutura
```
desafio2/
├── src/
│ ├── funcoes.js # Funções auxiliares
│ └── main.js # Arquivo principal do projeto
```

---

## ▶️ Como executar os projetos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/desafio-felipao.git
cd desafio-felipao
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto desejado:
```bash
# Projeto 1 - Classificador de Herói
node src/heroi.js

# Projeto 2 - Calculadora de Partidas Rankeadas
node desafio2/src/main.js
```

💡 Certifique-se de ter o Node.js instalado.

📦 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- prompt-sync

📚 Aprendizados

- Entrada de dados via terminal;
- Condições (if, else);
- Funções e modularização;
- Organização de projetos com Node.js;
- Separação de responsabilidades e reutilização de código.



---

## 🧠 Desafio 3 — Classe de Herói com Ataque

### 🎯 Objetivo

Criar uma classe em JavaScript que representa um herói com propriedades e um método de ataque personalizado com base no tipo.

### 🧾 Descrição

O programa solicita ao usuário:

- O nome do herói
- A idade do herói
- O tipo do herói (ex: mago, guerreiro, monge, ninja)

Com base no tipo informado, o herói executa um ataque específico:

| Tipo do Herói | Ataque Utilizado      |
|---------------|------------------------|
| mago          | magia                  |
| guerreiro     | espada                 |
| monge         | artes marciais         |
| ninja         | shuriken               |

Exemplo de saída:
```
O mago {nome} atacou usando magia!
```


### 📁 Estrutura
```
desafio3/
├── node_modules/
├── src/
│   ├── heroi.js       # Classe Heroi
│   └── main.js        # Código principal do projeto
├── package.json
└── README.md
```
---

## ▶️ Como executar os projetos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/desafio-felipao.git
cd desafio-felipao
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto desejado:
```bash
# Projeto 1 - Classificador de Nível
node src/main.js

# Projeto 2 - Calculadora de Partidas Rankeadas
node desafio2/src/main.js

# Projeto 3 - Classe de Herói com Ataque
node desafio3/src/main.js
```

💡 Certifique-se de ter o Node.js instalado.

---

## 📦 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- prompt-sync

---

## 📚 Aprendizados

- Entrada de dados via terminal;
- Condições (if, else);
- Classes e métodos;
- Modularização de código;
- Organização de projetos com Node.js;
- Separação de responsabilidades.

---

## 🧑‍💻 Autor

Desenvolvido por Reginaldo Dias
GitHub: github.com/RegisND
