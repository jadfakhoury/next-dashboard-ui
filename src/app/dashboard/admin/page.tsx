import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='Student' />
          <UserCard type='Teacher' />
          <UserCard type='Parent' />
          <UserCard type='Staff' />
        </div>

        {/* Middle Charts */}
        <div className='flex gap-4 lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'></div>
        </div>

        {/* Bottom Charts */}
        <div className=''></div>
      </div>

      {/* Right */}
      <div className='w-full lg:w-1/3'>r</div>
    </div>
  );
};

export default AdminPage;
