import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

type Props = {
  img1Src: StaticImageData;
  img2Src: StaticImageData;
};

const ImageHover = ({ img1Src, img2Src }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={img1Src} alt="Main Image" className={styles.main} />
      <Image src={img2Src} alt="Behind Image" className={styles.behind} />
    </div>
  );
};

export default ImageHover;
