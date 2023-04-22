//Debemos intentar no meter variables ni funciones
/*Dentro del componente a menos que sea sumamente necesario
como en el caso de useState o cosas que forcen usar algo
dentro del componente.*/

export const PrimerApp = () => {
  return (
    <>
      <h2>"Hola como estas tu"</h2>
      <p>Soy un subtitulo</p>
    </>
  );
};

// {JSON.stringify(nombreDarreglo)}
/*Nos permite forzar objetos a texto para imprimirlos ,
pero generalmente no debemos mandar a llamar
objetos dentro del jsx*/
