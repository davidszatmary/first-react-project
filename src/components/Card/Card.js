import react from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function BasicCard() {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography className={styles.typo}>
          <h2>Innovative Solutions</h2>
          We bring the right people together to <br /> challenge established
          thinking and drive transform in 2020...
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={styles.read}>
          READ MORE
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </CardActions>
    </Card>
  );
}
