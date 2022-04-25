import { Typography } from '@material-ui/core';
import { memo } from 'react';
import styles from './Box.module.css';

export const Box = memo(({ title, text, className }) => {
  return (
    <div className={[styles.box, className].join(' ')}>
      <Typography className={styles.title}>{title}</Typography>
      <Typography className={styles.text}>{text}</Typography>
    </div>
  );
});
