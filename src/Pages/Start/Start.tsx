import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Start.module.css';
import bulbasaur from '../../assets/bulbasaur.png';
import pikachu from '../../assets/pikachu-search.png';

export default function Start() {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: 400, rotateZ: 5 }}
      animate={{ x: 0, rotateZ: 0 }}
      exit={{ x: -800, y: 800, opacity: 0, rotateZ: -15 }}
    >
      <div className={`${styles.card} ${styles.searchByName}`}>
        <Link to="/search" className={`${styles.linkCard} ${styles.linkName}`}>
          <p>Search by name</p>
          <img src={pikachu} alt="search by name" />
        </Link>
      </div>
      <div className={`${styles.card} ${styles.all}`}>
        <Link to="/pokedex" className={`${styles.linkCard} ${styles.linkAll}`}>
          <p>All Pokemon</p>
          <img src={bulbasaur} alt="all pokemon" />
        </Link>
      </div>
    </motion.div>
  );
}
