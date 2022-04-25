import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Project.module.css';
import ReactPlayer from 'react-player';

export const Project = memo((props) => {
  return (
    <>
      <Helmet>
        <title>Project</title>
      </Helmet>
      <div className={styles.project}>
        <h1>Ezt Tominak csak ugy itt hagyom</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=1VjhRrmyeTI" />
      </div>
    </>
  );
});
