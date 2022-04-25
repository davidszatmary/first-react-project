import { Card } from 'components/Cards';
import { ImageList } from 'components/ImageList';
import { Helmet } from 'react-helmet-async';
import { memo } from 'react';
import picture from 'assets/image/jacob.jpg';
import styles from './Home.module.css';
import { Box } from 'components/Box';

export const Home = memo((props) => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={styles.home}>
        <div className={styles.hello}>
          <div className={styles.picture}>
            <img src={picture} alt="" />
          </div>
          <h4>Hello Im Dávid</h4>
          <h2>Visual Designer</h2>
          <p>
            Valamit ide kéne irni, de semmi nem jutt eszembe. Ugyhogy azt irom
            le ide, h nem jut eszembe semmi... Valamit ide kéne irni, de semmi
            nem jutt eszembe. Ugyhogy azt irom le ide, h nem jut eszembe
            semmi... Valamit ide kéne irni, de semmi nem jutt eszembe. Ugyhogy
            azt irom le ide, h nem jut eszembe semmi...
          </p>
          <button className={styles.button}>About me</button>
        </div>
        <div className={styles.ide}>
          <Card
            iconIndex={0}
            title="UI Design"
            text="Ide is irnom kéne valamit, de semmi se jut eszembe basszus kulcs. Na nem baj majd máskor..."
          />
          <Card
            className={styles.centerCard}
            iconIndex={1}
            title="Product Design"
            text="Ide is irnom kéne valamit, de semmi se jut eszembe basszus kulcs. Na nem baj majd máskor..."
          />
          <Card
            iconIndex={2}
            title="Branding"
            text="Ide is irnom kéne valamit, de semmi se jut eszembe basszus kulcs. Na nem baj majd máskor..."
          />
        </div>
        <div className={styles.exp}>
          <h1>12</h1>
          <p>Years Experience</p>
        </div>
        <div className={styles.jesus}>
          <Box title="0+" text="clients" />
          <Box title="0" text="Years Experience" />
          <Box title="0+" text="completed Projects" />
          <Box title="10" text="Achievements" />
        </div>
        <div className={styles.imageList}>
          <h2>FEATURED PROJECTS</h2>
          <div className={styles.project}>
            <p>
              Ide is irnom kéne valamit, de semmi se jut eszembe basszus kulcs.
              Na nem baj majd máskor...
            </p>
            <button className={styles.button}>VIEW ALL</button>
          </div>
          <ImageList />
        </div>
        <div className={styles.work}>
          <p>
            <h1>Let's work together on your next project</h1>
            Ide is irnom kéne valamit, de semmi se jut eszembe basszus kulcs. Na
            nem baj majd máskor...Ide is irnom kéne valamit, de semmi se jut
            eszembe basszus kulcs. Na nem baj majd máskor...
          </p>
          <button className={styles.button}>CONTACT</button>
        </div>
        <div className={styles.menu}>
          <p>Home </p>
          <p>About </p>
          <p>Projects </p>
          <p>Contact </p>
        </div>
      </div>
    </>
  );
});
