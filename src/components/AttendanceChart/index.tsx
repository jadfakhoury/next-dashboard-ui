'use client';
import Image from 'next/image';
import styles from './styles.module.css';

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 80,
    absent: 40,
  },
  {
    name: 'Wed',
    present: 80,
    absent: 30,
  },
  {
    name: 'Thu',
    present: 95,
    absent: 54,
  },
  {
    name: 'Fri',
    present: 90,
    absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Attendance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
          <XAxis
            dataKey='name'
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align='left'
            verticalAlign='top'
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />
          <Bar
            dataKey='present'
            fill='#FAE27C'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey='absent'
            fill='#C3EBFA'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
