'use client';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Event 1',
    time: '12:00 PM - 2:00 PM',
    description: 'This is the first event in the event section',
  },
  {
    id: 2,
    title: 'Event 2',
    time: '12:00 PM - 2:00 PM',
    description: 'This is the second event in the event section',
  },
  {
    id: 3,
    title: 'Event 3',
    time: '03:00 PM - 06:00 PM',
    description: 'This is the third event in the event section',
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className={styles.container}>
      <Calendar onChange={onChange} value={value} />
      <div className={styles.header}>
        <h1 className={styles.title}>Events</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <div className={styles.calendar}>
        {events.map((event) => (
          <div className={styles.eventCard} key={event.id}>
            <div className={styles.header}>
              <h1 className={styles.cardTitle}>{event.title}</h1>
              <span className={styles.cardTime}>{event.time}</span>
            </div>
            <p className={styles.cardDescription}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
