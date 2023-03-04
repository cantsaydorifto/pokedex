import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import { homePageVariant } from '../helpers';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <motion.div
      className="root"
      variants={homePageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Pokedex</h1>
      <Carousel />
      <div className={styles.start}>
        <p>Start</p>
        <Link to="/start" className="arrow" />
      </div>
    </motion.div>
  );
}

export default Homepage;
