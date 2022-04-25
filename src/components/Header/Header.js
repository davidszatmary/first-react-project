import { memo } from 'react';
import styles from './Header.module.css';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'components/NavBar/NavBar';

export const Header = memo((props) => {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <FontAwesomeIcon icon={faGlobe} color="#ae1421" size="2x" />
        </div>
        <Typography className={styles.link} component={Link} to="/home">
          Home
        </Typography>
        <Typography className={styles.link} component={Link} to="/project">
          Project
        </Typography>
        <Typography className={styles.link} component={Link} to="/about">
          About
        </Typography>
        <Typography className={styles.link} component={Link} to="/contact">
          Contact
        </Typography>
        <Typography>
          <Navbar />
        </Typography>
      </div>
    </div>
  );
});
