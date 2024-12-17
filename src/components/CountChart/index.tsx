'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.header}>
        <h1 className={styles.title}>Students</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>

      {/* Chart */}
      <div className={styles.chart}>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey='count' />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src='/maleFemale.png'
          alt=''
          width={50}
          height={50}
          className={styles.image}
        />
      </div>

      {/* Bottom */}
      <div className={styles.legendContainer}>
        <div className={styles.legend}>
          <div className={`${styles.legendCircle} ${styles.lamaSky}`}></div>
          <h1 className={styles.legendNumber}>1,234</h1>
          <h2 className={styles.legendDetails}>Boys (55%)</h2>
        </div>
        <div className={styles.legend}>
          <div className={`${styles.legendCircle} ${styles.lamaYellow}`}></div>
          <h1 className={styles.legendNumber}>1,234</h1>
          <h2 className={styles.legendDetails}>Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
