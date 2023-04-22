//Debe de hacer match con el snapshot

import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

//Debe de mostrar el valor inicial de 100
describe('Pruebas en CounterApp', () => {
  const valor = 10;

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={valor} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={valor} />);

    expect(screen.getByText(10)).toBeTruthy();
  });

  test('Debe de incrementar con el boton +1', () => {
    render(<CounterApp value={valor} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Debe de decrementar con el boton -1', () => {
    render(<CounterApp value={valor} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Debe de funcionar el boton de reset', () => {
    render(<CounterApp value={valor} />);
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText(10)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
  });
});
