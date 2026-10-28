import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularTotal } from '../src/calculadora.js';

test('calcula 10 % de descuento sobre dos productos de 50', () => {
  assert.deepEqual(calcularTotal(50, 2, 10), {
    subtotalCentavos: 10000,
    descuentoCentavos: 1000,
    totalCentavos: 8000
  });
});

test('redondea importes a centavos', () => {
  assert.equal(calcularTotal(19.99, 3, 15).totalCentavos, 5097);
});

test('rechaza una cantidad inválida', () => {
  assert.throws(() => calcularTotal(50, 0, 10), RangeError);
});

test('rechaza descuentos fuera del rango', () => {
  assert.throws(() => calcularTotal(50, 1, 101), RangeError);
});
