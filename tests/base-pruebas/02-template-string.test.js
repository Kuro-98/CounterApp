import { getSaludo } from '../../src/base-pruebas/02-templateStrings';

describe('Pruebas en 02-template-string ', () => {
  test('getSaludo debe de retornar "Hola Manolo"', () => {
    const name = 'Manolo';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}!!!`);
  });
});
