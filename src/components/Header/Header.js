import { memo } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'components/SocialIcon';

export const Header = memo(() => {
  return (
    <div className={styles.header}>
      <div className={styles.support}>
        <div className={styles.number}>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            (+62)546 776 546
          </p>
        </div>
        <div className={styles.numberone}>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            support@domain.com
          </p>
        </div>
      </div>

      <div className={styles.links}>
        <p>Follow us:</p>
        <SocialIcon href="https://www.facebook.com" icon="facebook" />
        <SocialIcon href="https://twitter.com/" icon="twitter" />
        <SocialIcon href="https://instagram.com/" icon="instagram" />
        <SocialIcon href="https://linkedin.com/" icon="linkedin" />
      </div>
    </div>
  );
});
