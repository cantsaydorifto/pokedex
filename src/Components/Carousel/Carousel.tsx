import styles from './Carousel.module.css';
import carouselData from './carouselData';

// const pokemonData = [...marqueeData];

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        {carouselData.map((el) => (
          <div key={el} className={styles.carouselImageContainer}>
            <img src={el} alt="pokemon" />
          </div>
        ))}
        {carouselData.map((el) => (
          <div key={el} className={styles.carouselImageContainer}>
            <img src={el} alt="pokemon" />
          </div>
        ))}
      </div>
    </div>
  );
}
