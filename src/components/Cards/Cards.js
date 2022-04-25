import { memo } from 'react';
import {
  Card as CardWrapper,
  CardActions,
  Typography,
} from '@material-ui/core';
import styles from './Cards.module.css';
import {
  GraphicEq,
  ArrowRightAlt,
  AssignmentTurnedIn,
  ViewQuilt,
} from '@material-ui/icons';

export const Card = memo(
  ({ iconIndex, title, text, className, title1, text1 }) => {
    return (
      <CardWrapper className={[styles.card, className].join(' ')}>
        {/* <div className={styles.icon}> */}
        {iconIndex === 0 ? (
          <ViewQuilt sx={{ fontSize: 80 }} />
        ) : iconIndex === 1 ? (
          <AssignmentTurnedIn sx={{ fontSize: 80 }} />
        ) : (
          <GraphicEq sx={{ fontSize: 80 }} />
        )}
        {/* </div> */}
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.text}>{text}</Typography>

        <CardActions>
          <div className={styles.button}>
            KNOW MORE
            <ArrowRightAlt />
          </div>
        </CardActions>
        <Typography>{title1}</Typography>
        <Typography>{text1}</Typography>
      </CardWrapper>
    );
  },
);
