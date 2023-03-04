import { motion } from 'framer-motion';
import SearchBar from '../../Components/SearchBar/SearchBar';
import styles from './Search.module.css';

function Search() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300, y: 0, rotateZ: 10 }}
      animate={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
      className={styles.mainSearchCard}
    >
      <h1>Search For Any Pokemon</h1>
      <SearchBar />
    </motion.div>
  );
}

export default Search;
