import { render } from '@testing-library/react';
import { App } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Hola, soy Pedrin';
  //   const { container } = render(<App title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('Debe de mostrar el titulo en un H1', () => {
    const title = 'Hola, soy Pedrin';
    const { container, getByText, getByTestId } = render(<App title={title} />);
    expect(getByText(title)).toBeTruthy();

    const p = getByTestId('test-title').innerHTML;

    console.log(p);
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    expect(getByTestId('test-title').innerHTML).toBe(title);
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const subtitle = 'Que onda bro';
    const { getAllByText } = render(
      <App title='Sop bro' subTitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
