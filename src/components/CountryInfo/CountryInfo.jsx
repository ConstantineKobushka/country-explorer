import { Heading } from 'components';

import styles from './CountryInfo.module.css';

export const CountryInfo = ({ countryData }) => {
  const {
    flag,
    capital,
    countryName,
    languages = [],
    population,
  } = countryData;

  return (
    <>
      <Heading
        title={countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        bottom
        color
      />
      <div className={styles.wrapper}>
        <img className={styles.img} src={flag} alt={countryName} />

        <div className={styles.box}>
          <h1 className={styles.title}>
            {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
          </h1>

          <h3 className={styles.capital}>
            Capital: <span className={styles.accent}>{capital}</span>
          </h3>

          <p className={styles.details}>
            Population: <span className={styles.accent}>{population}</span>
          </p>

          <p className={styles.details}>
            Languages: <span className={styles.accent}>{languages}</span>
          </p>
        </div>
      </div>
    </>
  );
};
