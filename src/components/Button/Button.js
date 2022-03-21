import { memo } from 'react';
import styles from './Button.module.css';

export const Button = memo(({}) => {
  return <button className={styles.button}>Get Started</button>;
});
