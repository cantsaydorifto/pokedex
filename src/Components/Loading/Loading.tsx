import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.handContainer}>
      <img
        src="https://github.com/cantsaydorifto/pokeball-spinner/blob/master/hand%20%20-%204.png?raw=true"
        alt="hand"
      />
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
