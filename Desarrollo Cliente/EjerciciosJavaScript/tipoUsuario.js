export const MENSAJES = Object.freeze({
  MENOR: 'Menor de edad',
  ACTIVO: 'Trabajando o estudiando',
  JUBILADO: 'Jubilado',
  NO_POSITIVA: 'La edad debe ser positiva',
  CON_DECIMALES: 'Introduce la edad sin decimales',
  NO_NUMERO: 'La edad introducida no es un número',
});

export function clasificarEdad(edad) {
  if (typeof edad !== 'number' || Number.isNaN(edad) || !Number.isFinite(edad)) {
    throw new Error(MENSAJES.NO_NUMERO);
  }

  if (!Number.isInteger(edad)) {
    throw new Error(MENSAJES.CON_DECIMALES);
  }

  if (edad < 0) {
    throw new Error(MENSAJES.NO_POSITIVA);
  }

  if (edad < 18) {
    return MENSAJES.MENOR;
  }

  if (edad <= 65) {
    return MENSAJES.ACTIVO;
  }

  return MENSAJES.JUBILADO;
}

export function parseEdad(valor) {
  if (typeof valor !== 'string') {
    throw new Error(MENSAJES.NO_NUMERO);
  }

  const limpio = valor.trim();
  if (limpio === '' || !/^[+-]?\d+(\.\d+)?$/.test(limpio)) {
    throw new Error(MENSAJES.NO_NUMERO);
  }

  const numero = Number(limpio);
  if (Number.isNaN(numero)) {
    throw new Error(MENSAJES.NO_NUMERO);
  }

  return numero;
}
