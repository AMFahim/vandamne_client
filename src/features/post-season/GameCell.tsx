import { Schedule, Stage } from '@/data/types';
import appContext from '@/lib/AppContext';
import { useContext } from 'react';
import Round from './Round';
const getScheduleByIndex = (seasonSchedule: Schedule[], index: number) =>
  seasonSchedule[index];

const GameCell = ({
  scheduleIndex,
  stages,
}: {
  scheduleIndex: number;
  stages: Stage[];
}) => {
  const { seasonSchedule } = useContext(appContext);

  const schedule = getScheduleByIndex(seasonSchedule, scheduleIndex);
  return (
    <div>
      {stages.includes(schedule.stage) ? (
        <div className="sm:pl-8">
          <Round schedule={schedule} />
        </div>
      ) : (
        <div className="h-4"></div>
      )}
    </div>
  );
};

export default GameCell;
