import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ goBackHandler }) => {
  return (
    <button className={styles.btn} onClick={goBackHandler}>
      GoBackBtn
    </button>
  );
};
