import type { NextPage } from 'next';
import styles from './pharm.module.css';

const FindAPharmacy: NextPage = () => {
  return (
    <div className={styles.findAPharmacy}>
      <img className={styles.mapIcon} alt="Map" src="Map.png" />

      <div className={styles.drawer}>
        <div className={styles.imageWrapper}>
          <img className={styles.imageIcon} alt="Pharmacy" src="Image.svg" />
          <div className={styles.paginationDots}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.pharmacyName}>People’s Pharmacy</h2>
            <p className={styles.subtitle}>244 Regent Road, Lumley</p>
          </div>

          <div className={styles.aboutSection}>
            <h3>About</h3>
            <p className={styles.description}>
              People’s Pharmacy is a public drug store which sells quality medicines.
            </p>
          </div>

          <div className={styles.ownedBy}>
            <h3>Owned by</h3>
            <div className={styles.ownerInfo}>
              <img className={styles.avatarIcon} alt="Owner Avatar" src="Avatar.svg" />
              <div>
                <b>Moses Kamara</b>
                <div className={styles.rating}>
                  <img className={styles.starIcon} alt="Star Rating" src="Star Filled.svg" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.forwardButton}>Forward Details</button>
        </div>
      </div>

      <div className={styles.header}>
        <img className={styles.backArrow} alt="Back" src="Arrow Left.svg" />
        <div className={styles.cityInfo}>
          <h1>Find A Pharmacy</h1>
          <p className={styles.dates}>Mar 12 – Mar 15</p>
        </div>
        <p className={styles.resultCount}>291 results</p>
      </div>
    </div>
  );
};

export default FindAPharmacy;
