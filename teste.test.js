const sum = require('./teste');

test('Deve diminuir', () => {
    expect(sum(4, 4)).toBe(16);
})

test('Deve diminuir too', () => {
    expect(sum(0,0)).toBe(0)
})
