const calculadora = require("../models/calculadora.js");

test("Teste Calculadora", () => {
  const resultado = calculadora.somar(2, 2);

  expect(resultado).toBe(4);
})

test("Teste Calculadora2", () => {
  const resultado = calculadora.somar(1, 2);

  expect(resultado).toBe(3);
})


test("Teste Calculadora3", () => {
  const resultado = calculadora.somar(100, 2);

  expect(resultado).toBe(102);
})