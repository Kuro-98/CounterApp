import PropTypes from 'prop-types';

export const App = ({ title, subTitle, name }) => {
  /* Existe otra manera de definir el valor por defecto
  de los props y no hacerlo directo aqui arriba asi que 
  veremos la mejor opcion cuando tenemos muchos: */
  return (
    <>
      <div data-testid='test-title'>{title}</div>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

App.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  name: 'Manolo Morales',
  subTitle: 'No hay subtitulo',
  //title: 'No hay titulo',
};

/* Usualmente estas dos configuraciones deben ponerse al final*/
