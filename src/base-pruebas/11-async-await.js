export const getImagen = async () => {
  try {
    const apiKey = 'WBZeyiofNANN96waIEi3xd1WP42Hk1Pz';
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respuesta.json();
    const { url } = await data.images.original;

    return url;
  } catch (error) {
    //manejo del error
    console.log(error);
    return 'No se encontro la imagen';
  }
};
