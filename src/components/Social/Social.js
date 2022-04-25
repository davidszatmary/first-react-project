import { memo, useMemo } from 'react';
import twitter from 'assets/twitter.svg';
import facebook from 'assets/facebook.svg';
import youtube from 'assets/youtube-square-brands.svg';
import styles from './Social.module.css';

export const SocialIcon = memo(({ icon, href }) => {
  const social = useMemo(() => {
    switch (icon) {
      case 'facebook':
        return facebook;
      case 'twitter':
        return twitter;
      case 'youtube':
        return youtube;
    }
  }, [icon]);

  return (
    <a href={href} target="_blank">
      <img src={social} alt="icon" className={styles.icon} />
    </a>
  );
});
