function criarSaudacao(nome) {
  if (!nome) {
    return "Olá, visitante!";
  }
  return `Olá, ${nome}!`;
}

module.exports = criarSaudacao;