describe('Pruebas en tal Componente', () => {
  test('descripcion de la prueba', () => {
    //1. Inicializacion
    const message1 = 'Hola mundo';
    //2. Estimulo
    const message2 = message1.trim();

    //3. Observar el comportamiento... esperado
    //expect(message1).toBe(message2); //tobe significa = a

    expect(message1).toBe(message2);
  });
});
