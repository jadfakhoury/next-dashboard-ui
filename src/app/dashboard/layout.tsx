import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/Menu';
import NavBar from '@/components/NavBar';
import styles from './styles.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.leftContainer}>
        <Link
          href='/'
          className={styles.logo}
        >
          <Image src='/logo.png' alt='logo' width={32} height={32} />
          <span className={styles.title}>SchoolLama</span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className={styles.rightContainer}>
        <NavBar />
        {children}
      </div>
    </div>
  );
}
