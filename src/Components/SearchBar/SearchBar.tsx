import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import styles from './SearchBar.module.css';
import allPoke from './allPokemon';
import { getPokemonId, SearchDataPokemon } from '../../Pages/helpers';

function SearchBar() {
  const [inputData, setInputData] = useState('');
  const [filterData, setFilterData] = useState<SearchDataPokemon[]>([]);

  const pokeData = useMemo(
    () =>
      allPoke.map((el, idx) => {
        return {
          name: el.toLowerCase(),
          id: idx + 1,
        };
      }),
    []
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
    const searchQuery = event.target.value;
    const arr = pokeData.filter((el) => {
      return el.name.includes(searchQuery);
    });
    setFilterData(arr);
  };

  return (
    <div className={styles.searchBar}>
      <input type="text" onChange={changeHandler} />
      {inputData && filterData.length !== 0 && (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className={styles.searchResult}
        >
          {filterData.slice(0, 5).map((el) => {
            return (
              <Link key={el.id} to={`/pokedex/${el.id}`}>
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(
                    el.id
                  )}.png`}
                  alt=""
                />
                <p>
                  {`#${getPokemonId(el.id)} `}
                  {el.name[0].toUpperCase() + el.name.slice(1)}
                </p>
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

export default SearchBar;
