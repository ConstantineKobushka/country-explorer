import css from './ErrorMessage.module.css';

export const ErrorMessage = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};
