function calcularRanked(vitorias, derrotas) {
  return vitorias - derrotas;
}

function obterNivel(vitorias) {
  if (vitorias > 100) return 'Imortal'
  else if (vitorias > 90) return 'Lendário'
  else if (vitorias > 80) return 'Diamante'
  else if (vitorias > 50) return 'Ouro'
  else if (vitorias > 20) return 'Prata'
  else if (vitorias > 10) return 'Bronze'
  else return 'Ferro'
}

function apresentarHeroi(nome, resultado, nivel) {
  console.log(
    `O herói ${nome} tem saldo de ${resultado} vitórias e está no nível ${nivel}.`
  )
}

// Exporta as funções para uso externo
module.exports = {
  calcularRanked,
  obterNivel,
  apresentarHeroi
};
