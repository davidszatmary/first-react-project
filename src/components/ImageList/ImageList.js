import styles from './ImageList.module.css';
import { Typography } from '@material-ui/core';
import pictureBlackpanter from 'assets/image/Blackpanter.jpg';
import pictureFestival from 'assets/image/Festival.jpg';
import pictureFood from 'assets/image/Food.jpg';
import pictureChair from 'assets/image/Chair.jpg';

export const ImageList = () => {
  return (
    <div className={styles.ImageList}>
      {itemData.map((item, index) => (
        <div key={index}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            width={'300px'}
            height={'200px'}
          />
          <Typography>{item.title}</Typography>
          <button className={styles.button}>KNOW MORE</button>
        </div>
      ))}
    </div>
  );
};
const itemData = [
  {
    img: pictureBlackpanter,
    title: 'Blackpanter',
  },
  {
    img: pictureFestival,
    title: 'Mozaik',
  },
  {
    img: pictureFood,
    title: 'Foodasa',
  },
  {
    img: pictureChair,
    title: 'Marco Accent',
  },
];
