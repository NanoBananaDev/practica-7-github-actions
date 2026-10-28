import { calcularTotal } from './calculadora.js';

const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const dinero = new Intl.NumberFormat('es-BO', { style: 'currency', currency: 'BOB' });

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  try {
    const precio = Number(document.querySelector('#precio').value);
    const cantidad = Number(document.querySelector('#cantidad').value);
    const descuento = Number(document.querySelector('#descuento').value);
    const { subtotalCentavos, descuentoCentavos, totalCentavos } = calcularTotal(precio, cantidad, descuento);
    resultado.textContent = `Subtotal: ${dinero.format(subtotalCentavos / 100)} · Descuento: ${dinero.format(descuentoCentavos / 100)} · Total: ${dinero.format(totalCentavos / 100)}`;
  } catch (error) {
    resultado.textContent = error.message;
  }
});

formulario.requestSubmit();
