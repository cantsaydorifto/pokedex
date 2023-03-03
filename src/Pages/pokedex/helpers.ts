import axios from 'axios';

export type PokemonData = {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
};

type Response = [
  {
    name: string;
    url: string;
  }
];

export const getPokemonNames = (page: number) => {
  const offset = 20 * (page - 1);
  return axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${20}`
  );
};

export const getPokemonData = (res: Response) => {
  return Promise.all(res.map((el) => axios.get(el.url)));
};

export const getPokemonId = (id: number) => {
  const str = `00${id}`;
  return str.slice(-3);
};
