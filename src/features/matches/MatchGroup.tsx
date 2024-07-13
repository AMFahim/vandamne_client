import { NormalizedObject, Schedule, Stage } from '@/data/types';
import SectionHeader from '@/features/league-table/SectionHeader';
import MatchRow from './MatchRow';
const stageToTitle = (stage: Stage, matchDay?: number): string => {
  switch (stage) {
    case 'final':
      return 'Final';
    case 'semi-final':
      return 'Semi Final';
    case 'quarter-final':
      return 'Quarter Final';
    case 'third-place':
      return 'Match for 3rd place';

    default:
      return `Match Day ${matchDay ?? 0}`;
  }
};

const MatchGroup = ({ data }: { data: NormalizedObject<Schedule[]> }) => (
  <div className="flex flex-col gap-8 py-2">
    {data.allIds.map((key) => (
      <div
        key={key}
        className="flex flex-col gap-2 lg:gap-4"
        id={`matchDay${key}`}>
        <SectionHeader title={stageToTitle(key as Stage, +key)} />
        {data.byId[key].map((schedule) => (
          <MatchRow
            enableDetails
            key={`${schedule.homeTeamId}${
              schedule.awayTeamId
            }${schedule.time.toString()}`}
            schedule={schedule}
          />
        ))}
      </div>
    ))}
  </div>
);

export default MatchGroup;
