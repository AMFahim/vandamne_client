import TeamGroupIcon from 'src/icons/TeamGroupIcon';

const Overview = () => {
  return (
    <div className='grid grid-cols-2 gap-6 px-5 mt-2'>
      <div className='p-3 border border-blue-900 rounded'>
        <div className="flex gap-2">
          <TeamGroupIcon />
          <h3 className="text-black text-base font-normal">Teams</h3>
        </div>
        <h3 className="text-blue-900 text-[40px] font-semibold mt-5">25</h3>
      </div>
      <div className='p-3 border border-blue-900 rounded'>
        <div className="flex gap-2">
          <TeamGroupIcon />
          <h3 className="text-black text-base font-normal">Leagues</h3>
        </div>
        <h3 className="text-blue-900 text-[40px] font-semibold mt-5">12</h3>
      </div>
      <div className='p-3 border border-blue-900 rounded'>
        <div className="flex gap-2">
          <TeamGroupIcon />
          <h3 className="text-black text-base font-normal">Goals Scored</h3>
        </div>
        <h3 className="text-blue-900 text-[40px] font-semibold mt-5">37</h3>
      </div>
      <div className='p-3 border border-blue-900 rounded'>
        <div className="flex gap-2">
          <TeamGroupIcon />
          <h3 className="text-black text-base font-normal">Goals Scored</h3>
        </div>
        <h3 className="text-blue-900 text-[40px] font-semibold mt-5">37</h3>
      </div>
     
     
    </div>
  );
};

export default Overview;
