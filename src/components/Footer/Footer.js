import { memo } from 'react';
import styles from './Footer.module.css';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const Footer = memo(() => {
  return (
    <div className={styles.footer}>
      <div className={styles.video}>
        <ReactPlayer url="https://www.youtube.com/watch?v=KqFHB0yiV50" />
        <div className={styles.number}>
          <h3>
            <FontAwesomeIcon color="#00bf71" size="1.5" icon={faThumbsUp} />
            25
          </h3>
          <br />
          Years of experience
          <h3>
            <FontAwesomeIcon color="#00bf71" icon={faPaperPlane} />
            350
          </h3>
          <br />
          Complemented Projects
        </div>
      </div>
      <div>
        <p className={styles.about}>About Us</p>
        <p>
          <h2>Discover The World of Financial Planner</h2>
          Far far away, behind the world mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Seperated they
          live in Bookmarksgrove right at the coast of the Semantics Far far
          away, behind the world mountains
        </p>
        <Button className={styles.more}>READ MORE</Button>
      </div>
    </div>
  );
});
