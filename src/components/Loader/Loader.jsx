import { Bars } from 'react-loader-spinner';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
