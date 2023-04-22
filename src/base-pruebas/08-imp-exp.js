import heroes from '../data/heroes';

heroes;

export const getHeroeById = (id) => {
  return heroes.find((personaje) => personaje.id === id);
};

export const getHeroesByOwner = (owner) => {
  return heroes.filter((personaje) => personaje.owner === owner);
};
