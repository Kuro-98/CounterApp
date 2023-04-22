import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('No se pudo encontrar el heroe');
      }
      /* lo que se que pongamos aqui
    sera enviado cuando pongamos el then y podremos
    uitlizar ahi al contrario, reject lo utilizaremos
    para mostrar errores en caso de no completar lo que 
    queriamos ejecutar.*/
    }, 1000);
  });
  //return promesa;
};
