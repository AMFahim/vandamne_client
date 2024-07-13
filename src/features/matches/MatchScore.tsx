import { MatchRecord } from '@/data/types';
import ScoreCard from './ScoreCard';

const MatchScore = ({
  score,
  penalties,
}: {
  score?: MatchRecord;
  penalties?: MatchRecord;
}) => {
  const home = score?.home ?? 0;
  const away = score?.away ?? 0;

  return (
    <div className="flex justify-center">
      {/* Mobile */}
      <div className="flex flex-col gap-2 px-2 md:hidden">
        <ScoreCard>
          <span className="font-light">
            {penalties && `(${penalties.home})`}
          </span>{' '}
          {home}
        </ScoreCard>
        <ScoreCard>
          <span className="font-light">
            {penalties && `(${penalties.away})`}
          </span>{' '}
          {away}
        </ScoreCard>
      </div>

      {/* Desktop */}
      <div className="hidden flex-col gap-2 px-2 md:flex">
        <div className="flex gap-2 self-center">
          <ScoreCard>{home}</ScoreCard>
          <ScoreCard>{away}</ScoreCard>
        </div>
        {penalties && (
          <div className="flex gap-2">
            <ScoreCard penalties>{`(${penalties.home})`}</ScoreCard>
            <ScoreCard penalties>{`(${penalties.away})`}</ScoreCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchScore;
