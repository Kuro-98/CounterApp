import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUsuarioActivo debe de retornar un objeto', () => {
    const name = 'Manolish';
    const testUser = {
      uid: 'ABC123',
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(testUser).toStrictEqual(user);
  });
});
