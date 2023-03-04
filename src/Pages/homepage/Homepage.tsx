import { Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <div className="root">
      <h1>Pokedex</h1>
      <Carousel />
      <div className={styles.start}>
        <p>Start</p>
        <Link to="/start" className="arrow" />
      </div>
    </div>
  );
}

export default Homepage;
