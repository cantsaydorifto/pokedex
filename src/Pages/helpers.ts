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

export type SearchDataPokemon = {
  name: string;
  id: number;
};

export const pokedexPageVariant = {
  initial: {
    x: 500,
    y: -500,
    rotateZ: 5,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    rotateZ: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    rotateZ: -5,
    x: -300,
    y: 300,
  },
};

export const homePageVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    x: -150,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};
