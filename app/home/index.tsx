import ImageHover from '@/components/ImageHover';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from '@/constants/photo';
import React from 'react';
import styles from './styles.module.scss';

const cards = [
  {
    img1Src: image1,
    img2Src: image2,
  },
  {
    img1Src: image3,
    img2Src: image4,
  },
  {
    img1Src: image5,
    img2Src: image6,
  },
  {
    img1Src: image7,
    img2Src: image8,
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      {cards.map((card, idx) => (
        <ImageHover key={idx} img1Src={card.img1Src} img2Src={card.img2Src} />
      ))}
    </div>
  );
};

export default HomePage;
