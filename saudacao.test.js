const criarSaudacao = require('./saudacao');

describe('Algoritmo de Saudação', () => {
  test('deve retornar saudação com o nome fornecido', () => {
    expect(criarSaudacao("Maria")).toBe("Olá, Maria!");
  });

  test('deve retornar saudação padrão se nenhum nome for passado', () => {
    expect(criarSaudacao()).toBe("Olá, visitante!");
  });
});