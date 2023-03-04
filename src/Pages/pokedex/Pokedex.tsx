import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

import {
  getPokemonData,
  getPokemonId,
  getPokemonNames,
  PokemonData,
} from '../helpers';
import styles from './Pokedex.module.css';

function Pokedex() {
  const [page, setPage] = useState(1);
  const { data } = useQuery(['pokemon', page], () => getPokemonNames(page), {
    refetchOnWindowFocus: false,
  });
  const res = data?.data.results;
  const prevPageUrl = data?.data.previous;
  const nextPageUrl = data?.data.next;

  const { isLoading, data: pokemonData } = useQuery(
    ['pokemon', res],
    () => getPokemonData(res),
    {
      enabled: !!res,
      refetchOnWindowFocus: false,
    }
  );

  const pokeData: PokemonData[] | undefined = pokemonData?.map(
    (el: { data: PokemonData }) => el.data
  );

  if (!pokeData || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className={styles.pokedexHeading}>Pokedex</h1>
      <div className={styles.prevNextButtons}>
        {prevPageUrl && (
          <button type="button" onClick={() => setPage((prev) => prev - 1)}>
            Previous
          </button>
        )}
        {nextPageUrl && (
          <button type="button" onClick={() => setPage((prev) => prev + 1)}>
            Next
          </button>
        )}
      </div>
      <div className={styles.mainPokedexCard}>
        {pokeData.map((el) => (
          <div key={el.id}>
            <Link
              to={`/pokedex/${el.id}`}
              className={`${styles.pokemonCard} ${el.types[0].type.name}CardColor`}
            >
              <div className={styles.pokeId}>#{el.id}</div>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(
                  el.id
                )}.png`}
                alt={el.name}
              />
              <h2>{el.name[0].toUpperCase() + el.name.slice(1)}</h2>
              <div className="typeRow">
                {el.types.map((pokeType) => (
                  <div
                    key={Math.random()}
                    className={`type ${pokeType.type.name}`}
                  >
                    {pokeType.type.name[0].toUpperCase() +
                      pokeType.type.name.slice(1)}
                  </div>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pokedex;
