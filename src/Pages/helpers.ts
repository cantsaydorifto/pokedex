import axios from 'axios';

export type PokemonData = {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
  abilities: [{ ability: { name: string } }];
  height: number;
  weight: number;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
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

export const getOnePokemon = (id: string) => {
  const prom1 = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const prom2 = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  return Promise.all([prom1, prom2]);
};

export const getPokemonId = (id: number | string) => {
  const str = `00${id}`;
  return str.slice(-3);
};

export const pokeStats = [
  'Hp',
  'Attack',
  'Defence',
  'Spl-Attack',
  'Spl-Defense',
  'Speed',
];
