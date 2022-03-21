import { memo } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import styles from './Info.module.css';

export const Info = memo(() => {
  return (
    <Card
      style={{
        width: 400,
        backgroundColor: 'transparent',
      }}
    >
      <CardContent>
        <Typography style={{ fontSize: 35 }} color="#000" gutterBottom>
          Financial And Marketing Advisory
        </Typography>
        <Typography variant="body2" component="p">
          Far far away, behind the word mointains,
          <br />
          far from the countries Vokaila and Consonantia,there live the blind
          texts..
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={styles.buttonOne} size="normal">
          Contact Us
        </Button>
      </CardActions>
    </Card>
  );
});
