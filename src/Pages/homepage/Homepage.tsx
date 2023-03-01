import React from 'react';
import styles from './Homepage.module.css';
// import Marquee from '../../Marquee/Marquee';

function Homepage() {
  return (
    <>
      <div className={styles.mainPageHeading}>
        <h1>Pokedex</h1>
      </div>
      {/* <Marquee /> */}
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
