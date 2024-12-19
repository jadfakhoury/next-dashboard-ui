import Image from 'next/image';
import styles from './styles.module.css';

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.date}>
          2024/25
        </span>
        <Image src='/more.png' alt='' width={20} height={20} />
      </div>
      <h1 className={styles.count}>1,2345</h1>
      <h2 className={styles.type}>{type}</h2>
    </div>
  );
};

export default UserCard;
