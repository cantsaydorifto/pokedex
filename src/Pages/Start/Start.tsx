import { Link } from 'react-router-dom';
import styles from './Start.module.css';

export default function Start() {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.searchByName}`}>
        <Link to="/search" className={`${styles.linkCard} ${styles.linkName}`}>
          <p>Search by name</p>
          <img
            src="https://github.com/cantsaydorifto/pokedex-app/blob/master/src/icons/pikachu-search.png?raw=true"
            alt="search by name"
          />
        </Link>
      </div>
      <div className={`${styles.card} ${styles.all}`}>
        <Link to="pokedex" className={`${styles.linkCard} ${styles.linkAll}`}>
          <p>All Pokemon</p>
          <img
            src="https://github.com/cantsaydorifto/pokedex-app/blob/master/src/icons/bulbasaur.png?raw=true"
            alt="all pokemon"
          />
        </Link>
      </div>
    </div>
  );
}
