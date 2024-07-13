import { Schedule } from '@/data/types';
import MatchScore from './MatchScore';
const MatchScoreTime = ({
  schedule,
  showVs,
}: {
  schedule: Schedule;
  showVs?: boolean;
}) => {
  const score = schedule.matchResult?.score;
  return (
    <>
      {schedule.matchResult?.score && (
        <MatchScore score={score} penalties={schedule.matchResult.penalties} />
      )}
      {schedule.matchResult?.score === undefined && showVs && (
        <div className="text-xl font-bold uppercase text-blue-900">VS</div>
      )}
    </>
  );
};

export default MatchScoreTime;
