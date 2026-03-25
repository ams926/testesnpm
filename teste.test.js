const sum = require('./teste');

test('Deve diminuir', () => {
    expect(sum(4, 4)).toBe(16);
})
