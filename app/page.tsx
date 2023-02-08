import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import HomePage from './home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <HomePage />
      </div>
    </main>
  );
}
