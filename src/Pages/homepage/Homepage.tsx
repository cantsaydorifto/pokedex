import Carousel from '../../Components/Carousel/Carousel';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <>
      <h1>Pokedex</h1>
      <Carousel />
      <div className={styles.start}>
        <p>Start</p>
        <div className={styles.rightArrow}>
          {/* <Link to="/start">
            <img src={rightArrow} alt="right arrow" />
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Homepage;
