import { memo } from 'react';
import styles from './Footer.module.css';
import { SocialIcon } from 'components/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const Footer = memo((props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.globe}>
        <FontAwesomeIcon icon={faGlobe} color="#ae1421" size="2x" />
      </div>
      <div className={styles.links}>
        {' '}
        <SocialIcon href="https://www.facebook.com" icon="facebook" />
        <SocialIcon href="https://twitter.com/" icon="twitter" />
        <SocialIcon href="https://www.youtube.com/" icon="youtube" />
      </div>
      <div>
        <div className={styles.create}>
          <FontAwesomeIcon icon={faGlobe} color="#ae1421" />
          <p>Created by Dávid</p>
        </div>
      </div>
    </div>
  );
});
