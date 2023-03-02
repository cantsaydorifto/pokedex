import styles from './Carousel.module.css';
import carouselData from './carouselData';

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        {carouselData.map((el) => (
          <div key={el.id} className={styles.carouselImageContainer}>
            <img src={el.link} alt="pokemon" />
          </div>
        ))}
        {carouselData.map((el) => (
          <div key={el.id} className={styles.carouselImageContainer}>
            <img src={el.link} alt="pokemon" />
          </div>
        ))}
      </div>
    </div>
  );
}
