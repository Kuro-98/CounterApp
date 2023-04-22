import { render, screen } from '@testing-library/react';
import { App } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
  const title = 'Hola Soy Kuro';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, Soy Kuro" ', () => {
    render(<App title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe de mostrar el titulo en un h1', () => {
    render(<App title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    render(<App title='Sop bro' subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
