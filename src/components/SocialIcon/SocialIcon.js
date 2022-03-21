import { memo, useMemo } from 'react';
import twitter from 'assets/images/social/twitter.svg';
import facebook from 'assets/images/social/facebook.svg';
import instagram from 'assets/images/social/instagram.svg';
import linkedin from 'assets/images/social/linkedin.svg';
import styles from './SocialIcon.module.css';

export const SocialIcon = memo(({ icon, href }) => {
  const social = useMemo(() => {
    switch (icon) {
      case 'facebook':
        return facebook;
      case 'twitter':
        return twitter;
      case 'instagram':
        return instagram;
      case 'linkedin':
        return linkedin;
    }
  }, []);

  return (
    <a href={href} target="_blank">
      <img src={social} alt="icon" className={styles.icon} />
    </a>
  );
});
