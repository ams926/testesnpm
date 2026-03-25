// algoritmo.test.js
const ehPar = require('./teste');

describe('Algoritmo ehPar', () => {
  test('deve retornar true para o número 4', () => {
    expect(ehPar(4)).toBe(true);
  });

  test('deve retornar false para o número 5', () => {
    expect(ehPar(5)).toBe(false);
  });
});