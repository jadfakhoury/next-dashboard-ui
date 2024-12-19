import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import EventCalendar from '@/components/EventCalendar';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';
import styles from './styles.module.css';

const AdminPage = () => {
  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.leftContainer}>
        <div className={styles.cardsList}>
          <UserCard type='Student' />
          <UserCard type='Teacher' />
          <UserCard type='Parent' />
          <UserCard type='Staff' />
        </div>

        {/* Middle Charts */}
        <div className={styles.middleChartsContainer}>
          {/* Count Chart */}
          <div className={styles.countChart}>
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className={styles.attendanceChart}>
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Charts */}
        <div className={styles.financeChart}>
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className={styles.eventCalendar}>
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
