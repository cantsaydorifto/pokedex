import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styles from './PokemonInfo.module.css';
import Loading from '../../Components/Loading/Loading';
import {
  getOnePokemon,
  getPokemonId,
  PokemonData,
  pokeStats,
} from '../helpers';

function PokemonInfo() {
  const { id } = useParams() as {
    id: string;
  };

  const {
    isError,
    isLoading,
    data: res,
  } = useQuery(['pokemon', id], () => getOnePokemon(id), {
    refetchOnWindowFocus: false,
  });

  const curPokemon: PokemonData = res ? res[0].data : {};

  const pokeText: {
    flavor_text: string;
  } = res
    ? res[1].data.flavor_text_entries.find(
        (el: { flavor_text: string; language: { name: string } }) =>
          el.language.name === 'en'
      )
    : '';

  if (isLoading || isError) return <Loading />;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.infoCard} ${curPokemon.types[0].type.name}CardColor`}
      >
        {Number(id) > 1 && (
          <Link className={styles.prev} to={`/pokedex/${Number(id) - 1}`}>
            <div className="arrow" />
          </Link>
        )}
        {Number(id) < 905 && (
          <Link className={styles.next} to={`/pokedex/${Number(id) + 1}`}>
            <div className="arrow" />
          </Link>
        )}
        <div className={styles.pokemonAndId}>
          <p className={styles.pokemonId}>#{getPokemonId(id)}</p>
          <p className={styles.pokemonName}>
            {curPokemon.name[0].toUpperCase() + curPokemon.name.slice(1)}
          </p>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(
              id
            )}.png`}
            alt=""
          />
          <div className="typeRow">
            {curPokemon.types.map((el) => (
              <div key={el.type.name} className={`type ${el.type.name}`}>
                {el.type.name[0].toUpperCase() + el.type.name.slice(1)}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.row2}>
          <div>
            <h3>Bio: </h3>
            <p className={styles.pokemonBio}>
              {pokeText.flavor_text.replaceAll('\f', ' ')}
            </p>
          </div>
          <div>
            <h3>Abilities: </h3>
            {curPokemon.abilities.map((el, idx) => (
              <span key={el.ability.name}>
                {(idx ? ', ' : '') +
                  el.ability.name[0].toUpperCase() +
                  el.ability.name.slice(1)}
              </span>
            ))}
          </div>
          <div className={styles.statsCard}>
            <h3>Stats</h3>
            <div className={styles.stats}>
              <h3>Height: </h3>
              <p>{curPokemon.height / 10}m</p>
            </div>
            <div className={styles.stats}>
              <h3>Weight: </h3>
              <p>{curPokemon.weight / 10}kg</p>
            </div>
            {pokeStats.map((el, idx) => (
              <div key={el} className={styles.stats}>
                <h3>{el}</h3>
                <p>{curPokemon.stats[idx].base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
