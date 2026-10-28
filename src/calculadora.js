/** Calcula un subtotal con descuento. Todos los importes se devuelven en centavos. */
export function calcularTotal(precio, cantidad, descuento) {
  if (!Number.isFinite(precio) || precio < 0) {
    throw new RangeError('El precio debe ser un número mayor o igual a cero.');
  }
  if (!Number.isInteger(cantidad) || cantidad < 1) {
    throw new RangeError('La cantidad debe ser un entero mayor o igual a uno.');
  }
  if (!Number.isFinite(descuento) || descuento < 0 || descuento > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100.');
  }

  const subtotalCentavos = Math.round(precio * 100) * cantidad;
  const descuentoCentavos = Math.round(subtotalCentavos * descuento / 100);
  return {
    subtotalCentavos,
    descuentoCentavos,
    totalCentavos: subtotalCentavos - descuentoCentavos
  };
}
