import clsx from 'clsx';

import styles from './Heading.module.css';

export const Heading = ({ title, top, bottom, color }) => {
  return (
    <h2
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
        [styles.color]: color,
      })}
    >
      {title}
    </h2>
  );
};
