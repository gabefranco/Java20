const mdc = require ('./01-teste')

test('01 - O MDC de 42 e 60 é 6', () => {
  expect(mdc(42, 60)).toBe(6);
});