import styles from './Loading.module.css';
import hand from '../../assets/hand.png';

export default function Loading() {
  return (
    <div className={styles.handContainer}>
      <img src={hand} alt="loading" />
      <div className={styles.pokeballContainer}>
        <div className={styles.wrapper}>
          <div className={styles.pokeballWrapper}>
            <div className={styles.pokeball} />
          </div>
        </div>
      </div>
    </div>
  );
}
