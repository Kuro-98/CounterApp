import { retornaArreglo } from '../../src/base-pruebas/07-deses-arreglos';

describe('Prubas en 07-deses-arreglos', () => {
  test('Debe de retornar un string y un numero', () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(letters).toEqual(expect.any(String));
  });
});
