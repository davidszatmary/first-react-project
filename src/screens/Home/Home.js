import { memo } from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faCube,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import BasicCard from 'components/Card/Card';
import { Info } from 'components/Info';

export const Home = memo(() => {
  return (
    <div className={styles.body}>
      <div className={styles.menuline}>
        <div>
          <h1>
            <FontAwesomeIcon color="#00bf71" icon={faCubes} />
            Hyfinance
          </h1>
        </div>
        <p>home</p>
        <p>About us</p>
        <p>Services</p>
        <p>
          Cases
          <FontAwesomeIcon icon={faAngleDown} />
        </p>
        <p>
          Pages
          <FontAwesomeIcon icon={faAngleDown} />
        </p>
        <p>Contact</p>
        <Button></Button>
      </div>
      <div className={styles.topic}>
        <Info />
      </div>
      <div className={styles.basic}>
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </div>
    </div>
  );
});
